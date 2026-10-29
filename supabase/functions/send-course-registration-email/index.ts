import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RegistrationPayload {
  name: string;
  email: string;
  phone: string;
  course_date: string;
  message?: string;
}

function buildHeader(): string {
  return `
    <div style="background-color:#1a1a1a;padding:24px;text-align:center;">
      <img src="https://raw.githubusercontent.com/digitans/wafaa/main/public/fahmi.png" alt="Fahrschule Wafaa Fahmi" style="height:48px;width:auto;" />
    </div>
  `;
}

function buildFooter(): string {
  return `
    <div style="background-color:#1a1a1a;padding:24px;text-align:center;font-family:system-ui,Arial,sans-serif;">
      <p style="color:#ffffff;font-size:13px;margin:0;line-height:1.6;">
        Fahrschule Wafaa Fahmi &middot; Hochheimer Stra&szlig;e 1 &middot; 55252 Mainz-Kastel &middot; info@wafaafahmi.de
      </p>
    </div>
  `;
}

function buildInternalEmail(data: RegistrationPayload): string {
  const now = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="margin:0;padding:0;background-color:#fefefe;font-family:system-ui,Arial,sans-serif;color:#1a1a1a;">
      <div style="max-width:600px;margin:0 auto;">
        ${buildHeader()}
        <div style="padding:32px 24px;">
          <h1 style="color:#8b0000;font-size:22px;font-weight:700;margin:0 0 24px 0;">Neue Kursanmeldung eingegangen</h1>
          <div style="background-color:#f5f5f7;border-radius:8px;padding:24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">Name:</td>
                <td style="padding:8px 0;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">E-Mail:</td>
                <td style="padding:8px 0;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">Telefon:</td>
                <td style="padding:8px 0;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">Kurstermin:</td>
                <td style="padding:8px 0;">${data.course_date}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">Nachricht:</td>
                <td style="padding:8px 0;">${data.message || "&ndash;"}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">Eingegangen:</td>
                <td style="padding:8px 0;">${now}</td>
              </tr>
            </table>
          </div>
        </div>
        ${buildFooter()}
      </div>
    </body>
    </html>
  `;
}

function buildConfirmationEmail(data: RegistrationPayload): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="margin:0;padding:0;background-color:#fefefe;font-family:system-ui,Arial,sans-serif;color:#1a1a1a;">
      <div style="max-width:600px;margin:0 auto;">
        ${buildHeader()}
        <div style="padding:32px 24px;">
          <p style="font-size:16px;line-height:1.6;margin:0 0 16px 0;">Hallo ${data.name},</p>
          <p style="font-size:16px;line-height:1.6;margin:0 0 24px 0;">Vielen Dank f&uuml;r deine Anmeldung! Wir haben deine Anfrage erhalten und melden uns in K&uuml;rze bei dir.</p>
          <div style="background-color:#f5f5f7;border-radius:8px;padding:24px;margin-bottom:28px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">Kurs:</td>
                <td style="padding:8px 0;">${data.course_date}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">Telefon:</td>
                <td style="padding:8px 0;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">Nachricht:</td>
                <td style="padding:8px 0;">${data.message || "&ndash;"}</td>
              </tr>
            </table>
          </div>
          <div style="text-align:center;margin-bottom:8px;">
            <a href="https://wafaa.bolt.host" style="display:inline-block;background-color:#8b0000;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:6px;">Website besuchen</a>
          </div>
        </div>
        ${buildFooter()}
      </div>
    </body>
    </html>
  `;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const payload: RegistrationPayload = await req.json();

    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Fahrschule Wafaa Fahmi <info@wafaafahmi.de>",
        to: ["info@wafaafahmi.de"],
        bcc: ["contact@creationsbynuri.com"],
        subject: `Neue Kursanmeldung \u2013 ${payload.name}`,
        html: buildInternalEmail(payload),
      }),
    });

    if (!notificationRes.ok) {
      const err = await notificationRes.text();
      throw new Error(`Resend notification email failed: ${err}`);
    }

    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Fahrschule Wafaa Fahmi <info@wafaafahmi.de>",
        to: [payload.email],
        subject: "Deine Anmeldung bei Fahrschule Wafaa Fahmi",
        html: buildConfirmationEmail(payload),
      }),
    });

    if (!confirmationRes.ok) {
      const err = await confirmationRes.text();
      throw new Error(`Resend confirmation email failed: ${err}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
