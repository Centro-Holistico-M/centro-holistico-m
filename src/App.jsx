import React from 'react';
import Navbar from './components/Navbar';
import Activities from './components/Activities';
import Events from './components/Events';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="inicio" className="page-section">
          <div className="container">
            <h2 className="page-title">Inicio</h2>
            <Activities />
            <Events />
          </div>
        </section>

        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
