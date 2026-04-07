export default function CollectionSection() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden border-t border-gray-900 border-b">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-tiltRed/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Image Container */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-tiltRed transform translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 opacity-50 blur-sm"></div>
          <div className="absolute inset-0 border border-gray-700 transform -translate-x-2 -translate-y-2 z-0"></div>
          
          <img 
            src="https://tiltskateboards.com/wp-content/uploads/2026/03/Venice-scaled.jpeg" 
            alt="Colección en Malta" 
            className="relative z-10 w-full h-[500px] sm:h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
          />
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-tiltRed font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-4">
            <span className="w-12 h-px bg-tiltRed inline-block"></span>
            Historia y Arte
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter italic text-white leading-none mb-8">
            Nuestra Colección <br className="hidden md:block"/>
            <span className="text-tiltRed">en Malta</span>
          </h2>
          
          <div className="text-gray-400 font-light text-lg space-y-6 mb-10 pl-4 border-l border-gray-800">
            <p className="text-white font-medium text-xl italic">
              "Una creación nacida de la conexión."
            </p>
            <p>
              Junto a nuestra amiga <span className="text-white font-semibold">Venice</span>, diseñadora maltesa, transformamos ideas en identidad y trazos en historias.
            </p>
            <p>
              Más que una colección, son las vivencias, la energía y lo que Malta dejó marcado en cada diseño.
            </p>
          </div>
          
          <p className="text-tiltRed font-black uppercase tracking-widest text-sm flex flex-col">
            <span className="text-gray-500 text-xs font-normal mb-1">Colaboración Exclusiva con</span>
            Venice Castrogiovanni
          </p>
        </div>

      </div>
    </section>
  )
}
