import { RecipePageHero } from 'components/RecipePage/RecipePageHero/RecipePageHero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRecipeById } from 'redux/recipe/operations';
import { selectRecipeById } from 'redux/recipe/selectors';

const RecipePage = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const recipe = useSelector(selectRecipeById);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [dispatch]);

  console.log(recipe);
  console.log(recipeId);

  return (
    <>
      {recipe !== null && (
        <RecipePageHero
          title={recipe.recipe.title}
          description={recipe.recipe.description}
          time={recipe.recipe.time}
        ></RecipePageHero>
      )}
    </>
  );
};

export default RecipePage;
