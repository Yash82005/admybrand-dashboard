// tailwind.config.ts
import { type Config } from "tailwindcss"
import  fontFamily  from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["Inter", 'sans-serif'],
      },
    },
  },
  plugins: [], // we'll fix animate next
}

export default config
