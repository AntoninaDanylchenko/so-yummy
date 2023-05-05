import React from 'react'; // useState, // useEffect,
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { TextField as MuiTextField } from 'formik-mui';
import { InputAdornment, Button } from '@mui/material';

import { styled } from '@mui/material/styles';

// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
// import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

import { logIn } from 'redux/auth/operation';
import { schema } from '../../YupSchema/YupSchemaSignin';

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
  email: '',
  password: '',
};

export const SigninForm = () => {
  //   const [passwordWarn, setPasswordWarn] = useState('');
  //   const [showWarning, setShowWarning] = useState(false);
  const dispatch = useDispatch();

  const handleOnSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    dispatch(logIn(values));
  };

  //   useEffect(() => {
  //     if (passwordWarn.trim().length >= 6 && passwordWarn.trim().length <= 10) {
  //       return setShowWarning(true);
  //     }
  //     return setShowWarning(false);
  //   }, [passwordWarn]);

  //   const handleChange = event => {
  //     setPasswordWarn(event.target.value);
  //     console.log(passwordWarn);
  //   };

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
            id="outlined-controlled"
            name="email"
            type="email"
            placeholder="Email"
            variant="outlined"
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
            variant="outlined"
            name="password"
            type="password"
            placeholder="Password"
            // value={passwordWarn}
            // onChange={handleChange}
            // helperText={
            //   !errors.password && showWarning
            //     ? 'Your password is little secure'
            //     : ' '
            // }
            autoComplete="off"
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
                  {/* {showWarning && !errors.password && (
                    <ErrorRoundedIcon
                      sx={{
                        color: '#F6C23E',
                        fontSize: 18,
                        '@media (min-width: 768px)': {
                          fontSize: 24,
                        },
                      }}
                    ></ErrorRoundedIcon>
                  )} */}
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="outlined"
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
            // variant="contained"
            // disabled
            fullWidth
            type="submit"
            // onClick={submitForm}
          >
            Sign in
          </Button>
        </Form>
      )}
    </Formik>
  );
};
