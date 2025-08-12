import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'UD. Jasa Auto Mandiri - Sewa Forklift Profesional Indonesia',
  description: 'Penyewaan forklift profesional sejak 2005. Berbagai kapasitas 3-20 ton dengan operator berpengalaman. Melayani seluruh Indonesia. Sewa harian & bulanan.',
  keywords: 'sewa forklift, sewa forklift Indonesia, sewa forklift harian, penyewaan forklift operator, forklift Medan, sewa forklift bulanan',
  authors: [{ name: 'UD. Jasa Auto Mandiri' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'UD. Jasa Auto Mandiri - Sewa Forklift Profesional',
    description: 'Penyewaan forklift profesional dengan operator berpengalaman. Melayani seluruh Indonesia sejak 2005.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="font-poppins antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}