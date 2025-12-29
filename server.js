import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
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

// Handle client-side routing - return index.html for all other GET requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});
