// import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';

import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Box, Title, WrapperForm, LinkToSignup } from './SigninPage.styled';

const SigninPage = () => {
  return (
    <>
      <Box>
        <Container
          fixed
          maxWidth="desktop"
          style={{ background: '#FAFAFA', padding: 0 }}
        >
          <WrapperForm>
            {/* <Helmet> */}
            <Title>Sign In</Title>
            {/* </Helmet> */}
            <LoginForm />
            <LinkToSignup to="/register">Sign up</LinkToSignup>
          </WrapperForm>
        </Container>
      </Box>
    </>
  );
};
export default SigninPage;
