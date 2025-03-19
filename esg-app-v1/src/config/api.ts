// src/config/api.ts

const config = {
    development: {
        apiUrl: 'http://localhost:8000/',
    },
    production: {
        apiUrl: 'https://your-production-api-url.com', // Replace with your actual production API URL
    },
};

// Determine the current environment
const env = import.meta.env.MODE || 'development';

// Export the configuration for the current environment
export default {
    apiUrl: config[env as keyof typeof config].apiUrl,
};