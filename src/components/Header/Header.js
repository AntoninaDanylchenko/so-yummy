import AuthNav from 'components/WelcomePage/AuthNav';
import Navigation from 'components/Header/Navigation';
import UserMenu from 'components/Header/UserMenu';
// import { useAuth } from 'hooks/useAuth';

const Header = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <UserMenu />
      <AuthNav />
    </header>
  );
};
export default Header;
