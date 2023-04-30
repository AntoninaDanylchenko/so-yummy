// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Form, Field } from 'formik';
// import { Button, TextField } from '@mui/material';
// import styled from '@emotion/styled';

// const StyledTextField = styled(Field)`
//   & .Mui-disabled .MuiOutlinedInput-notchedOutline (
//   border-color:orange;
// ) & {
//     margin-bottom: 12px;
//   }
// `;

// border:
// normal      color: '#FFFFFF';
// hover state      color: '#FFFFFF';
// text: color: #22252A;

// error state      backgr: #E74A3
// correct state    color: #3CBC81
// warning state     color: #F6C23E;
//
//
export const FormFormik = styled(Form)`
  font-family: 'Poppins';
  /* display: grid;
  grid-template-columns: 1fr;
  row-gap: 12px; */
  /* margin-left: 20px;
  margin-right: 20px; */
  /* background-color: transparent; */

  /* row-gap: 12px;
  margin-bottom: 28px; */

  @media ${p => p.theme.device.tablet} {
    /* row-gap: 24px;
  margin-bottom: 50px; */
  }
`;

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: 'green',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'green',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'red',
//     },
//     '&:hover fieldset': {
//       borderColor: 'yellow',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'green',
//     },
//   },
// });

// &.muiinputbase-input: {
//   border: '2px solid yellow';
// }
// '& .muioutlinedinput-root': {
//   '& fieldset': {
//     bordercolor: 'yellow';
//   }
// }
export const InputFormik = styled(Field)`
  /* font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.39;
  letter-spacing: -0.02em; */
  /* mb: '12px'; */
  /* width: 100%; */
  /* pl: '40px'; */
  /* padding-top: 12px;
  padding-bottom: 12px; */
  /* margin-bottom: 12px; */

  /* color: #fafafa;
  background-color: transparent;
  opacity: 0.8;

  flex: none;
  order: 2;
  flex-grow: 0;

  border: 1px solid #fafafa;
  border-radius: 6px;
  flex: none;
  order: 1;
  flex-grow: 0;
  &:focus {
    border: 2px solid #fff;
  } */
  /* &:focus,
  :active {
    border: 2px solid #fff;
    color: #fff;
  } */

  /* @media (${p => p.theme.device.tablet}) {
    font-size: 18px;
    line-height: 27px;

    padding-left: 50px;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 24px;
  } */
`;
export const ErrorMessage = styled.div`
  color: #e74a3b;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  /* margin-bottom: 24px;
  margin-left: 15px; */
  @media (${p => p.theme.device.tablet}) {
    /* margin-left: 33px; */
  }
`;

export const ApproveMessage = styled.div`
  color: #3cbc81;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  /* margin-bottom: 24px;
  margin-left: 15px; */
  @media (${p => p.theme.device.tablet}) {
    /* margin-left: 33px; */
  }
`;

export const IconInput = styled.div`
  color: #fafafa;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  /* margin-bottom: 24px;
  margin-left: 15px; */
  @media (${p => p.theme.device.tablet}) {
    /* margin-left: 33px; */
  }
`;

export const ButtonFormik = styled(Button)`
  /* 
              fontFamily: 'Poppins',
              width: '100%',
              height: '45px',

              textTransform: 'none',
              fontSize: 16,
              lineHeight: 18,

              backgroundColor: '#8BAA36',
              color: '#FAFAFA',
              borderRadius: '6px',
              flex: 'none',
              order: 0,
              flexGrow: 0, */

  /* font-family: 'Poppins'; */
  /* display: flex; */
  /* align-items: center;
  text-align: center; */

  /* padding-top: 12px */
  /* margin-top: 16px;
  width: 100%;
  height: 45px; */

  /* gap: 8px; */
  /* text-transform: none;
  font-size: 16px;
  line-height: 18px;

  color: #fafafa;
  background: #8baa36;
  border-radius: 6px;
  flex: none;
  order: 0;
  flex-grow: 0;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover,
  :focus {
    background: #8baa36;
  }
  @media (${p => p.theme.device.tablet}) {
    height: 56px;
    margin-top: 26px; */
  /* padding: 19px 0x; */
  /* padding: 20.5px 170px; */
  /* } */
`;

export const IconAtention = styled.svg`
  position: relative;
  top: 13.5px;
  right: 14px;

  width: 18px;
  height: 18px;
  content: '';

  opacity: 0.8;
  flex: none;
  order: 0;
  flex-grow: 0;

  border: 1px solid #fafafa;
  &:hover,
  :focus {
    border: 2px solid #fff;
  }
  @media (${p => p.theme.device.tablet}) {
    top: 17.5px;
    right: 18px;
    width: 24px;
    height: 24px;
  }
`;

export const IconDesc = styled.svg`
  position: absolute;
  top: 13.5px;
  left: 14px;

  width: 18px;
  height: 18px;
  content: '';

  opacity: 0.8;
  flex: none;
  order: 0;
  flex-grow: 0;

  border: 1px solid #fafafa;
  &:hover {
    border: 1px solid #fff;
  }
  @media (${p => p.theme.device.tablet}) {
    top: 17.5px;
    left: 18px;
    width: 24px;
    height: 24px;
  }
`;
