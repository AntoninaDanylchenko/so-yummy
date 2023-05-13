// import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';

import { SigninForm } from '../../components/AuthForm/SigninForm/SigninForm';
import { Box, Title, WrapperForm, LinkToSignup } from './SigninPage.styled';

const SigninPage = () => {
  return (
    <>
      <Box>
        <Container
          // fixed
          maxWidth="desktop"
          sx={{
            paddingTop: 'calc(50vh - 70px)',
            '@media (min-width: 768px)': {
              paddingTop: 'calc(50vh - 100px)',
            },
            '@media (min-width: 1440px)': {
              paddingTop: '15vh',
            },
          }}
        >
          <WrapperForm>
            {/* <Helmet> */}
            <Title>Sign In</Title>
            {/* </Helmet> */}
            <SigninForm />
          </WrapperForm>
          <LinkToSignup to="/register">Registration</LinkToSignup>
        </Container>
      </Box>
    </>
  );
};
export default SigninPage;
