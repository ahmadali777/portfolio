import { useEffect } from 'react'
import techIcons from '../data/techIcons'

function getTechIcon(tech) {
  return techIcons[tech.toLowerCase().trim()]
}

function ProductModal({ product, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
    >
      <div
        className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-brand-600 shadow-2xl shadow-brand-900/50 md:grid-cols-[1fr_1.3fr]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center bg-brand-900 p-4">
          <img src={product.image} alt={product.title} className="max-h-80 w-full rounded-xl object-cover" />
        </div>
        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-sans text-2xl font-semibold text-brand-50 sm:text-3xl">{product.title}</h3>
            <button
              onClick={onClose}
              className="shrink-0 rounded-full border border-brand-400/40 px-3 py-1 text-brand-100 transition-colors hover:bg-brand-700"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="font-sans text-sm leading-relaxed text-brand-100 sm:text-base">{product.description}</p>
          <div>
            <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-brand-300">Tech stack</h4>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {product.techStack.map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <img src={getTechIcon(tech)} alt={tech} className="h-9 w-9" />
                  <span className="font-sans text-sm text-brand-100">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
