// MGA API service functions

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
    try {
        const response = await fetch('https://chat.int.bayer.com/api/v2/chat/agent', {  // Replace with actual API endpoint
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_MYGENASSIST_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: messages.map(msg => ({
                    role: msg.isUser ? 'user' : 'system',
                    role: 'user',
                    content: msg.text
                })),
                assistant_id: id,
                model: 'gemini-2.0-flash-001',
            }),
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        return data.choices[0]["message"]["content"]; // Adjust according to actual API response structure
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}