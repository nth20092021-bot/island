import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Đường dẫn tương đối để chạy hoàn hảo trên GitHub Pages (https://nth20092021-bot.github.io/island/)
  server: {
    port: 3000,
    open: false, // TẮT TUYỆT ĐỐI tự động mở tab trình duyệt để tránh spam mở tab và giật nhảy tab
    strictPort: true, // Cố định đúng port 3000, không tự động nhảy sang 3001, 3002... gây mở nhiều tab
    host: 'localhost'
  }
});

