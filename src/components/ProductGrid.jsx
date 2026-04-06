import ProductCard from './ProductCard';
import productsData from '../data/products.json';

export default function ProductGrid() {
  return (
    <section id="productos" className="py-24 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter italic text-white leading-none">
              Nuevo <br className="hidden md:block" />
              <span className="text-tiltRed">Hardware</span>
            </h2>
            <p className="text-gray-400 mt-4 md:mt-2 font-light text-lg">Equípate con lo mejor. Calidad profesional garantizada.</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-white hover:text-tiltRed font-bold uppercase tracking-widest text-sm transition-colors items-center pb-2">
            Ver todo el catálogo
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
            <button className="border border-gray-700 text-white font-bold py-4 px-8 uppercase tracking-widest text-sm transition-all duration-300 bg-transparent w-full">
                Ver todo el catálogo
            </button>
        </div>
      </div>
    </section>
  )
}
