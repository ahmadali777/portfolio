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
        <p className="mb-2 font-body text-brand-100">Contact</p>
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
            <span className="mt-1 text-sm text-brand-100 break-all">{method.value}</span>
            <span className="mt-3 text-sm leading-relaxed text-brand-200">{method.note}</span>
            <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand-900 transition-colors group-hover:text-brand-50">
              Reach out
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-7 py-10 text-center shadow-xl shadow-brand-900/25 sm:px-10">
        <p className="font-heading text-2xl font-bold text-brand-50">Get your app made</p>
        <p className="mx-auto mt-3 max-w-md text-brand-100 text-sm leading-relaxed sm:text-base">
          Prefer a quick chat instead of email? Reach out and I'll reply within a day
          with a clear plan, timeline, and price.
        </p>
        <a
          href="mailto:ahmadswe007@gmail.com"
          className="mt-6 inline-block rounded-full bg-brand-400 px-8 py-4 font-heading text-base font-bold text-brand-50 shadow-lg shadow-brand-900/30 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-300"
        >
          Start the conversation
        </a>
      </div>
    </section>
  )
}

export default Contact
