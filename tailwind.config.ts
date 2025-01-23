import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gabriella: ["var(--font-gabriela)"],
      },
      colors: {
        'text': {
          'main': '#091E42',
          'body': '#5D6B82',
        },
        'custom-blue': {
          'badge': '#EAF2FB',
          'badge-text': '#1A4C81',
          'button': '#2B7CD4',
          'button-text': '#EAF2FB',
          'container': '#EAF2FB',
          'container-stroke': '#4F92DB',
        },
        'card-stroke': '#DFE2E6',
      },
      lineHeight: {
        '160': '1.6'
      },
      spacing: {
        '15': '60px',
        '30': '120px'
      },
    },
  },
  plugins: [],
} satisfies Config;
