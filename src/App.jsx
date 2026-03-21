import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
// import ChatWidget from './components/ChatWidget';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import Citas from './admin/pages/Citas';
import Clientes from './admin/pages/Clientes';
import ServiciosAdmin from './admin/pages/Servicios';
import Productos from './admin/pages/Productos';
import Settings from './admin/pages/Settings';
import './styles/theme.css';

function App() {
  const [adminOpen, setAdminOpen] = useState(false);

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

      {/* <ChatWidget /> */}

      <Routes>
        <Route path="/admin/*" element={
          <AdminLayout onClose={() => window.location.href = '/'}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="citas" element={<Citas />} />
              <Route path="clientes" element={<Clientes />} />
              <Route path="servicios" element={<ServiciosAdmin />} />
              <Route path="productos" element={<Productos />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
          </AdminLayout>
        } />
      </Routes>

      <button
        onClick={() => setAdminOpen(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          color: '#d4af37',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Panel de Admin"
      >
        ⚙
      </button>

      {adminOpen && (
        <AdminLayout onClose={() => setAdminOpen(false)}>
          <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/citas" element={<Citas />} />
            <Route path="/admin/clientes" element={<Clientes />} />
            <Route path="/admin/servicios" element={<ServiciosAdmin />} />
            <Route path="/admin/productos" element={<Productos />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Routes>
        </AdminLayout>
      )}
    </div>
  );
}

export default App;