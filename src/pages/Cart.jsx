import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, subtotal, formatPrice } = useCart();

  // Scroll to top on mount to ensure user sees the header
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    // Construct message for WhatsApp
    let message = "¡Hola! Quiero hacer un pedido por los siguientes productos:%0A%0A";
    
    cartItems.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - ${item.price}%0A`;
    });
    
    message += `%0A*Subtotal:* ${formatPrice(subtotal)}%0A`;
    message += "%0A¿Me podrían confirmar la disponibilidad y los métodos de pago? ¡Gracias!";
    
    // Replace with a real phone number
    const phoneNumber = "573206215191"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-10 italic">
          Tu <span className="text-tiltRed">Armamento</span>
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-20 border border-gray-800 bg-[#111]">
            <svg className="w-20 h-20 text-gray-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl text-white font-bold uppercase tracking-widest mb-4">No tienes equipo en el carrito</h2>
            <p className="text-gray-500 mb-8">El asfalto te espera. Regresa y prepárate para dominar.</p>
            <Link to="/" className="inline-block bg-tiltRed hover:bg-white hover:text-black text-white font-bold py-4 px-8 uppercase tracking-wider text-sm transition-colors duration-300">
              Volver a la tienda
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-[#111] border border-gray-800 p-4 relative group">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 text-gray-600 hover:text-tiltRed transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  
                  <div className="w-32 h-32 bg-[#1a1a1a] flex-shrink-0 p-2 flex items-center justify-center">
                    <img src={item.image_url} alt={item.name} className="max-w-full max-h-full object-contain filter drop-shadow-md" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">{item.name}</h3>
                    <p className="text-tiltRed font-bold">{item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-black border border-gray-800 px-4 py-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-400 hover:text-white pb-1"
                    >
                      &minus;
                    </button>
                    <span className="text-white font-bold w-6 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-400 hover:text-white pb-1"
                    >
                      &#43;
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-1 border border-gray-800 bg-[#111] p-8 h-fit sticky top-28">
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-6">Resumen</h3>
              
              <div className="space-y-4 text-sm uppercase font-bold tracking-widest mb-8 border-b border-gray-800 pb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Envío</span>
                  <span className="text-gray-600 text-xs">Calculado al coordinar</span>
                </div>
                <div className="flex justify-between text-tiltRed text-lg pt-4">
                  <span>Total (Aprox)</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>
              
              <button 
                onClick={handleCheckout}
                className="w-full bg-tiltRed hover:bg-white hover:text-black text-white font-bold py-4 px-4 uppercase tracking-wider text-sm transition-colors duration-300 shadow-[0_0_20px_rgba(255,0,51,0.3)] flex items-center justify-center gap-3"
              >
                <span>Finalizar por WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
