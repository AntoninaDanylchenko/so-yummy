import { Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { refreshCurrentUser } from 'redux/auth/operations';
import { lazy } from 'react';
import RestricteRoute from './RestricteRoute';
// import { useAuth } from 'hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import { SharedLayout } from './SharedLayout';
import { Layout } from './Layout';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
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
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const ShoppingListPage = lazy(() =>
  import('../pages/ShoppingListPage/ShoppingListPage')
);
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));

const App = () => {
  return (
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
          element={<RestricteRoute component={SigninPage} redirectTo="/main" />}
        />
      </Route>
      <Route
        path="/"
        element={
          <PrivateRoute component={SharedLayout} redirectTo="/welcome" />
        }
      >
        <Route
          path="/main"
          element={<PrivateRoute component={MainPage} redirectTo="/welcome" />}
        />

        <Route
          path="/categories/:category-name"
          element={
            <PrivateRoute component={CategoriesPage} redirectTo="/welcome" />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute component={AddRecipePage} redirectTo="/welcome" />
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute component={MyRecipesPage} redirectTo="/welcome" />
          }
        />
        <Route
          path="/favorite"
          element={
            <PrivateRoute component={FavoritePage} redirectTo="/welcome" />
          }
        />
        <Route
          path="/shopping-list"
          element={
            <PrivateRoute component={ShoppingListPage} redirectTo="/welcome" />
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute component={SearchPage} redirectTo="/welcome" />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
