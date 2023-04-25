import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import { Footer } from './Footer/Footer';
import { BgComponent } from './BgComponents/BgComponent';
export const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <BgComponent />
      <Footer />
    </>
  );
};
