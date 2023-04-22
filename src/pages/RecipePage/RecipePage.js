import { RecipePageHero } from 'components/RecipePage/RecipePageHero/RecipePageHero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from 'redux/recipe/operations';
import { selectRecipeById } from 'redux/recipe/selectors';

const RecipePage = () => {
  const dispatch = useDispatch();

  const id = '640cd5ac2d9fecf12e8897fc';

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch]);

  const recipe = useSelector(selectRecipeById);
  console.log(recipe);
  
  const { title, description, time } = recipe.recipe;

  return (
    <RecipePageHero
      title={title}
      description={description}
      time={time}
    ></RecipePageHero>
  );
};

export default RecipePage;
