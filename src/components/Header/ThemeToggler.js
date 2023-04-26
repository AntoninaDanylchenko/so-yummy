import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { useDispatch } from 'react-redux';
import { switchTheme } from '../../redux/theme/operations';

export const Toggle = styled(props => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 60,
  height: 26,
  padding: 0,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(36px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor:
          theme.palette.mode === 'light' ? 'rgba(139, 170, 54, 1)' : '#E9E9EA',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      boxShadow: 'inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)',
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    boxShadow: 'inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)',
    backgroundColor:
      theme.palette.mode === 'light' ? '#E9E9EA' : 'rgba(139, 170, 54, 1)',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const ThemeToggler = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FormControlLabel
        onClick={() => dispatch(switchTheme())}
        control={<Toggle sx={{ m: 1 }} defaultChecked />}
      />
    </>
  );
};
export { ThemeToggler };
