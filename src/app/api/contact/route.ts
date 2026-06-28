import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function buildCompanyEmail(data: {
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
  submittedAt: string;
}) {
  return `
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Yêu cầu tư vấn mới</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

      <!-- Header -->
      <tr>
        <td style="background:#c1121f;padding:28px 36px;text-align:center;">
          <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">
            동일 유학 · Dongil Edu
          </p>
          <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">
            Tư Vấn Du Học Hàn Quốc
          </p>
        </td>
      </tr>

      <!-- Alert banner -->
      <tr>
        <td style="background:#fff3cd;padding:12px 36px;border-bottom:1px solid #ffc107;">
          <p style="margin:0;font-size:13px;color:#856404;font-weight:600;text-align:center;">
            📋 Có yêu cầu tư vấn mới — vui lòng liên hệ khách hàng trong 24h
          </p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:32px 36px;">
          <h2 style="margin:0 0 24px;font-size:18px;color:#16181d;font-weight:700;">
            Thông tin khách hàng
          </h2>

          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:36%;color:#6b7280;font-size:14px;vertical-align:top;">
                Họ và tên
              </td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:600;color:#16181d;">
                ${data.name}
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:14px;vertical-align:top;">
                Điện thoại
              </td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:600;">
                <a href="tel:${data.phone.replace(/\s/g, "")}" style="color:#c1121f;text-decoration:none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:14px;vertical-align:top;">
                Email
              </td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">
                ${data.email
                  ? `<a href="mailto:${data.email}" style="color:#c1121f;text-decoration:none;">${data.email}</a>`
                  : '<span style="color:#aaa;">—</span>'}
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:14px;vertical-align:top;">
                Hệ du học
              </td>
              <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">
                <span style="display:inline-block;background:#fdecec;color:#c1121f;font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px;">
                  ${data.program}
                </span>
              </td>
            </tr>
            ${
              data.message
                ? `
            <tr>
              <td style="padding:10px 0;color:#6b7280;font-size:14px;vertical-align:top;">
                Lời nhắn
              </td>
              <td style="padding:10px 0;font-size:14px;color:#16181d;line-height:1.6;">
                ${data.message.replace(/\n/g, "<br/>")}
              </td>
            </tr>`
                : ""
            }
          </table>
        </td>
      </tr>

      <!-- CTA buttons -->
      <tr>
        <td style="padding:0 36px 32px;">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-right:12px;">
                <a href="tel:${data.phone.replace(/\s/g, "")}"
                   style="display:inline-block;background:#c1121f;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:11px 24px;border-radius:24px;">
                  📞 Gọi ngay
                </a>
              </td>
              ${
                data.email
                  ? `<td>
                <a href="mailto:${data.email}"
                   style="display:inline-block;background:#ffffff;color:#c1121f;text-decoration:none;font-size:14px;font-weight:600;padding:10px 24px;border-radius:24px;border:1.5px solid #c1121f;">
                  ✉ Gửi email
                </a>
              </td>`
                  : ""
              }
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f9f9f9;border-top:1px solid #eee;padding:16px 36px;text-align:center;">
          <p style="margin:0;font-size:12px;color:#aaa;">
            Gửi lúc ${data.submittedAt} (Giờ VN) · Dongil Edu Website
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>
  `.trim();
}

function buildConfirmEmail(name: string) {
  return `
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Đã nhận yêu cầu tư vấn</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

      <!-- Header -->
      <tr>
        <td style="background:#c1121f;padding:28px 36px;text-align:center;">
          <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">동일 유학 · Dongil Edu</p>
          <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">Tư Vấn Du Học Hàn Quốc</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:36px 36px 24px;">
          <p style="margin:0 0 16px;font-size:20px;font-weight:700;color:#16181d;">
            Xin chào ${name}! 👋
          </p>
          <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
            Chúng tôi đã nhận được yêu cầu tư vấn du học Hàn Quốc của bạn.
            Chuyên viên <strong>Dongil Edu</strong> sẽ liên hệ với bạn trong vòng
            <strong style="color:#c1121f;">24 giờ</strong> làm việc để tư vấn chi tiết về:
          </p>
          <ul style="margin:0 0 20px;padding-left:20px;color:#374151;font-size:15px;line-height:2;">
            <li>Lộ trình học tập phù hợp với học lực và tài chính</li>
            <li>Các trường đại học/cao đẳng liên kết uy tín</li>
            <li>Chi phí du học và học bổng khả dụng</li>
            <li>Hồ sơ và quy trình xin visa</li>
          </ul>
          <p style="margin:0 0 28px;font-size:15px;color:#374151;line-height:1.7;">
            Nếu cần hỗ trợ gấp, bạn có thể liên hệ trực tiếp qua hotline hoặc
            nhắn tin Facebook của chúng tôi.
          </p>

          <table cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:10px;padding:20px 24px;width:100%;box-sizing:border-box;border:1px solid #e5e7eb;">
            <tr>
              <td style="font-size:13px;color:#6b7280;padding-bottom:8px;">Hotline (Zalo / Viber)</td>
            </tr>
            <tr>
              <td style="font-size:20px;font-weight:700;color:#c1121f;padding-bottom:12px;">
                <a href="tel:+84977728395" style="color:#c1121f;text-decoration:none;">0977.728.395</a>
              </td>
            </tr>
            <tr>
              <td style="font-size:13px;color:#6b7280;padding-bottom:4px;">Email</td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#374151;">dongiledu68@gmail.com</td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f9f9f9;border-top:1px solid #eee;padding:20px 36px;text-align:center;">
          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
            Công ty TNHH Tư Vấn Du Học Dongil Edu
          </p>
          <p style="margin:0;font-size:12px;color:#aaa;">
            Phố Nguyễn Thiện Tích, Phường Võ Cường, Tỉnh Bắc Ninh
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, program, message } = body as Record<string, string>;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Thiếu họ tên hoặc số điện thoại." }, { status: 400 });
    }

    const now = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      hour12: false,
    });

    await transporter.sendMail({
      from: `"Dongil Edu Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email || undefined,
      subject: `[Dongil Edu] Yêu cầu tư vấn mới — ${name}`,
      html: buildCompanyEmail({ name, phone, email: email ?? "", program, message: message ?? "", submittedAt: now }),
    });

    if (email?.trim()) {
      await transporter.sendMail({
        from: `"Dongil Edu" <${process.env.GMAIL_USER}>`,
        to: email.trim(),
        subject: "Dongil Edu đã nhận yêu cầu tư vấn của bạn ✓",
        html: buildConfirmEmail(name),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] mail error:", err);
    return NextResponse.json({ error: "Gửi thất bại, vui lòng thử lại." }, { status: 500 });
  }
}
