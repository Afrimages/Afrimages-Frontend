import { Montserrat, Lato, Nunito, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import store from "@/store/store"

import './globals.css';

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
});

const lato = Lato({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lato',})

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
});

const montserrat = Montserrat({
    weight: ['300', '500'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});

// export const metadata = {
//     title: 'Afrimages',
//     description: 'Providing African images for individuals and designers',
// };

export default function RootLayout({
    children,
}) {
    return (
        <html lang='en'>
            <body
                className={`${poppins.variable} ${lato.variable} ${nunito.variable} ${montserrat.variable} font-poppins`}
            >
                {/* <Provider store={store}> */}

                {/* </Provider> */}
                <GoogleOAuthProvider clientId="788782201642-oatf2dtiu991mm809kvejs308ufs4919.apps.googleusercontent.com">
                    <main className='max-w-[1440px] mx-auto overflow-hidden'>
                    {children}
                </main>
                </GoogleOAuthProvider>
                
                <Toaster />
            </body>
        </html>
    );
}
