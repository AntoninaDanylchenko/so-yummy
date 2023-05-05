// import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';

import { SigninForm } from '../../components/AuthForm/SigninForm/SigninForm';
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
            <SigninForm />
            <LinkToSignup to="/register">Registration</LinkToSignup>
          </WrapperForm>
        </Container>
      </Box>
    </>
  );
};
export default SigninPage;
