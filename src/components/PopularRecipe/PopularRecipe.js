import { useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material/styles';
import { fetchRecipesPopular } from 'redux/popularRecipes/operations';
import { selectRecipesPopular } from 'redux/popularRecipes/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  Title,
  PopularList,
  PopularImage,
  PopularText,
  PopularSubtitle,
  PopularItem,
} from './PopularRecipe.styled';

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
      <Title>Popular recipe</Title>
      <PopularList>
        {recipes?.map(({ id, title, preview, desc }) => (
          <PopularItem to={`/recipe/${id}`} key={id}>
            <PopularImage src={preview} alt={title} />
            <div>
              <PopularSubtitle>{title}</PopularSubtitle>
              <PopularText>{desc}</PopularText>
            </div>
          </PopularItem>
        ))}
      </PopularList>
    </div>
  );
};
