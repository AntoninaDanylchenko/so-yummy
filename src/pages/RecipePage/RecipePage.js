import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRecipeById } from 'redux/recipe/operations';
import { selectRecipeById } from 'redux/recipe/selectors';

import { Container } from '../../pages/MainPage/MainPage.styled';
import { RecipePageHero } from 'components/RecipePage/RecipePageHero/RecipePageHero';
import { RecipeInngredientsList } from 'components/RecipePage/RecipeIngredientsList/RecipeInngredientsList';
import { RecipePreparation } from 'components/RecipePage/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const recipe = useSelector(selectRecipeById);

  const { title, description, time, instructions, thumb, ingredients } =
    recipe?.data?.recipe || {};

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);

  return (
    <>
      {recipe !== null && (
        <>
          <RecipePageHero
            recipe={recipe.data.recipe}
            title={title}
            description={description}
            time={time}
          />
          <Container>
            <RecipeInngredientsList ingredients={ingredients} />
            <RecipePreparation
              instructions={instructions}
              title={title}
              thumb={thumb}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default RecipePage;
