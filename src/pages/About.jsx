import beaconhouseLogo from '../assets/beaconhouse School System logo.jpeg'
import airLogo from '../assets/air university logo.jpg'

const linkClasses =
  'font-semibold text-brand-900 underline underline-offset-4 transition hover:text-brand-50'

const experience = [
  {
    role: 'Facebook Ads Manager Intern',
    company: 'Inspirovix',
    companyHref: 'https://inspirovix.com',
    period: 'Internship',
    copy: (
      <>
        Managed paid ad campaigns for a UK car insurance company,{' '}
        <a
          href="https://www.getcarcover.co.uk"
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          GetCarCover
        </a>
        , learning how to read performance data and turn it into better spend.
      </>
    ),
  },
  {
    role: 'Front-end AI Intern',
    company: 'FlyRank AI',
    companyHref: 'https://flyrank.ai',
    period: 'Internship',
    copy: (
      <>
        Worked on the front-end AI track, where I built this portfolio and my capstone
        project,{' '}
        <a
          href="https://capstone-project-three-silk-20.vercel.app"
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          Spatial Stager AI
        </a>
        .
      </>
    ),
  },
]

const education = [
  {
    name: 'Beaconhouse School System',
    logo: beaconhouseLogo,
    detail: 'O Levels and A Levels',
    copy: 'Completed my O and A Levels at Beaconhouse School System in Rawalpindi, building the foundation in the sciences and math that carries through my work today.',
  },
  {
    name: 'Air University',
    logo: airLogo,
    detail: 'BSc Software Engineering',
    copy: 'Graduated with a degree in Software Engineering from Air University, where I went deep on the theory and practice of building software properly.',
  },
]

function TimelineItem({ last, title, heading, copy }) {
  return (
    <li className="relative pl-12 sm:pl-16">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand-400 ring-4 ring-brand-600" />
      {!last && <span className="absolute left-1.5 top-7 h-[calc(100%-1rem)] w-px bg-brand-400/40" />}
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-900">{title}</p>
      <h3 className="mt-1 font-heading text-xl font-bold text-brand-50 sm:text-2xl">{heading}</h3>
      <p className="mt-3 text-base leading-relaxed text-brand-100 sm:text-lg">{copy}</p>
    </li>
  )
}

function About() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-8 lg:py-16">
      <header className="max-w-2xl">
        <p className="mb-2 font-sans text-brand-100">About</p>
        <h1 className="font-heading text-3xl leading-tight text-brand-50 sm:text-5xl">
          Software engineer by title, problem solver by nature.
        </h1>
      </header>

      <div className="mt-10 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-7 py-8 shadow-xl shadow-brand-900/25 sm:px-10">
        <p className="font-heading text-xl font-bold text-brand-50">Who I am</p>
        <p className="mt-4 leading-relaxed text-brand-100 text-base sm:text-lg">
          I'm Muhammad Ahmad Ali — born and raised in Rawalpindi, Pakistan. I care less
          about frameworks and more about what they unlock for the person using the app.
          I've shipped apps that hardware store owners rely on to track inventory on a
          shaky connection, tools that help families learn the Quran, and dashboards that
          turn daily health habits into one clear view.
        </p>
      </div>

      <div className="mt-6 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-7 py-8 shadow-xl shadow-brand-900/25 sm:px-10">
        <h2 className="font-heading text-2xl font-bold text-brand-50">Education</h2>
        <ol className="mt-8 space-y-8">
          {education.map((item, index) => (
            <TimelineItem
              key={item.name}
              last={index === education.length - 1}
              title={item.detail}
              heading={item.name}
              copy={item.copy}
            />
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3 border-t border-brand-400/30 pt-6">
          {education.map((school) => (
            <img
              key={school.name}
              src={school.logo}
              alt={`${school.name} logo`}
              loading="lazy"
              className="h-12 w-12 rounded-full border border-brand-400/40 bg-brand-900 object-contain p-1"
            />
          ))}
          <span className="flex items-center text-xs text-brand-200">Schools attended</span>
        </div>
      </div>

      <div className="mt-6 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-7 py-8 shadow-xl shadow-brand-900/25 sm:px-10">
        <h2 className="font-heading text-2xl font-bold text-brand-50">Experience</h2>
        <ol className="mt-8 space-y-8">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.company}
              last={index === experience.length - 1}
              title={`${item.period} · ${item.role}`}
              heading={
                <a
                  href={item.companyHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-50 underline underline-offset-4 decoration-brand-400/50 transition hover:text-brand-900 hover:decoration-brand-50"
                >
                  {item.company}
                </a>
              }
              copy={item.copy}
            />
          ))}
        </ol>
      </div>

      <div className="mt-6 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-7 py-8 shadow-xl shadow-brand-900/25 sm:px-10">
        <h2 className="font-heading text-2xl font-bold text-brand-50">What's next</h2>
        <p className="mt-4 text-base leading-relaxed text-brand-100 sm:text-lg">
          I'm building a digital assets gallery — a collection of tools, micro-tools, and
          mobile apps designed to earn me passive income. The goal is simple: build small,
          useful things that keep working for people long after I've finished them, and let
          that work quietly pay for itself.
        </p>
      </div>
    </section>
  )
}

export default About
