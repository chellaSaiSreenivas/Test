import { defineConfig } from 'vite';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  base: 'Test', // Replace 'repo-name' with your repository name
  plugins: [ghPages],
});
