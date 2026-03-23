import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://decodev.com.br').replace(/\/$/, '')

  return {
    plugins: [
      vue(),
      tailwindcss(),
      {
        name: 'inject-site-url-meta',
        transformIndexHtml(html) {
          return html.replaceAll('%SITE_URL%', siteUrl)
        },
      },
    ],
    define: {
      fanpageApi: JSON.stringify(env.VITE_FANPAGE_API_URL),
      baseEnv: JSON.stringify(env.VITE_API_BASE_ENV),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
