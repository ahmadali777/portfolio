function PageLayout({ children, grid }) {
  return (
    <section className="px-8 py-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>{children}</div>
        {grid ? (
          <div className="rounded-2xl border border-brand-400/40 bg-brand-700/50 p-6 shadow-xl shadow-brand-900/20">
            {grid}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PageLayout
