import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const WrapperForm = styled.div`
  background: #fafafa;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 275px 0;
  text-align: center;
  margin: 0 auto;
  @media screen and (min-width: 450px) and (max-width: 1200px) {
    padding: 342px 0;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 214px 0;
  }
`;
export const Title = styled.h2`
  padding-top: 32px;
  margin-bottom: 14px;

  color: rgba(250, 250, 250, 1);
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.06em;
  line-height: 1;
  text-align: center;
  font-family: inherit;

  @media screen and (min-width: 768) and (max-width: 1199px) {
    font-size: 24px;
    line-height: 1.62;
    font-weight: 600;
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
    line-height: 1.36;
    font-weight: 600;
  }
`;

export const FormFormik = styled(Form)`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const InputFormik = styled(Field)`
  font-size: 14px;
  line-height: calc(21 / 14) px;
  max-width: 700px;

  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;

  background: #2a2c36;
  color: #fafafa;
`;
export const Button = styled.button``;
