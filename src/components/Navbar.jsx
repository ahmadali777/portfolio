import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import favicon from '../assets/favicon_io/favicon-32x32.png'

function Navbar() {
  const [hidden, setHidden] = useState(false)
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
      <div className="flex flex-row items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3 text-brand-50 whitespace-nowrap">
          <img src={favicon} alt="M. Ahmad Ali logo" className="h-6 w-6 rounded-sm" />
          <span className="font-heading text-base sm:text-lg">M. Ahmad Ali</span>
        </Link>
        <div className="flex flex-wrap justify-end gap-4 font-body text-sm text-brand-200 sm:justify-end sm:gap-6 sm:whitespace-nowrap">
          <Link to="/" className="hover:text-brand-50">Home</Link>
          <Link to="/products" className="hover:text-brand-50">Products</Link>
          <Link to="/about" className="hover:text-brand-50">About</Link>
          <Link to="/contact" className="hover:text-brand-50">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
