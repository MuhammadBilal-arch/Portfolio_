// components/Layout.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { Main } from './container';

const Layout = () => {
  return (
    <>
      <Main />
      <ToastContainer />
    </>
  );
};

export default Layout;
