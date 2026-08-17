import process from 'node:process'
import { Resend } from 'resend'

const MAX_BODY_SIZE = 10_000

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const { name, email, budget, message } = request.body || {}
  const cleanName = typeof name === 'string' ? name.trim() : ''
  const cleanEmail = typeof email === 'string' ? email.trim() : ''
  const cleanBudget = typeof budget === 'string' ? budget.trim() : ''
  const cleanMessage = typeof message === 'string' ? message.trim() : ''

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return response.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!/^\S+@\S+\.\S+$/.test(cleanEmail)) {
    return response.status(400).json({ error: 'Please provide a valid email address.' })
  }

  if ([cleanName, cleanEmail, cleanBudget, cleanMessage].join('').length > MAX_BODY_SIZE) {
    return response.status(413).json({ error: 'Your message is too long.' })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.')
    return response.status(500).json({ error: 'Email service is not configured.' })
  }

  const { error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
    to: [process.env.CONTACT_TO_EMAIL || 'aalibest007@gmail.com'],
    replyTo: cleanEmail,
    subject: `New portfolio inquiry from ${cleanName}`,
    html: `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(cleanBudget || 'Not specified')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br>')}</p>
    `,
  })

  if (error) {
    console.error('Resend API error:', error)
    return response.status(502).json({ error: 'Unable to send your message right now. Please try again later.' })
  }

  return response.status(200).json({ success: true })
}
