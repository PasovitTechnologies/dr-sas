import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { lastName, firstName, middleName, email, phone, rating, review } =
      body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Review" <${process.env.EMAIL_USER}>`,
      to: "sasinmail@gmail.com",
      subject: "Новый отзыв пациента",
      html: `
        <h3>Представлен новый отзыв</h3>
        <p><strong>Фамилия:</strong> ${lastName}</p>
        <p><strong>Имя:</strong> ${firstName}</p>
        <p><strong>Отчество:</strong> ${middleName || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Телефон:</strong> ${phone || "-"}</p>
        <p><strong>Рейтинг:</strong> ${rating}</p>
        <p><strong>Отзыв:</strong></p>
        <p>${review}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
