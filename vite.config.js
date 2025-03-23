import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'REACT-CMS-APP',
        short_name: 'REACT-APP',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3f51b5',
        icons: [
          {
            src: 'PWA-icon/pwa-icon.svg',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
