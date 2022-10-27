/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'company-eggshell': '#fff4dc',
        'company-slate': '#31383f',
      },
    },
  },
  plugins: [],
}
