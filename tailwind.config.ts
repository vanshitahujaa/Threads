// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Add paths to your HTML/JS/TS files
  ],
  theme: {
    extend: {
      colors: {
       "rabbit-red": "#ea2e0e",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font family
      },
    },
  },
  plugins: [],
}

export default config

