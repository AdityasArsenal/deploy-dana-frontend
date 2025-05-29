import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Parse JSON requests
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV || 'development'
    });
});

// API endpoints - simplified approach
app.all('/api/chat', async (req, res) => {
    try {
        console.log(`API request: ${req.method} /api/chat`);

        const response = await fetch('https://deploy-dana-production.up.railway.app/chat', {
            method: req.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
        });

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error('API proxy error:', error);
        res.status(500).json({ error: 'API proxy error' });
    }
});

// Catch-all handler for React Router - serves index.html for all routes
app.get('/*', (req, res) => {
    console.log(`Serving React app for route: ${req.path}`);
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📁 Serving static files from: ${path.join(__dirname, 'dist')}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});