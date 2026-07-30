import { Link } from 'react-router-dom'
import favicon from '../assets/favicon_io/favicon-32x32.png'

function Navbar() {
  return (
    <nav className="relative z-10 flex flex-col gap-4 border-b border-brand-400/40 bg-brand-600/95 px-6 py-5 backdrop-blur-xl text-sm sm:px-8 sm:py-6 sm:flex-row sm:items-center sm:justify-between">
      <Link to="/" className="flex items-center gap-3 text-brand-50">
        <img src={favicon} alt="Ahmad SWE logo" className="h-6 w-6 rounded-sm" />
        <span className="font-heading text-base sm:text-lg">Ahmad SWE</span>
      </Link>
      <div className="flex flex-wrap justify-start gap-4 font-body text-brand-200 sm:justify-end sm:gap-6">
        <Link to="/" className="hover:text-brand-50">Home</Link>
        <Link to="/products" className="hover:text-brand-50">Products</Link>
        <Link to="/about" className="hover:text-brand-50">About</Link>
        <Link to="/contact" className="hover:text-brand-50">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar