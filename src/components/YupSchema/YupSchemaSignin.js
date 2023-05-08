import { object, string } from 'yup';

export const schema = object().shape({
  email: string()
    .email('Invalid email')
    .lowercase()
    .matches(/(?:.*(\.com|\.net))$/, 'Email must end with .com or .net')
    .required('Email is required')
    .trim(),
  password: string().required('Please enter password').trim(),
});
