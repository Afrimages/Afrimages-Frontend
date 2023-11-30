import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "600px" },
        sm1: { max: "768px" },
        md: { max: "900px" },
        md1: { max: "850px" },
        lg: { max: "4070px" },
        ls: { max: "1370px" },
        xl: { max: "1250px" },
        lf: { max: "1150px" },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        green500: '#A9DCB3',
        green800: '#459A56',
        green1000: '#295C34',
        green1100: '#1B3D22',
        orange800: '#E76020',
        orange900: '#C0501A',
      },
      spacing: {
        xPadding: '5.2%',
      },
    },
  },
  plugins: [],
};
export default config;
