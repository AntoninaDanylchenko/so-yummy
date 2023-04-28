import { useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material/styles';
import { fetchRecipesMain } from 'redux/recipesMain/operations';
import { selectRecipesMain } from 'redux/recipesMain/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { RecipesList } from './PreviewCategories.styled';
import { RecipeItem } from '../RecipeItem/RecipeItem';

export const PreviewCategories = ({ category }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const isTablet = useMediaQuery({
    query: `(${theme.device.tablet} and (max-width: 1439px))`,
  });
  const isDesktop = useMediaQuery({ query: theme.device.desktop });
  const getRecipes = useCallback(async () => {
    const numberOfRecipes = () => {
      if (isDesktop) return 4;
      else if (isTablet) return 2;
      else return 1;
    };
    dispatch(fetchRecipesMain(numberOfRecipes()));
  }, [dispatch, isTablet, isDesktop]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const recipes = useSelector(selectRecipesMain);

  return (
    <RecipesList>
      {recipes?.map(recipe => {
        return recipe.categoryRecipe === category ? (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ) : null;
      })}
    </RecipesList>
  );
};
