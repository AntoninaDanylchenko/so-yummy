import Navigation from 'components/Header/Navigation';
import UserMenu from 'components/Header/UserMenu';

// import { useAuth } from 'hooks/useAuth';
import { ThemeToggler } from './ThemeToggler';

const Header = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      <UserMenu />
      <ThemeToggler />
    </header>
  );
};
export default Header;
