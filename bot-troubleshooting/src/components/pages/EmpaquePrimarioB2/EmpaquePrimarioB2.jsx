import React, { useState } from 'react';
import Chatbot from '../../common/Chatbot';
import "./EmpaquePrimarioB2.css"

const chatbots = [
  { name: 'Calefacción y Moldeo', id: 'ba97c6a6-53a4-418d-95b6-08bf787b4ac8' },
  { name: 'Alimentación de Comprimidos', id: 'https://api.example.com/sales' },
  { name: 'Sellado Blistera', id: 'https://api.example.com/hr' },
  { name: 'Codificado Blistera', id: 'https://api.example.com/hr' },
  { name: 'Corte y Troquelado', id: 'https://api.example.com/hr' },
  { name: 'Transferencia de Blisters', id: 'https://api.example.com/hr' },
];

export default function EmpaquePrimarioB2() {
  const [selectedBot, setSelectedBot] = useState(null);

  return (
    <div className='container'>
      <h1>Blisters 2 - Empaque Primario: ¿Con qué área necesitas ayuda?</h1>
      <div className='options'>
        {chatbots.map(bot => (
          <button
            key={bot.name}
            onClick={() => setSelectedBot(bot)}
            className={`${selectedBot?.name === bot.name ? ' selected-bot' : ''}`}
          >
            {bot.name}
          </button>
        ))}
      </div>
      <div className='chatbot'>
        {selectedBot ? (
          <Chatbot key={selectedBot.id} bot={selectedBot} />
        ) : (
          <div className="info-message">
            Selecciona un área para comenzar a chatear con el bot de Empaque Primario - B2.
          </div>
        )}
      </div>
    </div>
  );
}