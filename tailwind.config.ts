import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";


export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#001F54", 
        "secondary": "#4392F1", 
        "dark": "#1A1A1A", 
        "darkgrey": "#738290", 
        "lightgrey": "#F7F6F9", 
        "light": "#FFFFFF",

        "danger": "#FF0000",
      },
      fontFamily: {
        'sans': ['"Open sans"', ...defaultTheme.fontFamily.sans],
      } 
    }
  },
  plugins: [],
} satisfies Config;
