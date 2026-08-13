import products from '../data/products'
import ProductCard from '../components/ProductCard'
import flutterIcon from '../assets/techIcons/flutter-dark.svg'
import dartIcon from '../assets/techIcons/dart-dark.svg'
import reactIcon from '../assets/techIcons/react-dark.svg'
import firebaseIcon from '../assets/techIcons/firebase-light.svg'
import sqfliteIcon from '../assets/techIcons/sqllite.svg'
import geminiIcon from '../assets/techIcons/bard-dark.svg'
import cppIcon from '../assets/techIcons/cpp-light.svg'
import javaIcon from '../assets/techIcons/java-light.svg'
import htmlIcon from '../assets/techIcons/html.svg'
import cssIcon from '../assets/techIcons/css.svg'
import javascriptIcon from '../assets/techIcons/javascript.svg'
import pythonIcon from '../assets/techIcons/python-light.svg'

const skillGroups = [
  {
    title: 'Mobile & Cross-Platform',
    skills: [
      { name: 'Flutter', icon: flutterIcon },
      { name: 'Dart', icon: dartIcon },
      { name: 'Provider', symbol: '↔' },
      { name: 'Riverpod', symbol: '◈' },
    ],
  },
  {
    title: 'Frontend Web',
    skills: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'React', icon: reactIcon },
      { name: 'JavaScript', icon: javascriptIcon },
    ],
  },
  {
    title: 'Backend, APIs & Cloud',
    skills: [
      { name: 'Firebase', icon: firebaseIcon },
      { name: 'SQLite (SQFlite)', icon: sqfliteIcon },
      { name: 'REST APIs', symbol: '</>' },
      { name: 'Groq API', symbol: 'G' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: cppIcon },
      { name: 'Java', icon: javaIcon },
      { name: 'Dart', icon: dartIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'JavaScript', icon: javascriptIcon },
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      { name: 'Gemini API', icon: geminiIcon },
      { name: 'Prompt Engineering', symbol: '✦' },
      { name: 'LLM Integration', symbol: '◌' },
      { name: 'Agentic Workflows', symbol: '◉' },
    ],
  },
]

function SkillPill({ skill }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-400/30 bg-brand-500/45 px-3.5 py-2 text-base font-medium text-brand-50 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-900/60 hover:bg-brand-500/80">
      {skill.icon ? (
        <img src={skill.icon} alt="" className="h-6 w-6 object-contain" />
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-700/80 text-xs font-bold text-brand-100">
          {skill.symbol}
        </span>
      )}
      {skill.name}
    </span>
  )
}

function ProductsHub() {
  return (
    <section className="px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
      <div className="rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-6 py-12 shadow-2xl shadow-brand-900/25 sm:px-10 lg:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-900">Portfolio</p>
        <h2 className="mt-3 font-heading text-4xl font-bold text-brand-50 sm:text-5xl">Products</h2>

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="mailto:ahmadswe007@gmail.com"
            className="inline-block rounded-full bg-brand-400 px-8 py-4 font-heading text-base font-bold text-brand-50 shadow-lg shadow-brand-900/30 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-300"
          >
            Get your app made
          </a>
        </div>
      </div>

      <div className="mt-14 rounded-[2rem] border border-brand-400/30 bg-brand-600/75 px-6 py-12 shadow-2xl shadow-brand-900/25 sm:px-10 lg:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-900">Core tech stack</p>
        <h2 className="mt-3 font-heading text-4xl font-bold text-brand-50 sm:text-5xl">My skills</h2>

        <div className="mt-9 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-brand-400/30 text-left">
                <th className="py-3 pr-4 font-heading text-sm font-semibold uppercase tracking-wider text-brand-100">Area</th>
                <th className="py-3 font-heading text-sm font-semibold uppercase tracking-wider text-brand-100">Technologies</th>
              </tr>
            </thead>
            <tbody>
              {skillGroups.map((group) => (
                <tr key={group.title} className="border-b border-brand-400/20 last:border-0">
                  <td className="py-5 pr-4 align-top font-heading text-lg font-bold text-brand-50">{group.title}</td>
                  <td className="py-5">
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => <SkillPill key={skill.name} skill={skill} />)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ProductsHub
