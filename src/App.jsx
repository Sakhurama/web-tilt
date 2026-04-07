import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-tiltRed selection:text-white flex flex-col">
      <CartProvider>
        <Router>
          <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  )
}

export default App
