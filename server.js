import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const sys = `You are Hirvita Kabariya's portfolio AI assistant. Bio: Data Engineer & AI Developer, 2+ yrs exp. Education: MS Analytics Northeastern (2024-2026), BS CS Saurashtra (2019-2022). Skills: Python,SQL,C++,R,Java,JS,TS,FastAPI,Django,LangChain,PyTorch,TensorFlow,AWS,Docker,Azure. Experience: Data Engineer Intern at Intelligent Dataworks (2026-Present), AI/ML Engineer at Laxicon (2023-2024), ML Engineer at DH Group (2022-2023). Contact: kabariya.h@northeastern.edu. Be concise and professional.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    // Prepend system message to messages array
    const allMessages = [
      { role: 'system', content: sys },
      ...messages,
    ];

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1000,
        messages: allMessages,
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
