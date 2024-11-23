import React from 'react';
import { Outlet } from 'react-router-dom';
import Door from './pages/groups/Door';

const Layout = () => {
  return (
    <>
      <Outlet />
      <Door />
    </>
  );
};

export default Layout;
