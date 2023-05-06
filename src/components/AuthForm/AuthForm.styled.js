import { styled } from '@mui/material/styles';
import { TextField as MuiTextField } from 'formik-mui';
import { Button } from '@mui/material';

export const TextField = styled(MuiTextField)({
  '& .MuiInputBase-root': {
    fontFamily: 'Poppins',
    fontSize: '14px',
    height: '45px',

    marginBottom: '12px',
    py: '12px',
    opacity: 0.8,
    flex: 'none',
    order: 2,

    color: '#fafafa',
    flexGrow: 0,
    borderRadius: '6px',

    '& fieldset': { border: 'none' },
    '@media (min-width: 768px)': {
      height: '59px',
      marginBottom: '24px',
      fontSize: '18px',
    },
    '&:hover': {
      border: '2px solid #FAFAFA',
    },
    '&.Mui-focused': {
      border: '2px solid #FAFAFA',
    },
  },
});

export const ButtonS = styled(Button)({
  fontFamily: 'Poppins',
  width: '100%',
  height: '45px',
  mt: '16px',

  textTransform: 'none',
  fontSize: 16,

  backgroundColor: '#8BAA36',
  color: '#FAFAFA',
  borderRadius: '6px',
  flex: 'none',
  order: 0,
  flexGrow: 0,
});
