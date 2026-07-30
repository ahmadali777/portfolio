import profilePhoto from '../assets/profilePhoto.png'

function Home() {
  return (
    <section className="grid min-h-[80vh] gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="max-w-xl">
        <p className="mb-3 font-body text-brand-100">Muhammad Ahmad Ali · Software Engineer</p>
        <h1 className="font-heading text-4xl leading-tight text-brand-50 sm:text-5xl">
          I build apps for real problems, not resumes.
        </h1>
        <p className="mt-6 max-w-xl text-brand-100 leading-relaxed text-base sm:text-lg">
          I create polished applications with React, Flutter, and Firebase that solve real customer problems.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img src={profilePhoto} alt="Muhammad Ahmad Ali" className="h-64 w-64 rounded-full object-cover shadow-2xl shadow-brand-900/30 sm:h-72 sm:w-72" />
      </div>
    </section>
  )
}

export default Home