import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

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

// In development, serve a simple HTML page
if (process.env.NODE_ENV === 'development') {
  app.get('*', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="pl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CRM Development</title>
      </head>
      <body>
        <div id="root">
          <h1>CRM Development Server</h1>
          <p>Serwer działa poprawnie na porcie ${PORT}</p>
          <p>API Health Check: <a href="/api/health">/api/health</a></p>
        </div>
      </body>
      </html>
    `);
  });
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