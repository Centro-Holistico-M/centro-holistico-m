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
          <Activities />
          <Events />
        </section>

        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
