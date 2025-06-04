import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button className="nav-btn" onClick={() => navigate(-1)}>&larr; Atrás</button>
      <button className="nav-btn" onClick={() => navigate(1)}>Adelante &rarr;</button>
      <button className="nav-btn" onClick={() => navigate('/')}>Ir a selección de lineas</button>
    </nav>
  );
}
