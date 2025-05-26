import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';

// Polyfill for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist'), {
    index: false, // Don't serve index.html for /
    fallthrough: true // Fall through to next middleware if file not found
}));

// Set up proxy for API requests
app.use('/api', createProxyMiddleware({
    target: 'https://deploy-dana-production.up.railway.app',
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}));

// For any request that doesn't match a static file, send the index.html file
app.get('*', (req, res) => {
    // Ensure we're sending the absolute path to index.html
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    res.sendFile(indexPath, {}, (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send('Error loading application');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Serving static files from: ${path.join(__dirname, 'dist')}`);
});