import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { InputAdornment, Typography } from '@mui/material';

import {
  PermIdentityIconS,
  MailOutlineIconS,
  LockOpenIconS,
  CheckCircleSharpIconS,
  CancelSharpIconS,
  ErrorRoundedIconS,
} from '../Icon.styled';

import { register } from 'redux/auth/operation';
import { selectIsLoading } from '../../../redux/auth/selector';
import { schema } from '../../YupSchema/YupSchemaRegister';

import { TextField, ButtonS } from './RegisterFrom.styled';
import { Loader } from 'components/Loader/Loader';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleOnSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    dispatch(register(values));
  };

  const checkSecure = value => {
    if (value.trim().length >= 6 && value.trim().length <= 10) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleOnSubmit}
    >
      {({ touched, errors, values, handleBlur, handleChange }) => (
        <Form autoComplete="off">
          <Field
            component={TextField}
            fullWidth
            onBlur={handleBlur}
            id="outlined-controlled"
            name="username"
            type="text"
            placeholder="Name"
            autoComplete="off"
            InputProps={{
              sx: {
                border:
                  errors.username && touched.username
                    ? '1px solid #E74A3B'
                    : touched?.username
                    ? '1px solid #3CBC81'
                    : '1px solid #FAFAFA',
              },

              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIconS
                    sx={{
                      color:
                        errors.username && touched.username
                          ? '#E74A3B'
                          : touched.username
                          ? '#3CBC81'
                          : '#fafafa',
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ outline: 'none' }}>
                  {errors.username && touched.username && <CancelSharpIconS />}
                  {!errors.username && touched.username && (
                    <CheckCircleSharpIconS />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <Field
            component={TextField}
            onBlur={handleBlur}
            fullWidth
            id="outlined-controlled"
            name="email"
            type="email"
            placeholder="Email"
            variant="outlined"
            autoComplete="off"
            title="Email must end on .com or .net"
            InputProps={{
              sx: {
                border:
                  errors.email && touched.email
                    ? '1px solid #E74A3B'
                    : touched?.email
                    ? '1px solid #3CBC81'
                    : '1px solid #FAFAFA',
              },
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIconS
                    sx={{
                      fontSize: 20,
                      color:
                        errors.email && touched.email
                          ? '#E74A3B'
                          : touched.email
                          ? '#3CBC81'
                          : '#fafafa',
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ outline: 'none' }}>
                  {errors.email && touched.email && <CancelSharpIconS />}
                  {!errors.email && touched.email && <CheckCircleSharpIconS />}
                </InputAdornment>
              ),
            }}
          />

          {!checkSecure(values.password) && !errors.password ? (
            <Typography
              variant="p"
              sx={{
                display: 'flex',
                fontSize: '12px',
                marginLeft: '14px',
                marginBottom: '3px',
                marginTop: '6px',
                color: '#F6C23E',
              }}
            >
              Your password is little secure
            </Typography>
          ) : (
            ' '
          )}

          <Field
            component={TextField}
            onBlur={handleBlur}
            fullWidth
            variant="outlined"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
            InputProps={{
              sx: {
                border:
                  errors.password && touched.password
                    ? '1px solid #E74A3B'
                    : touched?.password
                    ? '1px solid #3CBC81'
                    : '1px solid #FAFAFA',
              },
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIconS
                    sx={{
                      color:
                        errors.password && touched.password
                          ? '#E74A3B'
                          : touched.password
                          ? '#3CBC81'
                          : '#fafafa',
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ outline: 'none' }}>
                  {errors.password && touched.password && <CancelSharpIconS />}
                  {checkSecure(values.password) &&
                    !errors.password &&
                    touched.password && <CheckCircleSharpIconS />}
                  {!checkSecure(values.password) && !errors.password && (
                    <ErrorRoundedIconS />
                  )}
                </InputAdornment>
              ),
            }}
          />
          {isLoading && <Loader />}
          <ButtonS
            sx={{
              [`&:hover`]: {
                backgroundColor: '#8BAA36',
                color: '#FAFAFA',
              },
              '@media (min-width: 768px)': {
                width: '100%',
                height: '59px',
                borderRadius: '6px',
                backgroundColor: ' #8BAA36;',
                mt: '26px',
              },
            }}
            variant="contained"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            Sign up
          </ButtonS>
        </Form>
      )}
    </Formik>
  );
};
