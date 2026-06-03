import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './pages/inicio';
import Servicios from './pages/servicios';
import Nosotros from './pages/nosotros';
import Contacto from './pages/contacto';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;