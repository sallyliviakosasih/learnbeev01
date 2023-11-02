/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'primary-yellow': '#FEDE3E',
      'mid-muted': '#F8F8F8',
      'dark-muted': '#B9B9B9',
      'darker-muted': '#6F6F6F',
      'contrast': '#5D3737',
      'warning-red': '#FF4646',
      'black': 'black',
      'transparent': 'transparent'
    }
  },
  plugins: [],
}
