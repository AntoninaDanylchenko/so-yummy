import { object, string } from 'yup';

export const schema = object().shape({
  username: string()
    .min(1)
    .max(16, 'Must be less than 16 characters')
    .required('Please enter name')
    .trim(),
  email: string()
    .email('Invalid email')
    .lowercase()
    .matches(/.(com|net)$/, 'Email must end with .com or .net')
    .required('Email is required')
    .trim(),
  password: string()
    .min(6, 'Password should be min 6 characters')
    .max(16, 'Password should be max 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      'Password must exist (A-a, 1-9)'
    )
    .required('Please enter password')
    .trim(),
});
