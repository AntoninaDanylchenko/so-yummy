import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import { Footer } from './Footer/Footer';
export const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};
