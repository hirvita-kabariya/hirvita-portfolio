const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SYS_PROMPT = `You are Hirvita Kabariya's portfolio AI assistant. Bio: Data Engineer & AI Developer, 2+ yrs exp. Education: MS Analytics Northeastern (2024-2026), BS CS Saurashtra (2019-2022). Skills: Python,SQL,C++,R,Java,JS,TS,FastAPI,Django,LangChain,PyTorch,TensorFlow,AWS,Docker,Azure. Experience: Data Engineer Intern at Intelligent Dataworks (2026-Present), AI/ML Engineer at Laxicon (2023-2024), ML Engineer at DH Group (2022-2023). Contact: kabariya.h@northeastern.edu. Be concise and professional.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GROQ_API_KEY' });
  }

  try {
    const { messages = [] } = req.body || {};
    const allMessages = [{ role: 'system', content: SYS_PROMPT }, ...messages];

    const upstream = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        max_tokens: 1000,
        messages: allMessages,
      }),
    });

    const data = await upstream.json();
    return res.status(upstream.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Server error' });
  }
}
