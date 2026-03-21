import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, Package, Settings, X, LogOut } from 'lucide-react';

const AdminLayout = ({ children, onClose }) => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin', icon: Home, label: 'Dashboard' },
    { path: '/admin/citas', icon: Calendar, label: 'Citas' },
    { path: '/admin/clientes', icon: Users, label: 'Clientes' },
    { path: '/admin/servicios', icon: Package, label: 'Servicios' },
    { path: '/admin/productos', icon: Package, label: 'Productos' },
    { path: '/admin/settings', icon: Settings, label: 'Ajustes' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '900px',
        height: '85vh',
        display: 'flex',
        overflow: 'hidden',
        border: '1px solid #d4af37'
      }}>
        <nav style={{
          width: '220px',
          background: 'rgba(0,0,0,0.3)',
          padding: '20px 0',
          borderRight: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <div style={{
            padding: '0 20px 20px',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
            marginBottom: '20px'
          }}>
            <h2 style={{ color: '#d4af37', margin: 0, fontSize: '1.2rem' }}>Panel Admin</h2>
            <p style={{ color: '#888', fontSize: '0.8rem', margin: '5px 0 0' }}>Centro Holístico M</p>
          </div>
          
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 20px',
                  color: isActive ? '#d4af37' : '#aaa',
                  background: isActive ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  borderLeft: isActive ? '3px solid #d4af37' : '3px solid transparent'
                }}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{
            padding: '15px 20px',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ color: '#888', fontSize: '0.9rem' }}>Modo Solo Lectura</span>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#888',
                cursor: 'pointer',
                padding: '5px'
              }}
            >
              <X size={20} />
            </button>
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;