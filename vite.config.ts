import { defineConfig } from 'vite';
import { cpSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: './', // Đường dẫn tương đối để chạy hoàn hảo trên GitHub Pages (https://nth20092021-bot.github.io/island/)
  plugins: [
    {
      // Game trắc nghiệm là HTML thuần đặt cạnh index.html, cần copy nguyên thư mục vào dist khi build.
      name: 'copy-quiz-game',
      closeBundle() {
        const from = fileURLToPath(new URL('./tracnghiem_1003', import.meta.url));
        const to = fileURLToPath(new URL('./dist/tracnghiem_1003', import.meta.url));
        if (existsSync(from)) {
          cpSync(from, to, { recursive: true });
        }
      }
    }
  ],
  server: {
    port: 3000,
    open: false, // TẮT TUYỆT ĐỐI tự động mở tab trình duyệt để tránh spam mở tab và giật nhảy tab
    strictPort: true, // Cố định đúng port 3000, không tự động nhảy sang 3001, 3002... gây mở nhiều tab
    host: 'localhost'
  }
});

