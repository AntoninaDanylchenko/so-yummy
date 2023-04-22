// import { Helmet } from 'react-helmet-async';

import { Title, WrapperForm } from './SigninPage.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const SigninPage = () => {
  return (
    <>
      <WrapperForm>
        <Title>Sign In</Title>
        {/* <Helmet>
        </Helmet> */}
        <LoginForm />
      </WrapperForm>
    </>
  );
};
export default SigninPage;
