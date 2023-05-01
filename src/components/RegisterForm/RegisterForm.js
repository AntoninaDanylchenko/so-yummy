import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { TextField as MuiTextField } from 'formik-mui';
import { object, string } from 'yup';
import { InputAdornment, Button } from '@mui/material';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

import { styled } from '@mui/material/styles';
import { register } from 'redux/auth/operation';
// import { logIn } from 'redux/auth/operation';
// import { selectUser } from 'redux/auth/selector';

const schema = object().shape({
  username: string()
    .min(1)
    .max(16, 'Must be less than 16 characters')
    .required('Please enter name')
    .trim(),
  email: string()
    .email('Invalid email address')
    .required('Please enter email')
    .trim(),
  password: string()
    .min(6, 'Password should be min 6 characters')
    .max(16, 'Password should be max 16 characters')
    .matches(
      /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      'Password too light (A-a, 1-9)'
    )
    .required('Please enter password')
    .trim(),
});

const TextField = styled(MuiTextField)(
  ({ theme, errors, touched, values }) => ({
    '& .MuiInputBase-root': {
      fontFamily: 'Poppins',
      fontSize: '14px',
      height: '45px',

      marginBottom: '12px',
      py: '12px',
      opacity: 0.8,
      flex: 'none',
      order: 2,

      color: '#fafafa',
      flexGrow: 0,
      borderRadius: '6px',

      '& fieldset': { border: 'none' },
      '@media (min-width: 768px)': {
        height: '59px',
        marginBottom: '24px',
        fontSize: '18px',
      },
    },
  })
);

const initialValues = {
  username: '',
  email: '',
  password: '',
};
// const user = useSelector(selectUser);

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    dispatch(register(values));

    // dispatch(logIn({ email: values.email, password: values.password }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleOnSubmit}
    >
      {({ touched, errors }) => (
        <Form autoComplete="off">
          <Field
            component={TextField}
            fullWidth
            id="outlined"
            name="username"
            type="text"
            placeholder="Name"
            InputProps={{
              sx: {
                border:
                  errors.username && touched.username
                    ? '1px solid #E74A3B'
                    : touched?.username
                    ? '1px solid #3CBC81'
                    : '1px solid #FAFAFA',
                '&:hover': {
                  border: '2px solid #FAFAFA',
                },
                '&.Mui-focused': {
                  border: '2px solid #FAFAFA',
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIcon
                    sx={{
                      fontSize: 20,
                      color:
                        errors.username && touched.username
                          ? '#E74A3B'
                          : touched.username
                          ? '#3CBC81'
                          : '#fafafa',
                      opacity: 0.8,
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                      '@media (min-width: 768px)': {
                        fontSize: 28,
                      },
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ outline: 'none' }}>
                  {errors.username && touched.username && (
                    <CancelSharpIcon
                      sx={{
                        color: '#E74A3B',
                        fontSize: 18,
                        '@media (min-width: 768px)': {
                          fontSize: 24,
                        },
                      }}
                    ></CancelSharpIcon>
                  )}
                  {!errors.username && touched.username && (
                    <CheckCircleSharpIcon
                      sx={{
                        color: '#3CBC81',
                        fontSize: 18,
                        '@media (min-width: 768px)': {
                          fontSize: 24,
                        },
                      }}
                    ></CheckCircleSharpIcon>
                  )}
                </InputAdornment>
              ),
            }}
          />

          <Field
            component={TextField}
            fullWidth
            id="outlined"
            name="email"
            type="email"
            placeholder="Email"
            InputProps={{
              sx: {
                border:
                  errors.email && touched.email
                    ? '1px solid #E74A3B'
                    : touched?.email
                    ? '1px solid #3CBC81'
                    : '1px solid #FAFAFA',
                '&:hover': {
                  border: '2px solid #FAFAFA',
                },
                '&.Mui-focused': {
                  border: '2px solid #FAFAFA',
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon
                    sx={{
                      fontSize: 20,
                      color:
                        errors.email && touched.email
                          ? '#E74A3B'
                          : touched.email
                          ? '#3CBC81'
                          : '#fafafa',
                      opacity: 0.8,
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                      '@media (min-width: 768px)': {
                        fontSize: 28,
                      },
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ outline: 'none' }}>
                  {errors.email && touched.email && (
                    <CancelSharpIcon
                      sx={{
                        color: '#E74A3B',
                        fontSize: 18,
                        '@media (min-width: 768px)': {
                          fontSize: 24,
                        },
                      }}
                      fontSize="default"
                    ></CancelSharpIcon>
                  )}
                  {!errors.email && touched.email && (
                    <CheckCircleSharpIcon
                      sx={{
                        color: '#3CBC81',
                        fontSize: 18,
                        '@media (min-width: 768px)': {
                          fontSize: 24,
                        },
                      }}
                      fontSize="default"
                    ></CheckCircleSharpIcon>
                  )}
                </InputAdornment>
              ),
            }}
          />

          <Field
            component={TextField}
            fullWidth
            id="outlined"
            name="password"
            placeholder="Password"
            type="password"
            InputProps={{
              sx: {
                border:
                  errors.password && touched.password
                    ? '1px solid #E74A3B'
                    : touched?.password
                    ? '1px solid #3CBC81'
                    : '1px solid #FAFAFA',
                '&:hover': {
                  border: '2px solid #FAFAFA',
                },
                '&.Mui-focused': {
                  border: '2px solid #FAFAFA',
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon
                    sx={{
                      fontSize: 20,
                      color:
                        errors.password && touched.password
                          ? '#E74A3B'
                          : touched.password
                          ? '#3CBC81'
                          : '#fafafa',
                      opacity: 0.8,
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                      '@media (min-width: 768px)': {
                        fontSize: 28,
                      },
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ outline: 'none' }}>
                  {errors.password && touched.password && (
                    <CancelSharpIcon
                      sx={{
                        color: '#E74A3B',
                        fontSize: 18,
                        '@media (min-width: 768px)': {
                          fontSize: 24,
                        },
                      }}
                    ></CancelSharpIcon>
                  )}
                  {!errors.password && touched.password && (
                    <CheckCircleSharpIcon
                      sx={{
                        color: '#3CBC81',
                        fontSize: 18,
                        '@media (min-width: 768px)': {
                          fontSize: 24,
                        },
                      }}
                    ></CheckCircleSharpIcon>
                  )}
                </InputAdornment>
              ),
            }}
          />

          <Button
            sx={{
              fontFamily: 'Poppins',
              width: '100%',
              height: '45px',
              mt: '16px',

              textTransform: 'none',
              fontSize: 16,

              backgroundColor: '#8BAA36',
              color: '#FAFAFA',
              borderRadius: '6px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
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
          >
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
};
