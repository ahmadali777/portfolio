import { Link } from 'react-router-dom'
import favicon from '../assets/favicon_io/favicon-32x32.png'

function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between border-b border-brand-400/40 bg-brand-600/95 px-8 py-6 backdrop-blur-xl">
      <Link to="/" className="flex items-center gap-3 text-brand-50">
        <img src={favicon} alt="Ahmad SWE logo" className="h-6 w-6 rounded-sm" />
        <span className="">Ahmad SWE</span>
      </Link>
      <div className="flex gap-6 font-body text-brand-200">
        <Link to="/" className="hover:text-brand-50">Home</Link>
        <Link to="/products" className="hover:text-brand-50">Products</Link>
        <Link to="/about" className="hover:text-brand-50">About</Link>
        <Link to="/contact" className="hover:text-brand-50">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar