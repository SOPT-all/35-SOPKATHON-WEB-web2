import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import Door from './pages/groups/Door';
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Door />
    </>
  );
};

export default Layout;
