import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material/styles';

import { RecipesList } from './PreviewCategories.styled';
import { RecipeItem } from '../RecipeItem/RecipeItem';

export const PreviewCategories = ({ category, recipes }) => {
  const theme = useTheme();

  const isTablet = useMediaQuery({
    query: `(${theme.device.tablet} and (max-width: 1439px))`,
  });
  const isDesktop = useMediaQuery({ query: theme.device.desktop });

  let numberOfRecipes;
  if (isDesktop) {
    numberOfRecipes = 4;
  } else if (isTablet) {
    numberOfRecipes = 2;
  } else {
    numberOfRecipes = 1;
  }

  return (
    <RecipesList>
      {recipes
        ?.filter(recipe => recipe.categoryRecipe === category)
        .slice(0, numberOfRecipes)
        .map(recipe => (
          <RecipeItem key={recipe._id} {...recipe} />
        ))}
    </RecipesList>
  );
};
