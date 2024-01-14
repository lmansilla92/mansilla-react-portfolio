import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // setup react server
  server: {
    port: 3000, // runs server in port 3000
    open: true // automatically opens in browser
  }
})
