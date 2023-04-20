import { createTheme } from '@mui/material';

const themeBreakPoints = createTheme({
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 768,
      desktop: 1440,
    },
  },
});

export default themeBreakPoints;
