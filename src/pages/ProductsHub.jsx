import products from '../data/products'
import ProductCard from '../components/ProductCard'

const techStack = ['C++', 'Java', 'Dart', 'Flutter', 'JavaScript', 'React']

function ProductsHub() {
  return (
    <section className="px-8 py-12">
      <h2 className="mb-4 font-heading text-3xl text-brand-50">Technologies I work with</h2>
      <div className="mb-12 flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-full bg-brand-100 px-3 py-1 text-sm text-brand-600">
            {tech}
          </span>
        ))}
      </div>

      <h2 className="mb-6 font-heading text-3xl text-brand-50">Products</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsHub