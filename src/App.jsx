import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Inicio from './components/Inicio';
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
        <Inicio />
        <Servicios />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;