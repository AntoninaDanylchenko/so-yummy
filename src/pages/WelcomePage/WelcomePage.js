import AuthNav from 'components/WelcomePage/AuthNav';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      <AuthNav />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default WelcomePage;
