import { useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material/styles';
import { fetchRecipesPopular } from 'redux/popularRecipes/operations';
import { selectRecipesPopular } from 'redux/popularRecipes/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const PopularRecipe = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const isTablet = useMediaQuery({
    query: `(${theme.device.tablet} and (max-width: 1439px))`,
  });

  const getRecipes = useCallback(async () => {
    isTablet
      ? dispatch(fetchRecipesPopular(2))
      : dispatch(fetchRecipesPopular(4));
  }, [dispatch, isTablet]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const recipes = useSelector(selectRecipesPopular);

  return (
    <div>
      <h3>Popular recipe</h3>
      <ul>
        {recipes.map(({ id, title, preview, thumb, desc }) => (
          <li key={id}>
            <div>
              <img src={preview} alt={title} />
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
