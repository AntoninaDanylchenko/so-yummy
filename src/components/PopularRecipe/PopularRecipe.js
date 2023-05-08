import { useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material/styles';
import { fetchRecipesPopular } from 'redux/popularRecipes/operations';
import {
  selectRecipesPopular,
  selectIsLoading,
} from 'redux/popularRecipes/selectors';
import { useDispatch, useSelector } from 'react-redux';

import {
  Title,
  PopularList,
  PopularImage,
  PopularText,
  PopularSubtitle,
  PopularItem,
} from './PopularRecipe.styled';
import { Skeleton } from '@mui/material';

export const PopularRecipe = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                height={85}
                width={104}
                sx={{
                  borderRadius: 4,
                  boxShadow: 1,
                  mr: 2,
                  bgcolor: '#8BAA36',
                }}
              />
            ) : (
              <PopularImage src={preview} alt={title} />
            )}
            <div>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: '2rem' }}
                  width={200}
                />
              ) : (
                <PopularSubtitle>{title}</PopularSubtitle>
              )}
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: '1rem' }}
                  width={200}
                />
              ) : (
                <PopularText>{desc}</PopularText>
              )}
            </div>
          </PopularItem>
        ))}
      </PopularList>
    </div>
  );
};
