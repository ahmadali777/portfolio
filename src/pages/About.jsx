function About() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-8 lg:py-16">
      <header className="max-w-2xl">
        <p className="mb-2 font-body text-brand-100">About</p>
        <h1 className="font-heading text-3xl leading-tight text-brand-50 sm:text-5xl">
          Software engineer by title, problem solver by nature.
        </h1>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-7 py-8 shadow-xl shadow-brand-900/25 sm:px-10">
          <p className="font-heading text-xl font-bold text-brand-50">Who I am</p>
          <p className="mt-4 leading-relaxed text-brand-100 text-base sm:text-lg">
            I'm Muhammad Ahmad Ali, a software engineer who cares less about frameworks
            and more about what they unlock for the person using the app. I've shipped
            apps that hardware store owners rely on to track inventory on a shaky
            connection, tools that help families learn the Quran, and dashboards that
            turn daily health habits into one clear view.
          </p>
          <p className="mt-4 leading-relaxed text-brand-100 text-base sm:text-lg">
            My work spans mobile (Flutter, Dart), the web (React), and the backend glue
            that holds it together — Firebase, REST APIs, and AI integrations like the
            Gemini API. Every project starts the same way: a real problem, a real user,
            and a product they'll actually keep using.
          </p>
        </div>

        <div className="grid gap-6">
          {[
            { value: '4+', label: 'Products shipped' },
            { value: '3', label: 'Platforms — iOS, Android & Web' },
            { value: '6+', label: 'Technologies in daily use' },
            { value: '100%', label: 'Offline-first, always' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between rounded-2xl border border-brand-400/30 bg-brand-600/75 px-7 py-5 shadow-lg shadow-brand-900/25"
            >
              <span className="font-heading text-3xl font-bold text-brand-900">{stat.value}</span>
              <span className="text-right text-sm text-brand-100">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Mobile & Cross-Platform',
            tech: 'Flutter · Dart',
            copy: 'One codebase, native feel — apps that keep working when the internet does not.',
          },
          {
            title: 'Web Frontend',
            tech: 'React · HTML · CSS · JavaScript',
            copy: 'Fast, interactive interfaces that feel custom-built — because they are.',
          },
          {
            title: 'Cloud, APIs & AI',
            tech: 'Firebase · REST · Gemini API',
            copy: 'Auth, data sync, and intelligent features wired together end to end.',
          },
        ].map((area) => (
          <article
            key={area.title}
            className="rounded-[2rem] border border-brand-400/30 bg-brand-600/75 p-7 shadow-xl shadow-brand-900/25"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-900">{area.tech}</p>
            <h3 className="mt-3 font-heading text-xl font-bold text-brand-50">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-100">{area.copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-7 py-8 shadow-xl shadow-brand-900/25 sm:px-10">
        <p className="font-heading text-xl font-bold text-brand-50">How I work</p>
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            'Solve one real problem thoroughly — not a dozen shallow features.',
            'Design offline-first, because stores and users cannot always count on Wi-Fi.',
            'Polish the details people actually feel: speed, billing, credit tracking.',
            'Ship to real users, learn from their feedback, then iterate.',
          ].map((point) => (
            <li key={point} className="flex items-start gap-3 text-brand-100">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-400 text-[11px] font-bold text-brand-50">
                ✓
              </span>
              <span className="text-base leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
