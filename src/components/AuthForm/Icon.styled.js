import { styled } from '@mui/material/styles';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

export const PermIdentityIconS = styled(PermIdentityIcon)({
  fontSize: 20,
  opacity: 0.8,
  flex: 'none',
  order: 1,
  flexGrow: 0,
  '@media (min-width: 768px)': {
    fontSize: 28,
  },
});

export const MailOutlineIconS = styled(MailOutlineIcon)({
  fontSize: 20,
  opacity: 0.8,
  flex: 'none',
  order: 1,
  flexGrow: 0,
  '@media (min-width: 768px)': {
    fontSize: 28,
  },
});

export const LockOpenIconS = styled(LockOpenIcon)({
  fontSize: 20,
  opacity: 0.8,
  flex: 'none',
  order: 1,
  flexGrow: 0,
  '@media (min-width: 768px)': {
    fontSize: 28,
  },
});

// red icon - stop error
export const CancelSharpIconS = styled(CancelSharpIcon)({
  color: '#E74A3B',
  fontSize: 18,
  '@media (min-width: 768px)': {
    fontSize: 24,
  },
});

// green icon - accept
export const CheckCircleSharpIconS = styled(CheckCircleSharpIcon)({
  color: '#3CBC81',
  fontSize: 18,
  '@media (min-width: 768px)': {
    fontSize: 24,
  },
});

// yellow icon - warning is low password;
export const ErrorRoundedIconS = styled(ErrorRoundedIcon)({
  color: '#F6C23E',
  fontSize: 18,
  '@media (min-width: 768px)': {
    fontSize: 24,
  },
});
