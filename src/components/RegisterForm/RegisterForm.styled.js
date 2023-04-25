import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormFormik = styled(Form)`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px;
  /* margin-left: 20px;
  margin-right: 20px; */
  background-color: red;
`;

export const InputFormik = styled(Field)`
  font-size: 14px;
  line-height: calc(21 / 14) px;
  max-width: 700px;

  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;

  border: 1px px solid #fafafa;
  border-radius: 6px;
  color: #fafafa;
`;
export const Button = styled.button``;
