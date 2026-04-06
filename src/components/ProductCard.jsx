export default function ProductCard({ product }) {
  return (
    <div className="bg-[#111] group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,0,51,0.15)] border border-gray-800 hover:border-tiltRed/50">
      <div className="aspect-[4/5] bg-[#1a1a1a] p-6 flex justify-center items-center relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out relative z-0" 
        />
        
        {/* Quick add CTA on hover */}
        <div className="absolute bottom-6 left-0 right-0 px-6 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          <button className="w-full bg-tiltRed hover:bg-white hover:text-black text-white font-bold py-4 px-4 uppercase tracking-wider text-sm transition-colors duration-300 shadow-[0_0_20px_rgba(255,0,51,0.3)]">
            Añadir al carrito
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{product.category || 'Gear'}</p>
        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight truncate">{product.name}</h3>
        <p className="text-tiltRed font-bold text-xl">{product.price}</p>
      </div>
    </div>
  )
}
