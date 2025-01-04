/* eslint-disable @typescript-eslint/ban-ts-comment */
// app/api/contact/route.js
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { firstName, lastName, company, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    // @ts-ignore
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: ` ${
      company ? `${company}` : `${firstName} ${lastName}`
    } <${"support@qrest.ng"}>`,
    to: "Qrestcompany@gmail.com",
    subject: `New message from ${
      company ? `${company} ${email}` : `${firstName} ${lastName}, ${email}`
    } `,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
