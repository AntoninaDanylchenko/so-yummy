import React from 'react';
import { useDispatch } from 'react-redux';
<<<<<<< Updated upstream
import { Formik, Form, Field } from 'formik';
=======
// import { styled } from '@mui/material/styles';
import { Formik, Form, Field} from 'formik';
>>>>>>> Stashed changes
import { TextField } from 'formik-mui';
import { object, string } from 'yup';
import { InputAdornment, LinearProgress, Button } from '@mui/material';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
// import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

import { register } from 'redux/auth/operation';
// import { yellow } from '@mui/material/colors';

const schema = object().shape({
  username: string()
    .min(1)
    .max(16, 'Must be less than 16 characters')
    .required('Pease enter name'),
  email: string().email('Invalid email address').required('Pease enter email'),
  password: string()
    .min(6, 'Password should be min 6 characters')
    .max(16, 'Password should be max 16 characters')
    .matches(
      /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      'Password too light (A-a, 1-9)'
    )
    .required('Pease enter password'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      dispatch(register(values));
      // alert(JSON.stringify(values, null, 2));
    }, 500);
  };
  // const handleChange = e => {
  //   const dataPassword = e.target.password.values;
  // if (dataPassword.length > 6 && dataPassword.length < 10) {
  //   helperText = 'Your password is little secure';
  //   sx={{color:"white"}}

  // }

  // const handleChange = (values) => {
  //   if( errors.password && values.password.length > Number(6) && values.password.length < Number(16) ){
  //           sx ={{color: "yellow" }}
  //           }
  // }
  // const { errors, touched, values, handleSubmit, handleChange } = formik;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleOnSubmit}
    >
      {({
        values,
        submitForm,
        // resetForm,
        isSubmitting,
        touched,
        errors,
        // onChange,
      }) => (
        <Form autoComplete="off">
          <Field
            component={TextField}
            fullWidth
            id="outlined"
            name="username"
            type="text"
            placeholder="Name"
            multiline
            // color="secondary"

            InputProps={{
              style: {
                fontFamily: 'Poppins',
                fontSize: 14,
                lineHeight: 1.39,
                marginBottom: '12px',

                opacity: 0.8,

                flex: 'none',
                order: 2,
                flexGrow: 0,

                borderRadius: '6px',
                // border: '1px solid #fafafa',
                //  border={touched.username && errors.username && "1px solid red"},
                // {Boolean(errors.username) &&  (border: '1px solid #fafafa')}
                // border={(Boolean(errors.username)) && "1px solid red"},
                // onBlur= ({Boolean(touched.username) && Boolean(errors.username) ? sx={..., border: '1px solid  #E74A3B'} : border:`1px solid #3CBC81` })
                // border:
                //   Boolean(touched.username) && Boolean(errors.username)
                //     ? '1px solid #E74A3B'
                //     : `1px solid #3CBC81`,
                '@media (min-width: 768px)': {
                  mb: '24px',
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIcon
                    style={{
                      color: '#fafafa',
                      opacity: 0.8,
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                    }}
                  />
                </InputAdornment>
              ),
              // border: '1px solid #E74A3B'
              //     : `1px solid #3CBC81`,
              endAdornment: (
                <InputAdornment position="end" style={{ outline: 'none' }}>
                  {errors.username && touched.username && (
                    <CancelSharpIcon
                      style={{ color: '#E74A3B' }}
                      fontSize="default"
                    ></CancelSharpIcon>
                  )}
                  {!errors.username && touched.username && (
                    <CheckCircleSharpIcon
                      style={{ color: '#3CBC81' }}
                      // size=""
                      fontSize="default"
                    ></CheckCircleSharpIcon>
                  )}
                </InputAdornment>
              ),
            }}
            // value={values.username}
            // onChange={handleChange}
            // error={touched.username && Boolean(errors.username)}
            // error={touched['username'] && !!errors['username']}
            // helperText={touched['username'] && errors['username']}
            // helperText={touched.username && errors.username}
          />

          {/* border=
        {touched.email &&
          '2px solid #FFFFFF)' &&
          (errors.email ? '1px solid #E74A3B' : `1px solid #3CBC81`)} */}
          <Field
            component={TextField}
            fullWidth
            id="outlined"
            name="email"
            type="email"
            placeholder="Email"
            multiline
            style={{ color: 'white' }}
            // sx={{
            //   fontFamily: 'Poppins',
            //   fontSize: 14,
            //   lineHeight: 1.39,
            //   mb: '12px',
            //   // height: '45px',
            //   // p: '12px 0px',
            //   // backgroundColor: '#8BAA36',
            //   color: 'white',
            //   opacity: 0.8,

            //   flex: 'none',
            //   order: 2,
            //   flexGrow: 0,

            //   borderRadius: '6px',
            //   border: '1px solid #fafafa',
            //   '&:hover': {
            //     color: '#fff',
            //     border: '2px solid #fff',
            //   },
            // }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon
                    style={{
                      color: '#fafafa',
                      opacity: 0.8,
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                    }}
                  />
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
            id="outlined"
            name="password"
            placeholder="Password"
            type="password"
            multiline
            // onChange={handleChange}
            sx={{}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon
                    style={{
                      color: '#FAFAFA',
                      opacity: 0.8,
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                    }}
                  />
                </InputAdornment>
              ),
            }}
            // value={values.password}
            // onChange={handleChange}
            // error={touched.password && Boolean(errors.password)}
            // helperText={touched.password && errors.password}
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            sx={{
              fontFamily: 'Poppins',
              width: '100%',
              height: '45px',
              mt: '28px',

              textTransform: 'none',
              fontSize: 16,
              lineHeight: 18,

              backgroundColor: '#8BAA36',
              color: '#FAFAFA',
              borderRadius: '6px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              [`&:hover`]: {
                backgroundColor: '#8BAA36',
                color: '#fff',
              },

              '@media (min-width: 768px)': {
                width: '100%',
                height: '59px',
                borderRadius: '6px',
                backgroundColor: ' #8BAA36;',
                mt: '50px',
              },
            }}
            variant="contained"
            fullWidth
            type="submit"
            // disabled={isSubmitting}
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
