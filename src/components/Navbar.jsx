import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import favicon from '../assets/favicon_io/favicon-32x32.png'

function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      if (y > lastY.current && y > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-brand-400/40 bg-brand-600/90 shadow-lg shadow-brand-900/40 backdrop-blur-xl transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        <Link to="/" className="flex items-center gap-3 text-brand-50 whitespace-nowrap">
          <img src={favicon} alt="M. Ahmad Ali logo" className="h-6 w-6 rounded-sm" />
          <span className="font-heading text-base sm:text-lg">M. Ahmad Ali</span>
        </Link>
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-brand-400/60 text-brand-100 transition-colors hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-50 sm:hidden"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
        <div id="primary-navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b border-brand-400/40 bg-brand-600/95 px-5 py-4 font-body text-sm text-brand-200 shadow-lg shadow-brand-900/30 backdrop-blur-xl sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-brand-50">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-brand-50">Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-brand-50">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-brand-50">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
