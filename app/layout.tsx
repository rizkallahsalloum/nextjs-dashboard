'use client';
import Sidebar from '@/app/components/sidebar/Sidebar';
import './global.scss';
import DashboardHeader from './components/dashboardHeader/DashboardHeader';
import { useState, useEffect } from 'react';
import { Oswald, Outfit } from 'next/font/google';

export const metadata = {
  title: 'Next JS 13 Dashboard',
  description: 'Next JS 13 Dashboard',
  keywords: 'web development, web design, javascript, react html, sass, github',
};

export default function RootLayout({ children }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleToggle = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <html lang="en">
      <body className="wrapper">
        <Sidebar
          handleToggle={toggleNavbar}
          setToggleNavbar={setToggleNavbar}
        />
        <main className="main">
          <DashboardHeader handleToggle={handleToggle} />
          {children}
        </main>
      </body>
    </html>
  );
}
