const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const contactMethods = [
  {
    label: 'Email',
    value: 'ahmadswe007@gmail.com',
    href: 'mailto:ahmadswe007@gmail.com',
    note: 'Fastest way to reach me for project inquiries.',
    Icon: MailIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/ahmadali777',
    href: 'https://github.com/ahmadali777',
    note: 'Browse my code and open-source experiments.',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'in/muhammad-ahmad-ali',
    href: 'https://www.linkedin.com/in/muhammad-ahmad-ali-10a481179',
    note: 'Connect with me professionally and follow my journey.',
    Icon: LinkedInIcon,
  },
]

function Contact() {
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

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.href.startsWith('mailto') ? undefined : '_blank'}
            rel={method.href.startsWith('mailto') ? undefined : 'noreferrer'}
            className="group flex flex-col rounded-[2rem] border border-brand-400/30 bg-brand-600/75 p-7 shadow-xl shadow-brand-900/25 transition duration-200 hover:-translate-y-1 hover:border-brand-900/60 hover:bg-brand-500/80"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 text-brand-50 transition-colors group-hover:bg-brand-300">
              <method.Icon />
            </span>
            <span className="mt-5 font-heading text-xl font-bold text-brand-50">{method.label}</span>
            <span className="mt-1 text-base text-brand-100 break-all">{method.value}</span>
            <span className="mt-3 text-base leading-relaxed text-brand-200">{method.note}</span>
            <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand-900 transition-colors group-hover:text-brand-50">
              Reach out
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-7 py-10 text-center shadow-xl shadow-brand-900/25 sm:px-10">
        <p className="font-heading text-2xl font-bold text-brand-50">Get your app made</p>
        <p className="mx-auto mt-3 max-w-md text-brand-100 text-base leading-relaxed sm:text-lg">
          Prefer a quick chat instead of email? Reach out on WhatsApp.
        </p>
        <a
          href="https://wa.me/923125408407"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-400 px-8 py-4 font-heading text-base font-bold text-brand-50 shadow-lg shadow-brand-900/30 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-300"
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Contact
