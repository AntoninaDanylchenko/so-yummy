import Navigation from 'components/Header/Navigation';
import UserMenu from 'components/Header/UserMenu';

// import { useAuth } from 'hooks/useAuth';

const Header = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      <UserMenu />
    </header>
  );
};
export default Header;
