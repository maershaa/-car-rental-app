import React, { useEffect } from 'react';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMain from '../HeaderMain/HeaderMain';
import { Footer } from '../Footer/Footer';
import FollowCursor from '../../components/FollowCursor/FollowCursor';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  useEffect(() => {
    console.log("SharedLayout component mounted");
  }, []);
  
  return (
    <>
      <HeaderMain />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <FollowCursor />
    </>
  );
};

export default SharedLayout;
