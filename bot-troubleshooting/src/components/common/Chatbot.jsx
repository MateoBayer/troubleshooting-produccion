// Chatbot.jsx
import React, { useState } from 'react';

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
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, width: 400 }}>
      <h2>{bot.name}</h2>
      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
            <b>{msg.from === 'user' ? 'You' : bot.name}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        disabled={loading}
        style={{ width: '80%' }}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage} disabled={loading || !input.trim()}>Send</button>
    </div>
  );
}
