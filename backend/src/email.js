import nodemailer from 'nodemailer'
import { config } from './config.js'

// Basic HTML escape to avoid injection in emails
const escapeHtml = (str = '') =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

// Create transporter lazily so we can short-circuit when creds are missing
function createTransporter() {
  if (!config.emailUser || !config.emailPassword || !config.emailTo) {
    return null
  }
  return nodemailer.createTransport({
    service: config.emailService,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword,
    },
  })
}

/**
 * Send contact form email notification
 */
export async function sendContactEmail(name, email, message) {
  const transporter = createTransporter()
  if (!transporter) {
    return { ok: false, reason: 'missing-email-config' }
  }

  try {
    const mailOptions = {
      from: config.emailUser,
      to: config.emailTo,
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    }

    await transporter.sendMail(mailOptions)
    return { ok: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { ok: false, reason: 'send-failed' }
  }
}
