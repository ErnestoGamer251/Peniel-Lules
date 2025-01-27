import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QueHacemos from './components/QueHacemos';
import Valores from './components/Valores';
import Jovenes from './components/Jovenes';
import Horarios from './components/Horarios';
import Ubicacion from './components/Ubicacion';
import Comunidad from './components/Comunidad';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <QueHacemos />
      <Valores />
      <Jovenes />
      <Horarios />
      <Ubicacion />
      <Comunidad />
      <Footer />
    </div>
  );
}

export default App;