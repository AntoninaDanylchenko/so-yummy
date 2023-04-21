import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
  fonts: {
    Poppins: "'Poppins', sans-serif",
  },

  fontSizes: [
    '8px', // 0
    '10px', // 1
    '12px', // 2
    '14px', // 3
    '16px', // 4
    '18px', // 5
    '20px', // 6
    '24px', // 7
    '28px', // 8
    '32px', // 9
    '44px', // 10
    '60px', // 11
    '72px', // 12
    '100px', // 13
  ],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  ///////// 0      1      2       3      4        5         6
  radii: ['4px', '6px', '8px', '18px', '26px', '30px', '24px 44px'],

  shadows: {
    form: '0px 4px 48px rgba(0, 0, 0, 0.1)', //and modal
    select: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
    pagination: '0px 4px 4px rgba(135, 135, 135, 0.2)',
  },

  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  //   device: {
  //     mobile: '(min-width: 375px)',
  //     tablet: '(min-width: 768px)',
  //     desktop: '(min-width: 1440px)',
  //   },

  breakpoints: {
    values: {
      mobile: 375,
      tablet: 768,
      desktop: 1440,
    },
  },
});

export const lightTheme = createTheme(defaultTheme, {
  colors: {
    //white
    primary: {
      userBackground: '#FAFAFA',
      selectBackground: '#FAFAFA',
      textFooter: '#FAFAFA',
      background: '#FAFAFA',
    },
  },
});

export const darkTheme = createTheme(defaultTheme, {
  colors: {
    //white
    primary: {
      userBackground: '#1E1F28',
      selectBackground: '#8BAA36',
      textFooter: '#FAFAFA',
      background: '#2A2C36',
    },
  },
});
