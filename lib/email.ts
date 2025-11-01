import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: params.to,
      subject: params.subject,
      html: params.html,
      text: params.text,
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}

export async function queueEmail(params: {
  to: string;
  subject: string;
  body: string;
  scheduledAt: Date;
}) {
  await prisma.emailQueue.create({
    data: {
      to: params.to,
      subject: params.subject,
      body: params.body,
      scheduledAt: params.scheduledAt,
      status: 'PENDING',
    },
  });
}

export const emailTemplates = {
  welcome: (name: string) => ({
    subject: 'Welcome to EuroConform',
    html: `
      <h1>Welcome to EuroConform, ${name}!</h1>
      <p>Thank you for joining EuroConform Ltd. Your account has been successfully created.</p>
      <p>You can now start your designation process and manage your EU product compliance.</p>
      <p>If you have any questions, please don't hesitate to contact us.</p>
    `,
  }),
  designationExpiryReminder: (daysLeft: number, designationId: string) => ({
    subject: `Designation Expiring in ${daysLeft} Day${daysLeft > 1 ? 's' : ''}`,
    html: `
      <h1>Designation Expiry Reminder</h1>
      <p>Your designation (${designationId}) will expire in ${daysLeft} day${daysLeft > 1 ? 's' : ''}.</p>
      <p>Please renew your designation to avoid service interruption.</p>
      <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/designations/${designationId}/renew">Renew Now</a>
    `,
  }),
  paymentConfirmation: (amount: number, invoiceId: string) => ({
    subject: 'Payment Confirmation',
    html: `
      <h1>Payment Received</h1>
      <p>Thank you for your payment of €${amount.toFixed(2)}.</p>
      <p>Invoice ID: ${invoiceId}</p>
      <p>This payment has been processed and your subscription is now active.</p>
    `,
  }),
  partnerApplication: (partnerName: string) => ({
    subject: 'Partner Program Application',
    html: `
      <h1>Partner Program Application</h1>
      <p>A new partner application has been received from ${partnerName}.</p>
      <p>Please review and approve in the admin panel.</p>
    `,
  }),
  contactForm: (name: string, email: string, message: string) => ({
    subject: `Contact Form: ${name}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  }),
};

