import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './styles/theme.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <Servicios />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;
