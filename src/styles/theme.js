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

  shadows: [
    '0px 4px 48px rgba(0, 0, 0, 0.1)',
    '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
    '0px 4px 4px rgba(135, 135, 135, 0.2)',
    '0px 4px 4px rgba(0, 0, 0, 0.25',
  ],

  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  device: {
    mobile: '(min-width: 375px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1440px)',
  },

  breakpoints: {
    values: {
      mobile: 375,
      tablet: 768,
      desktop: 1440,
    },
  },
});

export const lightTheme = createTheme(defaultTheme, {
  //white
  primary: {
    userBg: '#FAFAFA',
    selectBg: '#FAFAFA',
    textFooter: '#FAFAFA',
    background: '#FAFAFA',
  },
  secondary: {
    searchBg: '#FFFFFF',
    recipeBg: '#FFFFFF',
    recipePreparation: '#FFFFFF',
  },
  mainBg: '#ECECEC',
 
  // green
  accent: {
    mainBtnBg: '#8BAA36',
    subscribeBg: '#8BAA36',
    iconFollow: '#8BAA36',
  },
  btnBg: '#8AA936',
  ligthGreen: {
    logoFooter: '#EBF3D4',
    deleteBtnBg: '#EBF3D4',
    pagination: '#EBF3D4',
    ingredientBg: '#EBF3D4',
  },
  inputSuccess: '#3CBC81',

  // grey
  secondaryText: '#BDBDBD',
  select: '#F5F5F5',
  borderInput: '#E0E0E0',
  linePopularRecipe: '#707070',
  recipeText: '#7E7E7E',
  checkbox: 'rgba(126, 126, 126, 0.5)',
  background: {
    userPhoto: '#D9D9D9',
    searchText: '#D9D9D9',
    placeholder: '#D9D9D9',
  },
  userFill: '#C4C4C4',
  pagination: '#656565',
  borderLine: '#E0E0E0',
  btnClose: '#1F242E',

  // black
  primaryText: {
    text: '#23262A',
    btn: '#23262A',
    recipe: '#23262A',
  },
  blackText: {
    text: '#3E4462',
    search: '#3E4462',
  },
  title: {
    text: '#22252A',
    userText: '#22252A',
    searchIcon: '#22252A',
    addBtnBg: '#22252A',
  },
  subtitle: '#001833',
  registerForm: '#2A2C36',
  input: {
    input: '#000000',
    inputNotActive: '#000000',
  },
  closeBtn: '#1F242E',
  borderIncrement: 'rgba(51, 51, 51, 0.3)',
  incrementNumber: '#333333',
  // red
  inputError: '#E74A3B',
});

export const darkTheme = createTheme(defaultTheme, {
  //white
  primary: {
    userBg: '#1E1F28',
    selectBg: '#8BAA36',
    textFooter: '#FAFAFA',
    background: '#2A2C36',
  },
  secondary: {
    searchBg: 'transparent',
    recipeBg: '#2A2C36',
    recipePreparation: '#FAFAFA',
  },
  mainBg: '#1E1F28',

  // green
  accent: {
    mainBtnBg: '#8BAA36',
    subscribeBg: '#1E1F28',
    iconFollow: '#FAFAFA',
  },
  btnBg: '#8AA936',
  ligthGreen: {
    logoFooter: '#EBF3D4',
    deleteBtnBg: '#1E1F28',
    pagination: '#8BAA36',
    ingredientBg: '#2A2C36',
  },
  inputSuccess: '#3CBC81',

  // grey
  secondaryText: 'rgba(250, 250, 250, 0.6)',
  select: 'transparent',
  borderInput: 'rgba(250, 250, 250, 0.2)',
  linePopularRecipe: '#707070',
  recipeText: 'rgba(250, 250, 250, 0.6)',
  checkbox: 'rgba(126, 126, 126, 0.5)',
  background: {
    userPhoto: '#D9D9D9',
    searchText: 'rgba(250, 250, 250, 0.5)',
    placeholder: 'transparent',
  },
  userFill: '#C4C4C4',
  pagination: 'rgba(250, 250, 250, 0.6)',
  borderLine: 'rgba(250, 250, 250, 0.3)',
  btnClose: '#FAFAFA',

  // black
  primaryText: {
    text: '#FAFAFA',
    btn: '#23262A',
    recipe: 'rgba(250, 250, 250, 0.6)',
  },
  blackText: {
    text: '#FAFAFA',
    search: 'rgba(250, 250, 250, 0.5)',
  },
  title: {
    text: '#FAFAFA',
    userText: '#22252A',
    searchIcon: '#FFFFFF',
    addBtnBg: '#8BAA36',
  },
  subtitle: '#FAFAFA',
  registerForm: '#2A2C36',
  input: {
    input: '#FAFAFA',
    inputNotActive: 'rgba(250, 250, 250, 0.6)',
  },
  closeBtn: '#FAFAFA',
  borderIncrement: '#FAFAFA',
  incrementNumber: '#FAFAFA',
  // red
  inputError: '#E74A3B',
});
