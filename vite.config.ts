import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import svg from 'vite-plugin-solid-svg'

export default defineConfig({
    plugins: [solidPlugin(), svg()],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
})
