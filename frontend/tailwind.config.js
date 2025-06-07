const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
        primary: "#5d6ef8",

        dark: {
          background: "#0a0a0a",
          foreground: "#ededed",
        },
      },
      fontFamily: {
        sans: ["Geist Sans", "Arial", "Helvetica", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'shrink': 'shrink linear forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shrink: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;