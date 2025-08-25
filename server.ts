import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3001;  // Ensure port is a number

app.use(cors());
app.use(express.json());

app.get('/api/test-env', (req, res) => {
  const isConfigured = !!process.env.VITE_OPENAI_API_KEY;
  
  res.status(200).json({ 
    status: isConfigured ? 'success' : 'error',
    message: isConfigured 
      ? 'Variável de ambiente configurada corretamente' 
      : 'Variável de ambiente não encontrada',
    keyConfigured: isConfigured
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor de teste rodando em http://0.0.0.0:${port}`);
});
