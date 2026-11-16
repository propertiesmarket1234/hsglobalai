const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = "C:\\Users\\HSGlobalAI\\.gemini\\antigravity\\brain\\64b9ef0b-bac5-4284-a57f-7b64afae9cb9\\screenshots";

if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendCdpCommand(ws, method, params = {}, id = 1) {
  return new Promise((resolve, reject) => {
    const msgId = id;
    const handler = (evt) => {
      try {
        const data = JSON.parse(evt.data);
        if (data.id === msgId) {
          ws.removeEventListener('message', handler);
          if (data.error) {
            reject(new Error(data.error.message || JSON.stringify(data.error)));
          } else {
            resolve(data.result);
          }
        }
      } catch (err) {
        // ignore parse error
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
}

async function run() {
  console.log("Starting screenshot capture...");

  const tmpUserDir = path.join(process.env.TEMP, "chrome_ss_" + Date.now());
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

  const chromeProc = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    `--user-data-dir=${tmpUserDir}`,
    "--remote-debugging-port=9222",
    "--window-size=1440,900"
  ], { detached: true, stdio: 'ignore' });

  // wait for chrome to start
  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch("http://127.0.0.1:9222/json");
      const list = await res.json();
      if (list && list.length > 0 && list[0].webSocketDebuggerUrl) {
        wsUrl = list[0].webSocketDebuggerUrl;
        break;
      }
    } catch (e) {
      // wait
    }
    await sleep(500);
  }

  if (!wsUrl) {
    console.error("Failed to connect to Chrome debugging port");
    try { process.kill(chromeProc.pid); } catch (e) {}
    process.exit(1);
  }

  console.log("Connected to Chrome CDP:", wsUrl);
  const ws = new WebSocket(wsUrl);

  await new Promise((resolve) => {
    ws.addEventListener('open', resolve);
  });

  let cmdId = 1;

  // Enable necessary domains
  await sendCdpCommand(ws, "Page.enable", {}, cmdId++);
  await sendCdpCommand(ws, "DOM.enable", {}, cmdId++);
  await sendCdpCommand(ws, "Runtime.enable", {}, cmdId++);

  console.log("Navigating to http://127.0.0.1:3000...");
  await sendCdpCommand(ws, "Page.navigate", { url: "http://127.0.0.1:3000" }, cmdId++);

  // Wait for page load and hydration
  await sleep(4000);

  // Helper to capture a screenshot
  async function captureElement(selector, filename, width = 1440, height = 900) {
    // Set device metrics
    await sendCdpCommand(ws, "Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600,
    }, cmdId++);

    await sleep(500);

    // Scroll element into view and get its bounding box
    const evalRes = await sendCdpCommand(ws, "Runtime.evaluate", {
      expression: `
        (function() {
          const el = document.querySelector('${selector}');
          if (!el) return null;
          el.scrollIntoView({ block: 'start', inline: 'nearest' });
          const rect = el.getBoundingClientRect();
          return {
            x: Math.max(0, rect.left + window.scrollX),
            y: Math.max(0, rect.top + window.scrollY),
            width: Math.min(window.innerWidth, rect.width),
            height: Math.min(rect.height, 1400)
          };
        })()
      `,
      returnByValue: true
    }, cmdId++);

    await sleep(800);

    const bounds = evalRes.result ? evalRes.result.value : null;

    let clip = undefined;
    if (bounds && bounds.width > 0 && bounds.height > 0) {
      clip = {
        x: bounds.x,
        y: bounds.y,
        width: bounds.width,
        height: bounds.height,
        scale: 1
      };
    }

    const ssParams = {
      format: "png",
      captureBeyondViewport: true
    };
    if (clip) {
      ssParams.clip = clip;
    }

    const ssRes = await sendCdpCommand(ws, "Page.captureScreenshot", ssParams, cmdId++);
    const buf = Buffer.from(ssRes.data, 'base64');
    const outPath = path.join(ARTIFACT_DIR, filename);
    fs.writeFileSync(outPath, buf);
    console.log(`Saved screenshot: ${filename} (${buf.length} bytes)`);
  }

  // 1. Desktop Sections
  console.log("Capturing Desktop sections...");
  await captureElement("#hero", "desktop-01-hero.png", 1440, 900);
  await captureElement("#hardware-deployments", "desktop-02-products.png", 1440, 900);
  await captureElement("#enterprise-simulator", "desktop-03-simulator.png", 1440, 900);
  await captureElement("#domains", "desktop-04-industries.png", 1440, 900);
  await captureElement("#enterprise-security", "desktop-05-security.png", 1440, 900);
  await captureElement("#roi-comparison", "desktop-06-comparison.png", 1440, 900);
  await captureElement("#latest-insights", "desktop-07-insights.png", 1440, 900);
  await captureElement("#faq", "desktop-08-faq.png", 1440, 900);
  await captureElement("#cta", "desktop-09-cta.png", 1440, 900);
  await captureElement("footer", "desktop-10-footer.png", 1440, 900);

  // 2. Tablet Sections (768px)
  console.log("Capturing Tablet sections...");
  await captureElement("#hero", "tablet-01-hero.png", 768, 1024);
  await captureElement("#hardware-deployments", "tablet-02-products.png", 768, 1024);
  await captureElement("#domains", "tablet-03-industries.png", 768, 1024);
  await captureElement("#enterprise-security", "tablet-04-security.png", 768, 1024);
  await captureElement("#roi-comparison", "tablet-05-comparison.png", 768, 1024);

  // 3. Mobile Sections (390px)
  console.log("Capturing Mobile sections...");
  await captureElement("#hero", "mobile-01-hero.png", 390, 844);
  await captureElement("#hardware-deployments", "mobile-02-products.png", 390, 844);
  await captureElement("#enterprise-simulator", "mobile-03-simulator.png", 390, 844);
  await captureElement("#domains", "mobile-04-industries.png", 390, 844);
  await captureElement("#enterprise-security", "mobile-05-security.png", 390, 844);
  await captureElement("#roi-comparison", "mobile-06-comparison.png", 390, 844);
  await captureElement("#cta", "mobile-07-cta.png", 390, 844);

  ws.close();
  try { process.kill(chromeProc.pid); } catch (e) {}
  console.log("All screenshots captured successfully!");
}

run().catch(err => {
  console.error("Screenshot capture error:", err);
  process.exit(1);
});
