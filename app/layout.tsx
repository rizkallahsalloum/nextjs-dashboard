import Sidebar from '@/app/components/sidebar/Sidebar';
import './global.scss';
import DashboardHeader from './components/dashboardHeader/DashboardHeader';
import { Outfit, Oswald } from 'next/font/google';

const primary_font_outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
  weight: ['400', '700'],
});
const secondary_font_oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
  weight: ['300', '400', '600', '700'],
});

export const metadata = {
  title: 'Next JS 13 Dashboard',
  description: 'Next JS 13 Dashboard',
  keywords: 'web development, web design, javascript, react html, sass, github',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body
        className={`${primary_font_outfit.variable} ${secondary_font_oswald.variable}`}
      >
        <div className="wrapper">
          <Sidebar />
          <main className="main">
            <DashboardHeader />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
