import React from // { useState }
'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { TextField as MuiTextField } from 'formik-mui';
import { object, string } from 'yup';
import { InputAdornment, Button, LinearProgress } from '@mui/material';

import { styled } from '@mui/material/styles';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
// import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

import { register } from 'redux/auth/operation';


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
      'Password must exist (A-a, 1-9)'
    )
    .required('Please enter password')
    .trim(),
});

// const TextField = styled(MuiTextField)(({ theme, errors, touched, values }) => {
//   let borderStyle;
//   if (touched?.username && errors?.username) {
//     borderStyle = '2px solid #E74A3B';
//   } else if (touched?.username) {
//     borderStyle = '5px solid #3CBC81';
//   } else {
//     borderStyle = '2px solid #FAFAFA';
//   }
//   // inputSuccess
//   return {
//     //  " & MuiOutlinedInput-root"

//     '& MuiOutlinedInput-root':
//       // MuiOutlinedInput-root
//       // & MuiInputBase-root,
//       // & MuiInputBase-colorPrimary,
//       // & MuiInputBase-fullWidth,
//       // & MuiInputBase - formControl

//       {
//         fontFamily: 'Poppins',
//         fontSize: 14,
//         lineHeight: 1.39,
//         marginBottom: '12px',
//         opacity: 0.8,
//         flex: 'none',
//         order: 2,
//         flexGrow: 0,
//         borderRadius: '6px',
//         сolor: '#fafafa',
//         border: borderStyle,
//         '&:hover': {
//           borderColor: '2px solid #FAFAFA',
//         },
//         '&.Mui-focused': {
//           borderColor: '2px solid #FAFAFA',
//         },
//         // borderColor: ${p => p.theme.inputSuccess},
//       },
//   };
// });
//  white ? '1px solid #FAFAFA'
// error    ? '1px solid #E74A3B'
// green: '1px solid #3CBC81',
// const ButtonMui = styled(Button)({height: 45px;})
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
      border: '1px solid #FAFAFA',
      '&:hover': {
        border: '2px solid #FAFAFA',
      },
      '&.Mui-focused': {
        border: '2px solid #FAFAFA',
      },
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

export const RegisterForm = () => {
  // const [passwordWarn, setPasswordWarn] = useState('');
  // const [showWarning, setShowWarning] = useState(false);
  const dispatch = useDispatch();

  const handleOnSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    dispatch(register(values));
  };

  // e.preventDefault();
  // console.log(showWarning);
  // console.log(passwordWarn);
  // const handleChange = e => {
  //   setPasswordWarn(e.target.value);
  //   if (passwordWarn.length > 5 && passwordWarn.length < 17) {
  //     return setShowWarning(true);
  //   }
  //   return setShowWarning(false);
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleOnSubmit}
    >
      {({ values, submitForm, isSubmitting, touched, errors }) => (
        <Form autoComplete="off">
          <Field
            component={TextField}
            fullWidth
            // id="outlined"
            name="username"
            type="text"
            placeholder="Name"
            multiline
            // border={
            //   touched.username &&
            //   'rgba(245, 146, 86, 0.5)' &&
            //   (errors.username
            //     ? '1px solid rgba(226, 0, 26, 1)'
            //     : `1px solid rgba(60, 188, 129, 1)`)
            // }
            InputProps={{
              sx: {
                // borderColor:
                //   errors.username && touched.username
                //     ? '2px solid #E74A3B'
                //     : touched.username
                //     ? '2px solid #3CBC81'
                //     : '2px solid #fafafa',         =================== працює на іконках
                //  {errors.username && touched.username} ?? border:'5px solid #E74A3B'
                // border:
                //   errors?.username && touched?.username
                //     ? '2px solid #E74A3B'
                //     : '2px solid #3CBC81',
              },
              // sx: {
              //   border:
              //     errors.username && touched.username
              //       ? 'opx solid #E74A3'
              //       : touched.username
              //       ? '2px solid #3CBC81'
              //       : undefined,
              // },
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
            // id="outlined"
            name="email"
            type="email"
            placeholder="Email"
            multiline
            InputProps={{
              sx: {
                // {errors.username && touched.username ?? border:'5px solid #E74A3B'}
                border:
                  (!errors?.username && touched?.username) &
                  '2px solid #3CBC81',
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
            // value={values.email}
            // onChange={handleChange}
            // error={touched.email && Boolean(errors.email)}
            // helperText={touched.email && errors.email}
          />
          <Field
            component={TextField}
            fullWidth
            // id="outlined-password-input"
            name="password"
            type="password"
            // value={passwordWarn}
            // onChange={handleChange}
            placeholder="Password"
            multiline
            autoComplete="off"
            InputProps={{
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
                  {/* {showWarning && (
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
            // values={passwordWarn}
            // onChange={handleChange}
            // () => {
            //   setPasswordWarn(values.password);
            //   if (passwordWarn.length > 5 && passwordWarn.length > 0) {
            //     return setShowWarning(true);
            //   }
            //   return setShowWarning(false);
            // }

            // error={touched.password && Boolean(errors.password)}
            // helperText={touched.password && errors.password}
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="outlined"
            sx={{
              fontFamily: 'Poppins',
              width: '100%',
              height: '45px',
              mt: '16px',

              textTransform: 'none',
              fontSize: 16,
              // lineHeight: 18,

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
            // disabled={isSubmitting}
            fullWidth
            type="submit"
            onClick={submitForm}
          >
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

// const ButtonFormik = styled(Button){
//   backgroundColor: ${p=>p.theme.primary.text},
// };
