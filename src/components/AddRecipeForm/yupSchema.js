import * as yup from 'yup';

export const yupSchema = yup.object().shape({
  image: yup.string().required('Add picture'),
  title: yup.string().typeError('Write a string').required('Enter title'),
  description: yup
    .string()
    .typeError('Write a string')
    .required('Enter about recipe'),
  cookingTime: yup.string(),
  category: yup.string(),
  ingredients: yup
    .array()
    .of(
      yup.object({
        unitNumber: yup.string().required('Enter number'),
        name: yup.string().required('Enter ingredients'),
        unitValue: yup.string(),
        id: yup.string(),
      })
    )
    .required('Ingredients is required'),
  preparation: yup.string().required('Enter recipe'),
});
