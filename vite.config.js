import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve (__dirname, 'index.html'),
                plane: resolve (__dirname, 'plane-scroll.html'),
                err404: resolve (__dirname, '404.html'),
            }
        },
    }
})