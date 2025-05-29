import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV || 'development',
        serving: 'React Static Files Only'
    });
});

// Catch-all handler for React Router - serves index.html for ALL routes
app.get('/', (req, res) => {
    console.log(`Serving React app for route: ${req.path}`);
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/chat', (req, res) => {
    console.log(`Serving React app for route: ${req.path}`);
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Pure React Static Server running on port ${PORT}`);
    console.log(`📁 Serving files from: ${path.join(__dirname, 'dist')}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Frontend calls backend directly: esgai-backend-ewdvhyhde7gzcdcn.southindia-01.azurewebsites.net`);
});