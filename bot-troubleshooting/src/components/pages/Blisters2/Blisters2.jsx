import React, { useState } from 'react';
import Chatbot from '../../common/Chatbot';
import "./Blisters2.css"

const chatbots = [
  { name: 'Calefacción y Moldeo', botId: 'ba97c6a6-53a4-418d-95b6-08bf787b4ac8' },
  { name: 'Alimentación de Comprimidos', botId: 'https://api.example.com/sales' },
  { name: 'Sellado Blistera', botId: 'https://api.example.com/hr' },
  { name: 'Codificado Blistera', botId: 'https://api.example.com/hr' },
  { name: 'Corte y Troquelado', botId: 'https://api.example.com/hr' },
  { name: 'Transferencia de Blisters', botId: 'https://api.example.com/hr' },
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
            className={`${selectedBot?.name === bot.name ? ' selected-bot' : ''}`}
            /*style={{
              fontWeight: selectedBot?.name === bot.name ? 'bold' : undefined,
              boxShadow: selectedBot?.name === bot.name ? '0 0 0 3px #34d399' : undefined,
            }}*/
          >
            {bot.name}
          </button>
        ))}
      </div>
      <div className='chatbot'>
        {selectedBot ? (
          <Chatbot bot={selectedBot} />
        ) : (
          <div className="info-message">
            Selecciona un área para comenzar a chatear con el bot de Blisters 2.
          </div>
        )}
      </div>
    </div>
  );
}