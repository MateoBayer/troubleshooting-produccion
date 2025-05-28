// MGA API service functions
import { botList } from './botList';

export async function postMessage(apiUrl, message) {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}

// Add more functions as needed, e.g. getBots, getStatus, etc.


// POST question to assistant
export async function askQuestionToAssistant(messages, id) {
    //const id = botList[botName];
    console.log("Entro aca, id: ", id);

    if (!id) throw new Error('Unknown bot name');
    try {
        const response = await fetch('https://chat.int.bayer.com/api/v2/chat/agent', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_MYGENASSIST_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: messages.map(msg => ({
                    role: msg.isUser ? 'user' : 'system',
                    content: msg.text
                })),
                assistant_id: id,
                model: 'gpt-4o',
            }),
        });

        if (!response.ok) {
            console.log("Error en la respuesta de la API:", response);
            throw new Error('API request failed');
        }
        const data = await response.json();
        console.log("Respuesta de la API:", data);
        return data.choices[0]["message"]["content"]; // Adjust according to actual API response structure
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}