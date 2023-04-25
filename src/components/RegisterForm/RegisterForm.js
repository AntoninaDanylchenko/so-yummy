import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, TextField } from '@mui/material';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { InputAdornment } from '@mui/material';

// import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
// import CancelSharpIcon from '@mui/icons-material/CancelSharp';
// import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

import { register } from 'redux/auth/operation';
// .min(2, 'Must be more than 2 characters')
const schema = object().shape({
  username: string()
    .max(32, 'Must be less than 32 characters')
    .required('Pease enter name'),
  email: string().email('Invalid email address').required('Pease enter email'),
  password: string()
    .min(6, 'Password should be min 6 characters')
    .max(128, 'Password should be max 128 characters')
    .matches(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/, 'Password too light')
    .required('Pease enter password'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, formikHelpers) => {
      console.log(values);
      dispatch(register(values));
      formikHelpers.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          placeholder="Name"
          multiline
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PermIdentityIcon />
              </InputAdornment>
            ),
          }}
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          placeholder="Email"
          multiline
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          multiline
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};
