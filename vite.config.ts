import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    base: '/dinas-cake/',
    server: {
        allowedHosts: true,
    },
    build: {
        chunkSizeWarningLimit: 5000,
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, './src/assets'),
            entities: path.resolve(__dirname, './src/entities'),
            routing: path.resolve(__dirname, './src/routing'),
            features: path.resolve(__dirname, './src/features'),
            widgets: path.resolve(__dirname, './src/widgets'),
            pages: path.resolve(__dirname, './src/pages'),
            shared: path.resolve(__dirname, './src/shared'),
            data: path.resolve(__dirname, './src/data'),
            components: path.resolve(__dirname, './src/components'),
        },
    },
});
