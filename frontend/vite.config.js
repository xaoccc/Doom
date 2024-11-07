import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Explicitly set the port to 5173
    host: '0.0.0.0', // This allows the server to be accessed from outside the container
  }
})
