import type { ViteApiHandler } from 'vite'

export const handler: ViteApiHandler = async (req, res) => {
  // Retorna apenas se a chave existe, sem mostrar o valor real
  const isConfigured = !!import.meta.env.VITE_OPENAI_API_KEY;
  
  return {
    status: 200,
    body: {
      status: isConfigured ? 'success' : 'error',
      message: isConfigured 
        ? 'Variável de ambiente configurada corretamente' 
        : 'Variável de ambiente não encontrada',
      keyConfigured: isConfigured
    }
  };
};
