import React, { useState } from 'react';
import Chatbot from '../../common/Chatbot';
import "./Blisters2.css"

const chatbots = [
  { name: 'Calefacción y Moldeo', apiUrl: 'https://api.example.com/support' },
  { name: 'Alimentación de Comprimidos', apiUrl: 'https://api.example.com/sales' },
  { name: 'Sellado Blistera', apiUrl: 'https://api.example.com/hr' },
  { name: 'Codificado Blistera', apiUrl: 'https://api.example.com/hr' },
  { name: 'Corte y Troquelado', apiUrl: 'https://api.example.com/hr' },
  { name: 'Transferencia de Blisters', apiUrl: 'https://api.example.com/hr' },
];

export default function Blisters2() {
  const [selectedBot, setSelectedBot] = useState(null);

  return (
    <div className='container'>
      <h1>Blisters 2: ¿Con qué área necesitas ayuda?</h1>
      <div className='options'>
        {chatbots.map(bot => (
          <button
            key={bot.name}
            onClick={() => setSelectedBot(bot)}
            style={{
              fontWeight: selectedBot?.name === bot.name ? 'bold' : undefined,
              boxShadow: selectedBot?.name === bot.name ? '0 0 0 3px #34d399' : undefined,
            }}
          >
            {bot.name}
          </button>
        ))}
      </div>
      <div className='chatbot'>
        {selectedBot ? (
          <Chatbot bot={selectedBot} />
        ) : (
          <div style={{
            color: '#256d4f',
            fontSize: '1.1rem',
            marginTop: 32,
            background: 'rgba(52, 211, 153, 0.08)',
            padding: 24,
            borderRadius: 12,
            boxShadow: '0 2px 8px #a7f3d0'
          }}>
            Selecciona un área para comenzar a chatear con el bot de Blisters 2.
          </div>
        )}
      </div>
    </div>
  );
}