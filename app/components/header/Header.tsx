'use client';
import { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import DashboardHeader from '../dashboardHeader/DashboardHeader';

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const handleToggle = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <>
      <Sidebar handleToggle={toggleNavbar} setToggleNavbar={setToggleNavbar} />

      <DashboardHeader handleToggle={handleToggle} />
    </>
  );
};

export default Header;
