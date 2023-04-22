import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, TextField } from '@mui/material';

import { register } from 'redux/auth/operation';

const schema = object().shape({
  username: string()
    .min(2, 'Must be more than 2 characters')
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

    //       values => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="username"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
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
