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
                nunito: ['var(--font-nunito)'],
                montserrat: ['var(--font-montserrat)'],
            },
            colors: {
                green500: '#A9DCB3',
                green400: '#62B66F',
                green800: '#459A56',
                green1000: '#295C34',
                green1100: '#1B3D22',
                orange800: '#E76020',
                orange900: '#C0501A',

                offWhite: '#F9F9F9',
            },
            spacing: {
                xPadding: '5.2%',
            },
        },
    },
    plugins: [],
};
export default config;
