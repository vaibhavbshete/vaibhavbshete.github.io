import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
    root: './src',
    build: {
        rollupOptions: {
            input: {
                main: resolve (__dirname, 'src', 'index.html'),
                err404: resolve (__dirname, 'src', '404.html'),
            }
        },
        outDir: '../',
        emptyOutDir: false,
    }
})