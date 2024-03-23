import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/graphql': 'http://localhost:3005',
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: 'src/setupTest.ts'
  },
  plugins: [react()],
})
