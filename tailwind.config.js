const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        green400: "#62B66F",
        green500: "#A9DCB3",
        green700: "#53B968",
        green800: "#459A56",
        green1000: "#295C34",
        green1100: "#1B3D22",

        orange400: "#FBE4D9",
        orange700: "#EB7A45",
        orange800: "#E76020",
        orange900: "#C0501A",

        grey100: "#FAF9F8",
        grey500: "#BDB4AD",
        grey600: "#7D736C",
        grey900: "#292421",

        success: "#0E8A1A",
        offWhite: "#F9F9F9",
      },
      spacing: {
        xPadding: "5.2%",
      },
      fontSize: {
        sm: "14px",
        md: "24px",
        mdl: "36px",
        lg: "48px",
      },
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1020px",
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
export default config;
