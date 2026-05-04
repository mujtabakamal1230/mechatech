"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const { firstName, lastName, email, phone, message } = formData;

    const { data, error } = await resend.emails.send({
      from: "Mechatech Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "hello@mecha-tech.net"],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #239AA1; border-bottom: 2px solid #239AA1; padding-bottom: 10px;">New Contact Submission</h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          </div>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999;">This email was sent from the Mechatech contact form.</p>
        </div>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Resend error:", err);
    return { success: false, error: err.message || "Failed to send email" };
  }
}
