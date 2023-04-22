// import React from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, TextField } from '@mui/material';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

const schema = object().shape({
  email: string().email().required('Pease enter email'),
  password: string().required('Pease enter password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, formikHelpers) => {
      console.log(values);

      dispatch(logIn(values));

      formikHelpers.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
          Sign In
        </Button>
      </form>
    </div>
  );
};
