import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { InputAdornment } from '@mui/material';

import { TextField, ButtonS } from '../AuthForm.styled';
import {
  MailOutlineIconS,
  LockOpenIconS,
  CheckCircleSharpIconS,
  CancelSharpIconS,
} from '../Icon.styled';

import { logIn } from 'redux/auth/operation';
import { schema } from '../../YupSchema/YupSchemaSignin';
import { selectIsLoading } from '../../../redux/auth/selector';
import { Loader } from 'components/Loader/Loader';

const initialValues = {
  email: '',
  password: '',
};

export const SigninForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleOnSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    dispatch(logIn(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleOnSubmit}
    >
      {({ touched, errors, handleBlur }) => (
        <Form autoComplete="off">
          <Field
            component={TextField}
            fullWidth
            onBlur={handleBlur}
            // id="outlined-controlled"
            name="email"
            type="email"
            placeholder="Email"
            variant="outlined"
            autoComplete="off"
            InputProps={{
              sx: {
                // -webkit-autofill,
                // -webkit-autofill: focus {
                //     transition: backgroundColor 600000s 0s, color 600000s 0s;
                // }
                // [data-autocompleted] {
                //     backgroundColor: transparent !important,
                // }

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
          <Field
            component={TextField}
            fullWidth
            onBlur={handleBlur}
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
                  {!errors.password && touched.password && (
                    <CheckCircleSharpIconS />
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
            Sign in
          </ButtonS>
        </Form>
      )}
    </Formik>
  );
};
