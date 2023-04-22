import { useDispatch } from 'react-redux';
import { switchTheme } from '../../redux/theme/operations';

export const ThemeToggler = () => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(switchTheme())}>
      Switch
    </button>
  );
};
