import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    // Required when `vite preview` is used behind Render / other hosts (not localhost)
    allowedHosts: true,
  },
})
