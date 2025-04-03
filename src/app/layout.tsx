import './globals.css';
import Header from '@/components/header/Header';
import Footer from '../components/footer/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Moto App',
  description: 'Deep research chat for the biker community'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-harley-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
