import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, email, best_time, message } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const bestTimeLabel: Record<string, string> = {
    morning: "Morning (9 AM – 12 PM)",
    afternoon: "Afternoon (12 PM – 3 PM)",
    evening: "Evening (3 PM – 6 PM)",
    anytime: "Anytime",
  };

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e">
      <div style="background:#07091A;padding:28px 32px;border-radius:6px">
        <img src="https://nationalmajestic.in/assets/images/national-majestic-logo.png"
             alt="National Majestic" style="max-width:140px;margin-bottom:24px" />
        <h2 style="color:#fff;margin:0 0 4px">New Callback Request</h2>
        <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:0 0 24px">
          Submitted via majestic.ads.nationalbuilders.in on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:10px 0;color:rgba(255,255,255,0.55);width:40%;border-bottom:1px solid rgba(255,255,255,0.08)">Name</td>
            <td style="padding:10px 0;color:#fff;border-bottom:1px solid rgba(255,255,255,0.08)">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:rgba(255,255,255,0.55);border-bottom:1px solid rgba(255,255,255,0.08)">Phone</td>
            <td style="padding:10px 0;color:#fff;border-bottom:1px solid rgba(255,255,255,0.08)">${phone}</td>
          </tr>
          ${email ? `<tr>
            <td style="padding:10px 0;color:rgba(255,255,255,0.55);border-bottom:1px solid rgba(255,255,255,0.08)">Email</td>
            <td style="padding:10px 0;color:#fff;border-bottom:1px solid rgba(255,255,255,0.08)">${email}</td>
          </tr>` : ""}
          ${best_time ? `<tr>
            <td style="padding:10px 0;color:rgba(255,255,255,0.55);border-bottom:1px solid rgba(255,255,255,0.08)">Best Time</td>
            <td style="padding:10px 0;color:#fff;border-bottom:1px solid rgba(255,255,255,0.08)">${bestTimeLabel[best_time] ?? best_time}</td>
          </tr>` : ""}
          ${message ? `<tr>
            <td style="padding:10px 0;color:rgba(255,255,255,0.55)">Message</td>
            <td style="padding:10px 0;color:#fff">${message}</td>
          </tr>` : ""}
        </table>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "National Majestic <onboarding@resend.dev>",
      to: ["marketingkochi@nationalbuilders.in"],
      subject: `Callback Request – ${name} (${phone})`,
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
