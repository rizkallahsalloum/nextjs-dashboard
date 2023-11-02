import Sidebar from '@/app/components/sidebar/Sidebar';
import './global.scss';
import DashboardHeader from './components/dashboardHeader/DashboardHeader';

export const metadata = {
  title: 'Next JS 13 Dashboard',
  description: 'Next JS 13 Dashboard',
  keywords: 'web development, web design, javascript, react html, sass, github',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body
      // className={`${primary_font_outfit.variable} ${secondary_font_oswald.variable}`}
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
