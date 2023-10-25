import type { Config } from "tailwindcss"
import defaultColors from "tailwindcss/colors"

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      heart: {
        "50": "#f3f1ff",
        "100": "#ebe5ff",
        "200": "#d9ceff",
        "300": "#bea6ff",
        "400": "#9f75ff",
        "500": "#843dff",
        "600": "#7916ff",
        "700": "#6b04fd",
        "800": "#5a03d5",
        "900": "#4b05ad",
        "950": "#2c0076",
      },
      warning: Object.assign(defaultColors.amber, {
        DEFAULT: defaultColors.amber[500],
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}