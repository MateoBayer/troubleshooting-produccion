// Chatbot.jsx
import React, { useState } from 'react';
import "../../services/mgaApi"; // Import the API service
import './Chatbot.css'; // Import the CSS file

export default function Chatbot({ bot }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setLoading(true);
    try {
      const res = await fetch(bot.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { from: 'bot', text: data.reply }]);
    } catch (e) {
      setMessages((msgs) => [...msgs, { from: 'bot', text: 'Error contacting API.' }]);
    }
    setInput('');
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-title">{bot.name}</h2>
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chatbot-message ${msg.from}`}
          >
            <b>{msg.from === 'user' ? 'You' : bot.name}:</b> {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input-row">
        <input
          className="chatbot-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          disabled={loading}
          placeholder="Type your message..."
        />
        <button
          className="chatbot-send-btn"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}
