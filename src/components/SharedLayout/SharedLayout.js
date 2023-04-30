import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { BgComponent } from '../BgComponents/BgComponent';
import { Box, Main } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Box>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <BgComponent />
      <Footer />
    </Box>
  );
};
