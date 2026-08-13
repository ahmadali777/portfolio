import { useState } from 'react'
import ProductModal from './ProductModal'

function ProductCard({ product }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className="group cursor-pointer rounded-2xl border border-brand-400/40 bg-brand-700/60 p-5 shadow-lg shadow-brand-900/20 transition-transform hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="mb-4 overflow-hidden rounded-xl bg-brand-900">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="mb-2 font-sans text-xl font-semibold text-brand-50">{product.title}</h3>
        <p className="mb-4 font-sans text-sm leading-relaxed text-brand-100">{product.description}</p>
        <span className="inline-block rounded-sm bg-brand-400 px-4 py-2 text-sm text-brand-50 transition-colors hover:bg-brand-300">
          View details
        </span>
      </article>
      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  )
}

export default ProductCard
