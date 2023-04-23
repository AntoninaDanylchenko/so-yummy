// import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
      <Link to="/register">Sign In</Link>
    </>
  );
};
export default SigninPage;
