import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // User confirmation email template (inline HTML with Tailwind CSS)
    const userEmailHtml = `
      <div style="background-color: #f1f5f9; font-family: sans-serif; padding: 20px;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border: 1px solid #047857; border-radius: 8px;">
          <div style="background-color: #047857; color: #ffffff; text-align: center; padding: 24px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <h1 style="font-size: 24px; font-weight: bold;">Dr. Kumar Foundation</h1>
            <p style="color: #d1fae5;">The Wandering Light of Kashmir</p>
          </div>
          <div style="padding: 24px;">
            <h2 style="font-size: 20px; font-weight: 600; color: #065f46; margin-bottom: 16px;">
              Thank You for Reaching Out, ${name}!
            </h2>
            <p style="color: #4b5563; margin-bottom: 16px;">
              We've received your message and our team is honored to connect with you. 
              Your inquiry about "${subject}" is important to us, and we'll respond soon.
            </p>
            <div style="background-color: #ecfdf5; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <h3 style="font-size: 16px; font-weight: 500; color: #047857; margin-bottom: 8px;">Your Message:</h3>
              <p style="color: #4b5563;">${message}</p>
            </div>
            <p style="color: #4b5563; margin-bottom: 16px;">
              While you wait, explore Dr. Kumar's teachings of healing, peace, and spiritual awakening on our platform.
              We're grateful to have you as part of our global community.
            </p>
            
          </div>
          <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="color: #4b5563; font-size: 14px;">
              With Blessings,<br />
              The Dr. Kumar Foundation Team<br />
              <a href="mailto:contact@drkumarfoundation.org" style="color: #047857; text-decoration: none;">contact@drkumarfoundation.org</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Admin notification email template (inline HTML with Tailwind CSS)
    const adminEmailHtml = `
      <div style="background-color: #f1f5f9; font-family: sans-serif; padding: 20px;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border: 1px solid #047857; border-radius: 8px;">
          <div style="background-color: #047857; color: #ffffff; text-align: center; padding: 24px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <h1 style="font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
            <p style="color: #d1fae5;">Dr. Kumar Foundation Contact Notification</p>
          </div>
          <div style="padding: 24px;">
            <h2 style="font-size: 20px; font-weight: 600; color: #065f46; margin-bottom: 16px;">
              New Message Received
            </h2>
            <div style="margin-bottom: 16px;">
              <h3 style="font-size: 16px; font-weight: 500; color: #047857;">From:</h3>
              <p style="color: #4b5563;">${name} &lt;${email}&gt;</p>
            </div>
           
          
            <div style="margin-bottom: 16px;">
              <h3 style="font-size: 16px; font-weight: 500; color: #047857;">Subject:</h3>
              <p style="color: #4b5563;">${subject}</p>
            </div>
            <div style="background-color: #ecfdf5; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <h3 style="font-size: 16px; font-weight: 500; color: #047857; margin-bottom: 8px;">Message:</h3>
              <p style="color: #4b5563;">${message}</p>
            </div>
            <p style="color: #4b5563;">
              Please review this inquiry and respond promptly to nurture our community's connection.
            </p>
          </div>
          <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="color: #4b5563; font-size: 14px;">
              Dr. Kumar Foundation Team<br />
              <a href="mailto:contact@drkumarfoundation.org" style="color: #047857; text-decoration: none;">contact@drkumarfoundation.org</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Send confirmation email to the user
    const userEmail = await transporter.sendMail({
      from: '"Dr. Kumar Foundation" <connect@sufipulse.com>',
      to: email,
      subject: 'Thank You for Contacting Dr. Kumar Foundation',
      html: userEmailHtml,
    });

    // Send notification email to admin
    const adminEmail = await transporter.sendMail({
      from: '"Dr. Kumar Foundation" <connect@sufipulse.com>',
      to: 'connect@sufipulse.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: adminEmailHtml,
    });

    // Check if both emails were sent successfully
    if (userEmail.accepted.length > 0 && adminEmail.accepted.length > 0) {
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    } else {
      throw new Error('Failed to send one or more emails');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    console.log(error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}