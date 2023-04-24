import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRecipeById } from 'redux/recipe/operations';
import { selectRecipeById } from 'redux/recipe/selectors';

import { RecipePageHero } from 'components/RecipePage/RecipePageHero/RecipePageHero';
import { RecipeInngredientsList } from 'components/RecipePage/RecipeIngredientsList/RecipeInngredientsList';
import { RecipePreparation } from 'components/RecipePage/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const recipe = useSelector(selectRecipeById);
  console.log(recipe);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      {recipe !== null && (
        <>
          <RecipePageHero recipe={recipe} />
          <RecipeInngredientsList ingredients={recipe.recipe.ingredients} />
          <RecipePreparation recipe={recipe} />
        </>
      )}
    </>
  );
};

export default RecipePage;
