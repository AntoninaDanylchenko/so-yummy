import { object, string } from 'yup';

export const schema = object().shape({
  email: string()
    .email('Invalid email address')
    .lowercase()
    .required('Please enter email')
    .trim(),
  password: string()
    // .min(6, 'Password should be min 6 characters')
    // .max(16, 'Password should be max 16 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
    //   'Password must exist (A-a, 1-9)'
    // )
    .required('Please enter password')
    .trim(),
});
