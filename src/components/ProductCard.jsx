import { brandBg } from '../data/brandColors'

function ProductCard({ product }) {
  return (
    <article className="rounded-2xl border border-brand-400/40 bg-brand-700/60 p-5 shadow-lg shadow-brand-900/20">
      <div
        style={brandBg(product.accent ?? 400)}
        className="mb-4 flex h-32 items-center justify-center rounded-xl text-4xl font-heading text-brand-50"
      >
        {product.title?.charAt(0) ?? 'P'}
      </div>
      <h3 className="mb-2 font-heading text-2xl text-brand-50">{product.title}</h3>
      <p className="mb-4 font-body text-sm leading-relaxed text-brand-100">{product.description}</p>
      <a
        href={product.caseStudyUrl ?? '#'}
        className="inline-block rounded-sm bg-brand-400 px-4 py-2 text-sm text-brand-50 transition-colors hover:bg-brand-300"
      >
        View case study
      </a>
    </article>
  )
}

export default ProductCard
