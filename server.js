import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Set up proxy for API requests with fixed pathRewrite
app.use('/api', createProxyMiddleware({
    target: 'https://deploy-dana-production.up.railway.app',
    changeOrigin: true,
    pathRewrite: function (path, req) {
        return path.replace(/^\/api/, '');
    },
    logLevel: 'info'
}));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// For any request that doesn't match the above, send the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});