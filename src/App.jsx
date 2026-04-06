import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-tiltRed selection:text-white">
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App
