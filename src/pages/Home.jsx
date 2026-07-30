import profilePhoto from '../assets/profilePhoto.png'

function Home() {
  return (
    <section className="flex min-h-[80vh] items-center gap-12 px-8">
      <div className="max-w-xl">
        <p className="mb-2 font-body text-brand-100">Muhammad Ahmad Ali · Software Engineer</p>
        <h1 className="font-heading text-5xl leading-tight text-brand-50">
          I build apps for real problems, not resumes.
        </h1>
      </div>
      <img src={profilePhoto} alt="Muhammad Ahmad Ali" className="w-64 h-64 rounded-full object-cover" />
    </section>
  )
}

export default Home