import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "sasinmail@gmail.com",
      subject: subject || "Новое сообщение с сайта",
      html: `
        <h3>Новое сообщение с сайта</h3>
        
        <p><strong>Имя:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Телефон:</strong> ${phone || "-"}</p>
        <p><strong>Тема:</strong> ${subject || "-"}</p>

        <p><strong>Сообщение:</strong></p>
        <p>${message || "-"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
