import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        primaryBg: "var(--primary-bg)",
        primaryOpacity: "var(--primary-color-opacity)",
        secondary: "var(--secondary-color)",
        commentBg: "var(--comment-bg)",
        commentBorder: "var(--comment-border)",
        textareaBg: "var(--textarea-bg)",
        successBg: "var(--success-bg)",
        successBorder: "var(--success-border)",
        failBg: "var(--fail-bg)",
        failBorder: "var(--fail-border)",
      },
    },
  },
  plugins: [],
};
export default config;
