import logo from '../assets/tilt-logo-blanco.png';

const socialLinks = {
  instagram: "https://www.instagram.com/tilt_skateboards?igsh=MWV0OTQzMHAzd2pnZQ==",
  facebook: "https://www.facebook.com/TiltSkateshop/",
  youtube: "https://www.youtube.com/channel/UCHsrQgEUMoAINYqHTBGa6mQ"
}

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="Tilt Skateboards Logo" className="w-12 h-12 object-contain" />
              <h3 className="text-4xl font-black italic tracking-tighter text-white uppercase">
                TILT <span className="text-tiltRed">SKATEBOARDS</span>
              </h3>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-light">
              No es solo un deporte, es nuestra cultura. Hardware de alta resistencia para skaters que empujan los límites y no piden permiso.
            </p>
            <div className="flex space-x-4">
              {['Ig', 'Fb', 'Yt'].map((social) => (
                <a key={social} href={socialLinks[social]} className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-tiltRed transition-colors font-bold text-sm uppercase">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Navegación</h4>
            <ul className="space-y-4">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto', 'Team'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-tiltRed transition-colors text-sm uppercase tracking-wide">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Soporte</h4>
            <ul className="space-y-4">
              {['Envíos', 'Devoluciones', 'Garantía', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-tiltRed transition-colors text-sm uppercase tracking-wide">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-700 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Tilt Skateboards. Todos los derechos reservados.
          </p>
          <div className="mt-6 md:mt-0 flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-white text-xs uppercase tracking-widest transition-colors">Términos</a>
            <a href="#" className="text-gray-700 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
