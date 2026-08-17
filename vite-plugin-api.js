import { loadEnv } from 'vite'
import { Resend } from 'resend'

export default function apiPlugin() {
  return {
    name: 'vite-plugin-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        for await (const chunk of req) body += chunk

        try {
          const { name, email, budget, message } = JSON.parse(body)

          if (!name || !email || !message) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Name, email, and message are required.' }))
            return
          }

          const env = loadEnv(server.config.mode, server.config.root, '')
          const apiKey = env.RESEND_API_KEY
          if (!apiKey) {
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'RESEND_API_KEY is not configured on the server.' }))
            return
          }

          const resend = new Resend(apiKey)

          const { error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'aalibest007@gmail.com',
            replyTo: email,
            subject: `New inquiry from ${name}`,
            html: `
              <h2>New Project Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
          })

          if (error) {
            console.error('Resend API error:', error)
            res.writeHead(502, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: error.message || 'Email service error.' }))
            return
          }

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ success: true }))
        } catch (err) {
          console.error('API error:', err.message || err)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: err.message || 'Failed to send message.' }))
        }
      })
    },
  }
}
