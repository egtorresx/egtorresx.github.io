const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        brand: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c4d4ff",
          300: "#93afff",
          400: "#6089fc",
          500: "#3b64f8",
          600: "#2245ee",
          700: "#1a32da",
          800: "#1b2cb1",
          900: "#1c2b8b",
          950: "#151d5a",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #2245ee 0%, #7c3aed 100%)",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(34,69,238,0.08)",
        "card-hover": "0 8px 40px 0 rgba(34,69,238,0.16)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },

  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    themes: ["light"],
  },
};

module.exports = config;
