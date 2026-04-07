import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/tilt-logo-blanco.png';

export default function Header() {
  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCatalogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 text-white text-2xl md:text-3xl font-black italic tracking-tighter uppercase group focus:outline-none">
          <img src={logo} alt="Tilt Skateboards Logo" className="w-12 h-12 object-contain" />
          <div className="hidden sm:block">
            <span className="text-tiltRed group-hover:text-white transition-colors duration-300">TILT</span>
            <span className="group-hover:text-tiltRed transition-colors duration-300">SKATEBOARDS</span>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <a 
            href="#productos" 
            onClick={handleCatalogoClick}
            className="hidden md:block text-gray-400 hover:text-white uppercase tracking-widest text-sm font-bold transition-colors cursor-pointer"
          >
            Catálogo
          </a>
          
          <Link 
            to="/cart" 
            className="relative flex items-center justify-center w-12 h-12 bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 hover:border-tiltRed transition-all duration-300 rounded focus:outline-none"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-tiltRed text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded border-2 border-black animate-bounce">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
