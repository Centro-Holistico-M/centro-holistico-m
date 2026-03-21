import React from 'react';
import { Calendar, Users, Package, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h2 style={{ color: '#d4af37', marginBottom: '20px' }}>Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div style={{
          background: 'rgba(212, 175, 55, 0.1)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <Calendar size={24} color="#d4af37" />
          <p style={{ color: '#888', margin: '10px 0 5px' }}>Citas Today</p>
          <h3 style={{ color: '#fff', margin: 0 }}>0</h3>
        </div>
        <div style={{
          background: 'rgba(212, 175, 55, 0.1)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <Users size={24} color="#d4af37" />
          <p style={{ color: '#888', margin: '10px 0 5px' }}>Clientes</p>
          <h3 style={{ color: '#fff', margin: 0 }}>0</h3>
        </div>
        <div style={{
          background: 'rgba(212, 175, 55, 0.1)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <Package size={24} color="#d4af37" />
          <p style={{ color: '#888', margin: '10px 0 5px' }}>Servicios</p>
          <h3 style={{ color: '#fff', margin: 0 }}>0</h3>
        </div>
        <div style={{
          background: 'rgba(212, 175, 55, 0.1)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <TrendingUp size={24} color="#d4af37" />
          <p style={{ color: '#888', margin: '10px 0 5px' }}>Ingresos Mes</p>
          <h3 style={{ color: '#fff', margin: 0 }}>$0</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;