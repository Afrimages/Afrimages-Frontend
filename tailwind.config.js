const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        lato: ['var(--font-lato)'],
        nunito: ['var(--font-nunito)'],
        montserrat: ['var(--font-montserrat)'],
      },
      screens: {
        sm: { max: '600px' },
        sm1: { max: '768px' },
        md: { max: '900px' },
        md1: { max: '850px' },
        lg: { max: '1070px' },
        ls: { max: '1370px' },
        xl: { max: '1250px' },
        lf: { max: '1150px' },
      },
      colors: {
        green400: '#62B66F',
        green500: '#A9DCB3',
        green700: '#53B968',
        green800: '#459A56',
        green1000: '#295C34',
        green1100: '#1B3D22',

        orange400: '#FBE4D9',
        orange700: '#EB7A45',
        orange800: '#E76020',
        orange900: '#C0501A',

        grey100: '#FAF9F8',
        grey500: '#BDB4AD',
        grey600: '#7D736C',
        grey900: '#292421',

        success: '#0E8A1A',
        offWhite: '#F9F9F9',
      },
      spacing: {
        xPadding: '5.2%',
      },
      fontSize: {
        sm: '14px',
        md: '24px',
        mdl: '36px',
        lg: '48px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
}
export default config
