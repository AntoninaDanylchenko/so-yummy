import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/operation';
import { useSelector } from 'react-redux';

import { lazy } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';
import RestricteRoute from './RestricteRoute';
import PrivateRoute from './PrivateRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Layout } from './Layout';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyles';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import NotFound from 'pages/NotFound/NotFound';

// const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CategoriesPage = lazy(() =>
  import('../pages/CategoriesPage/CategoriesPage')
);
const AddRecipePage = lazy(() =>
  import('../pages/AddRecipePage/AddRecipePage')
);
const MyRecipesPage = lazy(() =>
  import('../pages/MyRecipesPage/MyRecipesPage')
);
const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const ShoppingListPage = lazy(() =>
  import('../pages/ShoppingListPage/ShoppingListPage')
);
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));

const App = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestricteRoute component={WelcomePage} redirectTo="/main" />
            }
          />
          <Route
            path="/register"
            element={
              <RestricteRoute component={RegisterPage} redirectTo="/main" />
            }
          />
          <Route
            path="/signin"
            element={
              <RestricteRoute component={SigninPage} redirectTo="/main" />
            }
          />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
        <Route
          path="/"
          element={<PrivateRoute component={SharedLayout} redirectTo="/" />}
        >
          <Route
            path="/main"
            element={<PrivateRoute component={MainPage} redirectTo="/" />}
          />

          <Route
            path="/categories/:category"
            element={<PrivateRoute component={CategoriesPage} redirectTo="/" />}
          />
          <Route
            path="/add"
            element={<PrivateRoute component={AddRecipePage} redirectTo="/" />}
          />
          <Route
            path="/my"
            element={<PrivateRoute component={MyRecipesPage} redirectTo="/" />}
          />
          <Route
            path="recipe/:recipeId"
            element={<PrivateRoute component={RecipePage} redirectTo="/" />}
          />
          <Route
            path="/favorite"
            element={<PrivateRoute component={FavoritePage} redirectTo="/" />}
          />
          <Route
            path="/shopping-list"
            element={
              <PrivateRoute component={ShoppingListPage} redirectTo="/" />
            }
          />
          <Route
            path="/search"
            element={<PrivateRoute component={SearchPage} redirectTo="/" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
