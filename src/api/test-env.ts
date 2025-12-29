import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // Retorna apenas se a chave existe, sem mostrar o valor real
  const isConfigured = !!process.env.VITE_OPENAI_API_KEY;
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: isConfigured ? 'success' : 'error',
      message: isConfigured 
        ? 'Variável de ambiente configurada corretamente' 
        : 'Variável de ambiente não encontrada',
      keyConfigured: isConfigured
    })
  };
};
