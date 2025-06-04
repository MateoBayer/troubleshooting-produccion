import React from 'react';
import { useNavigate } from 'react-router-dom';


const lines = [
  { id: 'empaqueprimario', name: 'Empaque Primario' },
  { id: 'empaquesecundario', name: 'Empaque Secundario' },
];

export default function Blisters2() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h2>Selecciona el tipo de empaque</h2>
      <div className='options'>
        {lines.map(bot => (
          <button key={bot.id} onClick={() => navigate(`/blisters2/${bot.id}`)}>
            {bot.name}
          </button>
        ))}
      </div>
    </div>
  );
}
