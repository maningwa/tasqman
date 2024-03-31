import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    server:"5173",
    proxy:{"/api":"http://localhost:5500"},
    }
})
