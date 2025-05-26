// ChatbotsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ChatbotsPage.css"

const lines = [
  { id: 'blisters2', name: 'Linea de Blisters 2' },
  { id: 'blisters3', name: 'Linea de Blisters 3' },
  { id: 'blisters5', name: 'Linea de Blisters 5' },
  { id: 'blisters7', name: 'Linea de Blisters 7' },
  { id: 'blisters11', name: 'Linea de Blisters 11' },
  { id: 'tableado33', name: 'Linea de Tableado 33' },
];

export default function ChatbotPage() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h1>Selecciona un bot para Troubleshooting</h1>
      <div className='options'>
        {lines.map(bot => (
          <button key={bot.id} onClick={() => navigate(`/${bot.id}`)}>
            {bot.name}
          </button>
        ))}
      </div>
    </div>
  );
}

