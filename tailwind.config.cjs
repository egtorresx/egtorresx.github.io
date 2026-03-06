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
          50: "#EFF4FF",
          100: "#DDEAFF",
          200: "#BBD4FF",
          300: "#88B2FF",
          400: "#5590FF",
          500: "#256EFF",
          600: "#1355D4",
          700: "#0D3EA8",
          800: "#0A2D7A",
          900: "#071E52",
          950: "#030F2A",
        },
        accent: {
          400: "#9a6dd0",
          500: "#6a3aad",
          600: "#46237A",
        },
        success: {
          DEFAULT: "#3DDC97",
          light: "#a8f0d0",
          dark: "#1fad6b",
        },
        danger: {
          DEFAULT: "#FF495C",
          light: "#ffc0c6",
          dark: "#cc1f30",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #256EFF 0%, #46237A 100%)",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(37,110,255,0.08)",
        "card-hover": "0 8px 40px 0 rgba(37,110,255,0.16)",
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
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#256EFF",
          "secondary": "#46237A",
          "success": "#3DDC97",
          "error": "#FF495C",
          "base-100": "#FCFCFC",
        },
      },
    ],
  },
};

module.exports = config;
