import { useEffect, useRef } from 'react'
import techIcons from '../data/techIcons'

function getTechIcon(tech) {
  return techIcons[tech.toLowerCase().trim()]
}

function ProductModal({ product, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const previouslyFocused = document.activeElement

    document.body.style.overflow = 'hidden'

    function getFocusable() {
      return dialog.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')
    }

    function focusFirst() {
      const focusable = getFocusable()
      if (focusable.length > 0) focusable[0].focus()
    }

    function handleKey(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const focusable = Array.from(getFocusable())
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    focusFirst()
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus()
      }
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
    >
      <div
        ref={dialogRef}
        className="grid max-h-[90dvh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded-t-2xl bg-brand-600 shadow-2xl shadow-brand-900/50 sm:rounded-2xl md:grid-cols-[1fr_1.3fr]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center bg-brand-900 p-4 md:max-h-[90dvh] md:overflow-y-auto">
          <img src={product.image} alt={product.title} loading="lazy" decoding="async" className="max-h-80 w-full rounded-xl object-cover" />
        </div>
        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-sans text-2xl font-semibold text-brand-50 sm:text-3xl">{product.title}</h3>
            <button
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-400/40 text-brand-100 transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-50"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="font-sans text-base leading-relaxed text-brand-100">{product.description}</p>
          <div>
            <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-brand-300">Tech stack</h4>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {product.techStack.map((tech) => (
                <div key={tech} className="flex items-center gap-2">
                  <img src={getTechIcon(tech)} alt={tech} className="h-9 w-9" />
                  <span className="font-sans text-base text-brand-100">{tech}</span>
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
