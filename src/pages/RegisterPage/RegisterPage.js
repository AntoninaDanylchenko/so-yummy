import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';

import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Title, WrapperForm } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <>
      <WrapperForm>
        <Title>Registration</Title>
        {/* <Helmet>
        </Helmet> */}
        <RegisterForm />
      </WrapperForm>
      <Link to="/signin">Sign In</Link>
    </>
  );
};
export default RegisterPage;
