import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Retorna apenas se a chave existe, sem mostrar o valor real
  const isConfigured = !!process.env.OPENAI_API_KEY;
  
  res.status(200).json({ 
    status: isConfigured ? 'success' : 'error',
    message: isConfigured 
      ? 'Variável de ambiente configurada corretamente' 
      : 'Variável de ambiente não encontrada',
    // Não mostramos o valor real da chave por questões de segurança
    keyConfigured: isConfigured
  });
}
