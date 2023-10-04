import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "noreply@resend.dev",
    to: "valdryan08@gmail.com",
    subject: "Test React Email",
    react: <WelcomeTemplate name="Valdryan" />,
  });

  return NextResponse.json({});
}
