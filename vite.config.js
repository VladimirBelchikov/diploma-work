import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],

    server: {
        host: 'diploma.local',
    },

    build: {
        sourcemap: true,
    },
    css: {
        devSourcemap: true,
    }
});
