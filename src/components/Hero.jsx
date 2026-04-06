export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tiltRed via-black to-black opacity-30 blur-3xl transform -rotate-12"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white mb-4 italic leading-none">
          Domina El <br/> <span className="text-tiltRed">Asfalto</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light">
          Tablas, ruedas y actitud. Diseñado para los que no piden permiso.
        </p>
        
        <a 
          href="#productos" 
          className="group relative inline-flex items-center justify-center px-8 py-5 font-bold text-white bg-tiltRed overflow-hidden transform hover:scale-105 transition-all duration-300 uppercase tracking-widest text-lg"
        >
          <span className="absolute w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out"></span>
          <span className="relative">Descubre el armamento</span>
          <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <a href="#productos" className="p-2 inline-block text-gray-500 hover:text-tiltRed transition-colors">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}
