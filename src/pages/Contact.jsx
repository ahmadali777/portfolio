function Contact() {
  return (
    <section className="max-w-2xl px-8 py-12">
      <p className="mb-2 font-body text-lg text-brand-100">Contact</p>
      <h1 className="mb-6 font-heading text-4xl leading-tight text-brand-50">
        Let's build something together.
      </h1>
      <div className="space-y-4 font-body text-lg text-brand-100">
        <p>
          <span className="font-heading text-brand-50">Email</span>
          <br />
          <a href="mailto:ahmadswe007@gmail.com" className="hover:text-brand-200">
            ahmadswe007@gmail.com
          </a>
        </p>
        <p>
          <span className="font-heading text-brand-50">GitHub</span>
          <br />
          <a href="https://github.com/ahmadali777" target="_blank" rel="noreferrer" className="hover:text-brand-200">
            github.com/ahmadali777
          </a>
        </p>
        <p>
          <span className="font-heading text-brand-50">LinkedIn</span>
          <br />
          <a href="https://www.linkedin.com/in/muhammad-ahmad-ali-10a481179?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-brand-200">
            linkedin.com/in/muhammad-ahmad-ali-10a481179
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact