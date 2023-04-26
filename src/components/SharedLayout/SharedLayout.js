import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { BgComponent } from '../BgComponents/BgComponent';
import { Box } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Box>
      <Header />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <BgComponent />
      <Footer />
    </Box>
  );
};
