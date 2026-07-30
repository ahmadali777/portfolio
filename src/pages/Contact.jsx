function Contact() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8">
      <p className="mb-2 font-body text-base text-brand-100 sm:text-lg">Contact</p>
      <h1 className="mb-6 font-heading text-3xl leading-tight text-brand-50 sm:text-4xl">
        Let's build something together.
      </h1>
      <div className="space-y-5 font-body text-base text-brand-100 sm:text-lg">
        <p>
          <span className="font-heading text-brand-50">Email</span>
          <br />
          <a href="mailto:ahmadswe007@gmail.com" className="hover:text-brand-200 break-all">
            ahmadswe007@gmail.com
          </a>
        </p>
        <p>
          <span className="font-heading text-brand-50">GitHub</span>
          <br />
          <a href="https://github.com/ahmadali777" target="_blank" rel="noreferrer" className="hover:text-brand-200 break-all">
            github.com/ahmadali777
          </a>
        </p>
        <p>
          <span className="font-heading text-brand-50">LinkedIn</span>
          <br />
          <a href="https://www.linkedin.com/in/muhammad-ahmad-ali-10a481179?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-brand-200 break-all">
            linkedin.com/in/muhammad-ahmad-ali-10a481179
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact