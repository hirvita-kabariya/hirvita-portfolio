import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const sys = `You are Hirvita Kabariya's portfolio AI assistant. Bio: Data Engineer & AI Developer, 2+ yrs exp. Education: MS Analytics Northeastern (2024-2026), BS CS Saurashtra (2019-2022). Skills: Python,SQL,C++,R,Java,JS,TS,FastAPI,Django,LangChain,PyTorch,TensorFlow,AWS,Docker,Azure. Experience: Data Engineer Intern at Intelligent Dataworks (2026-Present), AI/ML Engineer at Laxicon (2023-2024), ML Engineer at DH Group (2022-2023). Contact: kabariya.h@northeastern.edu. Be concise and professional.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        max_tokens: 1000,
        system: sys,
        messages: messages,
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
