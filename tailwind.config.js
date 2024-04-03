/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend : {
      borderRadius: {
        'normal' : 'var(--radius)',
      },
      
    },
    colors: {
      accent: 'hsl(var(--accent) / <alpha-value>)',
      danger : 'hsl(var(--danger) / <alpha-value>)',

      background: 'hsl(var(--background) / <alpha-value>)',
      foreground: 'hsl(var(--foreground) / <alpha-value>)',

      input: 'hsl(var(--input-background) / <alpha-value>)',
    },
    plugins: [],
  },
};
