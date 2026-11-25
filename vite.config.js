import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    // Ignora planilhas (podem estar abertas no Excel e travar o watcher)
    watch: { ignored: ['**/*.xlsx', '**/*.xls', '**/*.csv', '**/~$*'] },
  },
})
