import { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Gauresh's Portfolio website",
  icons: {
    icon: ['favicon.ico?v=4'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png?v']
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="Body">
        <header className="header">
          <a href='/' className='name'><h2>Portfolio</h2></a>
        </header>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
