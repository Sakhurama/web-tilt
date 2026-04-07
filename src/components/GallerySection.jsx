export default function GallerySection() {
  const images = [
    {
      url: "https://tiltskateboards.com/wp-content/uploads/2026/04/IMG_5883.JPG.jpeg",
      alt: "Skate Lifestyle 1",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      url: "https://tiltskateboards.com/wp-content/uploads/2026/04/Documento-de-%F0%9D%91%BB%F0%9D%91%B0%F0%9D%91%B3%F0%9D%91%BB-%F0%9D%91%BA%F0%9D%91%B2%F0%9D%91%A8%F0%9D%91%BB%F0%9D%91%AC-2-768x1367.jpeg",
      alt: "Skate Lifestyle 2",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://tiltskateboards.com/wp-content/uploads/2026/03/IMG_5829.JPG-600x1285.jpeg",
      alt: "Skate Lifestyle 3",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="md:w-1/3">
          <p className="text-tiltRed font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-4">
            <span className="w-12 h-px bg-tiltRed inline-block"></span>
            Estilo Crudo
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter italic text-white leading-none">
            La Calle <br/>
            <span className="text-tiltRed">Habla</span>
          </h2>
          <p className="text-gray-400 mt-6 font-light text-lg">
            Imágenes sin filtro. Nuestra esencia capturada directamente en el asfalto. Únete a la familia.
          </p>
          <a href="https://www.instagram.com/tilt_skateboards?igsh=MWV0OTQzMHAzd2pnZQ==" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm mt-8 border-b-2 border-tiltRed pb-1 hover:text-tiltRed transition-colors">
            Ver más en Instagram
            <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden bg-[#111] ${img.className}`}>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-tiltRed/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
              
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale hover:grayscale-0"
              />
              
              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-tiltRed transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
