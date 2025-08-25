import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history = [] } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Mensagem inválida' });
  }

  // System prompt for video production assistant
  const systemPrompt = `Você é um assistente especializado em produção de vídeos profissionais. 
Sua função é ajudar clientes a entenderem melhor suas necessidades de produção audiovisual e fornecer orçamentos iniciais.

Ao responder:
1. Seja claro e profissional
2. Faça perguntas relevantes para entender melhor o projeto
3. Forneça estimativas de orçamento quando possível
4. Explique os processos de produção quando necessário
5. Destaque os benefícios da produção de vídeo profissional
6. Use emojis moderadamente para tornar a conversa mais amigável
7. Mantenha as respostas concisas e diretas

Não mencione que você é uma IA, apenas responda como um especialista em produção de vídeo.`;

  let timeoutId: NodeJS.Timeout;  // Declare here
  try {
    const controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), 30000); // 30 seconds timeout

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...history.map((msg: { sender: string; message: string }) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.message
          })),
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenAI API Error:', errorData);
      throw new Error(errorData.error?.message || 'Erro ao processar sua mensagem na API da OpenAI');
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem no momento.';

    return res.status(200).json({ 
      response: aiResponse,
      usage: data.usage // For monitoring token usage if needed
    });
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: 'A requisição excedeu o tempo limite. Por favor, tente novamente.' });
    } else {
      console.error('API Error:', error);
      return res.status(500).json({ 
        error: 'Ocorreu um erro ao processar sua mensagem',
        details: error instanceof Error ? error.message : 'Erro desconhecido',
        code: 'INTERNAL_SERVER_ERROR'
      });
    }
  }
}
