import { toggleTheme } from '../../redux/theme/themeSlice';

export const switchTheme = () => dispatch => {
  const isDarkMode = !!JSON.parse(localStorage.getItem('darkMode'));
  localStorage.setItem('darkMode', !isDarkMode);
  dispatch(toggleTheme());
};
