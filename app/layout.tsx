import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
});

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
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
                className={`${poppins.variable} ${nunito.variable} font-poppins`}
            >
                <main className='max-w-[1440px] mx-auto overflow-hidden'>
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
