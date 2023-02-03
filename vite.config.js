import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {crx} from '@crxjs/vite-plugin'
import manifest from './manifest.json' assert {type: 'json'} // Node >=17


// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: 'esnext'
    },
    plugins: [
        vue(),
        crx({manifest}),
    ]
})
