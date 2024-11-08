/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryForeground: "hsl(210, 20%, 98%)", // Converts to a near-white color
        primary: "hsl(220.9, 39.3%, 11%)", // Converts to a dark blue shade
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default font
        "sans-display": ["'Space Grotesk'", "sans-serif"], // Custom font for specific elements
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
