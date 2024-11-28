/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Includes files in the `app` directory (App Router)
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Includes files in the `pages` directory (Pages Router)
    "./Components/**/*.{js,ts,jsx,tsx,mdx}", // Includes files in the `Components` directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}",      // Includes files in the `src` directory (common for Next.js projects)
  ],
  theme: {
    extend: {
      // Add custom Tailwind CSS extensions here if needed
      colors: {
        // Example: Custom colors
        primary: "#4CAF50",
        secondary: "#FF5722",
      },
      spacing: {
        // Example: Custom spacing
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    require('daisyui'), // Includes DaisyUI plugin
    // Add other Tailwind plugins here if needed
  ],
  daisyui: {
    themes: [
      "light",       // Default light theme
      "dark",        // Dark theme
      "cupcake",     // Cupcake theme (optional)
      "emerald",     // Example: Additional DaisyUI theme
    ],
    base: true,       // Whether to include DaisyUI base styles
    styled: true,     // Enable styled components
    utils: true,      // Enable utility classes
    rtl: false,       // Disable right-to-left support by default
    prefix: "",       // No prefix for DaisyUI classes
  },
};