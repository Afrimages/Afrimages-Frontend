import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                lato: ['var(--font-lato)'],
            },
            colors: {
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
            },
            spacing: {
                xPadding: '5.2%',
            },
        },
    },
    plugins: [],
};
export default config;
