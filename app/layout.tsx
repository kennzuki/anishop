import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import AniContextProvider from './context/ani-context';
import { Animal } from './lib/types';
import SearchContextProvider from './context/search-context-provider';
import prisma from '@/lib/prisma';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kenki Anisoft',
  description: 'App for a pet shop',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pets = await prisma.pet.findMany();
  // console.log(data);

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchContextProvider>
          <AniContextProvider data={pets}>
            <Navbar />
            <Hero />
            {children}

            <Footer />
          </AniContextProvider>
        </SearchContextProvider>
      </body>
    </html>
  );
}
