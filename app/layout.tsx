import type { Metadata } from 'next';
import { Montserrat, Lato, Nunito, Poppins } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

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
    variable: '--font-lato',
)}

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

export const metadata: Metadata = {
    title: 'Afrimages',
    description: 'Providing African images for individuals and designers',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${poppins.variable} ${lato.variable} ${nunito.variable} ${montserrat.variable} font-poppins`}
            >
                <main className='max-w-[1440px] mx-auto overflow-hidden'>
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
