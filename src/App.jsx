import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductsHub from './pages/ProductsHub.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden overflow-y-auto bg-brand-600 text-brand-50">
      <Navbar />
      <main className="flex-1 min-h-0 overflow-visible">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsHub />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
