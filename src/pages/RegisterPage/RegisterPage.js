// import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';

import { RegisterForm } from '../../components/AuthForm/RegisterForm/RegisterForm';
import { Box, Title, WrapperForm, LinkToSignin } from './RegisterPage.styled';

const RegisterPage = () => {
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
            <Title>Registration</Title>
            {/* </Helmet> */}
            <RegisterForm />
            <LinkToSignin to="/signin">Sign In</LinkToSignin>
          </WrapperForm>
        </Container>
      </Box>
    </>
  );
};
export default RegisterPage;
