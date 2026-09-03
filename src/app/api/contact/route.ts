import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, countryCode = "+65", phone, company, industry = "Banking", message } = body;

    // Server-side input validation
    if (!name || !name.trim()) {
      return NextResponse.json({ success: false, error: "Full Name is required." }, { status: 400 });
    }
    if (!email || !email.trim() || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "A valid business email address is required." }, { status: 400 });
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json({ success: false, error: "Phone number is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ success: false, error: "Message / project details are required." }, { status: 400 });
    }

    // Read environment variables (supports TENANT_ID / AZURE_TENANT_ID, CLIENT_ID / AZURE_CLIENT_ID, etc.)
    const tenantId = process.env.TENANT_ID || process.env.AZURE_TENANT_ID;
    const clientId = process.env.CLIENT_ID || process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET || process.env.AZURE_CLIENT_SECRET;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "sales@hsglobalai.com";
    const senderEmail = process.env.SENDER_EMAIL || "sales@hsglobalai.com";

    // Helper to check for unconfigured/placeholder credentials
    const isPlaceholder = (val?: string) =>
      !val ||
      val.trim() === "" ||
      val.includes("YOUR_") ||
      val.includes("your_") ||
      val.includes("here");

    if (isPlaceholder(tenantId) || isPlaceholder(clientId) || isPlaceholder(clientSecret)) {
      console.warn("[Contact API] Microsoft Graph credentials missing or unconfigured in .env.local");
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is not yet fully configured. Please set TENANT_ID, CLIENT_ID, and CLIENT_SECRET in .env.local.",
        },
        { status: 500 }
      );
    }

    // 1. Acquire OAuth2 Access Token from Microsoft Identity Platform
    const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
    const tokenParams = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId!,
      client_secret: clientSecret!,
      scope: "https://graph.microsoft.com/.default",
    });

    const tokenResponse = await fetch(tokenEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: tokenParams.toString(),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      console.error("[Microsoft Graph Token Error]:", tokenData);
      return NextResponse.json(
        {
          success: false,
          error: `Authentication with Microsoft Graph failed: ${tokenData.error_description || tokenData.error || "Invalid client credentials."}`,
        },
        { status: 500 }
      );
    }

    const accessToken = tokenData.access_token;
    const fullPhone = `${countryCode} ${phone}`;
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Singapore" });

    // HTML Email layout with HS Global AI branding
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #09090b; color: #f4f4f5; margin: 0; padding: 20px; }
            .container { max-width: 650px; margin: 0 auto; background: #141417; border: 1px solid #27272a; border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #06b6d4, #2563eb); padding: 28px; text-align: center; }
            .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
            .header p { margin: 6px 0 0 0; color: rgba(255,255,255,0.85); font-size: 13px; }
            .content { padding: 28px; }
            .field-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .field-table td { padding: 12px 14px; border-bottom: 1px solid #27272a; font-size: 14px; }
            .field-label { width: 35%; color: #a1a1aa; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
            .field-value { width: 65%; color: #ffffff; font-weight: 500; }
            .field-value a { color: #38bdf8; text-decoration: none; }
            .message-box { background: #09090b; border: 1px solid #27272a; border-radius: 12px; padding: 20px; margin-top: 16px; }
            .message-box h3 { margin: 0 0 10px 0; color: #06b6d4; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
            .message-text { margin: 0; color: #e4e4e7; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
            .footer { background: #09090b; padding: 16px 28px; border-top: 1px solid #27272a; text-align: center; font-size: 12px; color: #71717a; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Sales Inquiry Received</h1>
              <p>Submitted via HS Global AI Official Website Contact Form</p>
            </div>
            <div class="content">
              <table class="field-table">
                <tr>
                  <td class="field-label">Full Name</td>
                  <td class="field-value">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td class="field-label">Business Email</td>
                  <td class="field-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
                </tr>
                <tr>
                  <td class="field-label">Phone Number</td>
                  <td class="field-value">${escapeHtml(fullPhone)}</td>
                </tr>
                <tr>
                  <td class="field-label">Company</td>
                  <td class="field-value">${escapeHtml(company || "N/A")}</td>
                </tr>
                <tr>
                  <td class="field-label">Industry</td>
                  <td class="field-value">${escapeHtml(industry)}</td>
                </tr>
                <tr>
                  <td class="field-label">Submission Time</td>
                  <td class="field-value">${escapeHtml(timestamp)} (SGT)</td>
                </tr>
              </table>

              <div class="message-box">
                <h3>Inquiry / Project Details</h3>
                <p class="message-text">${escapeHtml(message)}</p>
              </div>
            </div>
            <div class="footer">
              HS GLOBAL AI SINGAPORE • Enterprise Sales Automated Notification System
            </div>
          </div>
        </body>
      </html>
    `;

    // 2. Dispatch Email via Microsoft Graph API sendMail Endpoint
    const sendMailEndpoint = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(senderEmail)}/sendMail`;

    const sendMailPayload = {
      message: {
        subject: `[Website Inquiry] New Lead: ${name} (${company || industry})`,
        body: {
          contentType: "HTML",
          content: htmlContent,
        },
        toRecipients: [
          {
            emailAddress: {
              address: receiverEmail,
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: email,
              name: name,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    const graphResponse = await fetch(sendMailEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendMailPayload),
    });

    if (!graphResponse.ok) {
      const graphError = await graphResponse.json().catch(() => ({}));
      console.error("[Microsoft Graph sendMail Error]:", graphError);
      return NextResponse.json(
        {
          success: false,
          error:
            graphError?.error?.message ||
            `Failed to dispatch email via Microsoft Graph (Status: ${graphResponse.status}).`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully! Our team will contact you within 24 business hours.",
    });
  } catch (err: any) {
    console.error("[Contact API Exception]:", err);
    return NextResponse.json(
      {
        success: false,
        error: err?.message || "An unexpected error occurred while submitting your inquiry.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
