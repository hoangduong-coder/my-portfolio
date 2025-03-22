import './globals.css';
import type { Metadata } from 'next';
import { Chakra_Petch, Inter, Roboto, Tomorrow } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const chakraPetch = Chakra_Petch({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-chakra',
});

const tomorrow = Tomorrow({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tomorrow',
});

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter',
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Duong Hoang - Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${chakraPetch.variable} ${tomorrow.variable} ${inter.variable} ${roboto.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}