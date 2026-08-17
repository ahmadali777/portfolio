import { useState } from 'react'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22 11 13 2 9Z" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const socialLinks = [
  {
    label: 'GitHub',
    value: 'github.com/ahmadali777',
    href: 'https://github.com/ahmadali777',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'in/muhammad-ahmad-ali',
    href: 'https://www.linkedin.com/in/muhammad-ahmad-ali-10a481179',
    Icon: LinkedInIcon,
  },
  {
    label: 'WhatsApp',
    value: 'Chat directly',
    href: 'https://wa.me/923125408407',
    Icon: WhatsAppIcon,
  },
]

const budgetOptions = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const contentType = res.headers.get('content-type') || ''
      const data = contentType.includes('application/json')
        ? await res.json()
        : { error: 'The contact endpoint is unavailable. Please check the Vercel deployment includes api/contact.js.' }

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setForm({ name: '', email: '', budget: '', message: '' })
    } catch (err) {
      console.error(err)
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full rounded-xl border border-brand-400/30 bg-brand-500/60 px-4 py-3 text-brand-50 placeholder-brand-300 outline-none transition focus:border-brand-800 focus:ring-2 focus:ring-brand-800/40'

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-8 lg:py-16">
      <header className="max-w-2xl">
        <p className="mb-2 font-sans text-brand-100">Contact</p>
        <h1 className="font-heading text-3xl leading-tight text-brand-50 sm:text-5xl">
          Have an app idea? Let's build it together.
        </h1>
        <p className="mt-4 max-w-xl text-brand-100 text-base leading-relaxed sm:text-lg">
          Tell me what you need — a mobile app, a web dashboard, or an AI-powered
          feature — and I'll handle the rest. Every project starts with a conversation.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="flex flex-col gap-4 order-1 lg:order-2 lg:col-span-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-brand-400/30 bg-brand-600/75 p-5 shadow-xl shadow-brand-900/25 transition duration-200 hover:-translate-y-0.5 hover:border-brand-900/60 hover:bg-brand-500/80"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-400 text-brand-50 transition-colors group-hover:bg-brand-300">
                <link.Icon />
              </span>
              <div className="min-w-0">
                <span className="block font-heading text-sm font-bold text-brand-50">{link.label}</span>
                <span className="block truncate text-xs text-brand-200">{link.value}</span>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 p-7 shadow-xl shadow-brand-900/25 order-2 lg:order-1 lg:col-span-3 sm:p-9"
        >
          <h2 className="font-heading text-xl font-bold text-brand-50">Send a project inquiry</h2>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
          />

          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`${inputClasses} ${!form.budget ? 'text-brand-300' : ''}`}
          >
            <option value="" disabled>
              Select your budget
            </option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-brand-600 text-brand-50">
                {opt}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Tell us what you want to build..."
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />

          {status === 'success' && (
            <div className="flex items-center gap-2 rounded-xl bg-green-900/40 px-4 py-3 text-sm text-green-300">
              <CheckIcon />
              Message sent! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="rounded-xl bg-red-900/40 px-4 py-3 text-sm text-red-300">
              {errorMsg || 'Something went wrong. Please try again or reach out via WhatsApp.'}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand-400 px-8 py-3.5 font-heading text-base font-bold text-brand-50 shadow-lg shadow-brand-900/30 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-300 disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            {status !== 'sending' && <SendIcon />}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
