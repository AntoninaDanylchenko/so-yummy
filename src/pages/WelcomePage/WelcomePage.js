import AuthNav from 'components/WelcomePage/AuthNav';
import { Box, Title, Text, Container, Icon } from './WelcomePage.styled';
import Logo from '../../images/icon/logo-desk-tab.svg';

const WelcomePage = () => {
  return (
    <Box>
      <Container>
        <Icon src={Logo} alt="website logo" />
        <Title>Welcome to the app!</Title>
        <Text>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Text>
        <AuthNav />
      </Container>
    </Box>
  );
};
export default WelcomePage;
