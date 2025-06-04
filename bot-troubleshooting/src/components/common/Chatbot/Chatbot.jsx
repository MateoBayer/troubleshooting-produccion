// Chatbot.jsx
import React, { useState } from 'react';
import "../../../services/mgaApi"; // Import the API service
import './Chatbot.css'; // Import the CSS file
import { askQuestionToAssistant } from '../../../services/mgaApi';
import ReactMarkdown from 'react-markdown';

const Message = ({ isUser, text, botName }) => {
  return (
    <div className={`chatbot-message ${isUser ? 'user' : 'bot'}`}>
      <b>{isUser ? 'Usted' : botName}:</b> <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default function Chatbot({ bot }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = [
      ...messages,
      { isUser: true, text: input }
    ]
    setMessages(newMessage);
    setLoading(true);
    
    try {
      const response = await askQuestionToAssistant(newMessage, bot.id);
      setMessages(prevMessages => [
                ...prevMessages,
                { text: response, isUser: false }
            ]);
    } catch (e) {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Error contacting API. Error: ' + e.message, isUser: false, isError: true }
      ]);
    }
    setInput('');
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-title">{bot.name}</h2>
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <Message 
            key={i} 
            isUser={msg.isUser} 
            text={msg.text}
            botName={bot.name}
          />
        ))}
        {loading && (
          <div className="loading-indicator">
              <span>Pensando...</span>
          </div>
      )}
      </div>
      <div className="chatbot-input-row">
        <input
          className="chatbot-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          disabled={loading}
          placeholder="Escribi tu mensaje..."
        />
        <button
          className="chatbot-send-btn"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
