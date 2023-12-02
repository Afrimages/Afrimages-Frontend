import type { Metadata } from 'next';
import { Lato, Poppins } from 'next/font/google';

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
                className={`${poppins.variable} ${lato.variable} font-poppins`}
            >
                {children}

                <Footer />
            </body>
        </html>
    );
}
