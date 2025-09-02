import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Development mode: integrate with Vite
if (process.env.NODE_ENV === 'development') {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });
  
  app.use(vite.ssrFixStacktrace);
  app.use(vite.middlewares);
} else {
  // Production mode: serve static files
  app.use(express.static(path.join(__dirname, '../dist/public')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/public/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});