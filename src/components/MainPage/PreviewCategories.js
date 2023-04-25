import { RecipesList } from './PreviewCategories.styled';
import { RecipeСategotyItem } from '../RecipeСategotyItem/RecipeСategotyItem';
export const PreviewCategories = ({ recipes, category }) => {
  return (
    <RecipesList>
      {recipes.map(recipe => {
        return recipe.categoryRecipe === category ? (
          <RecipeСategotyItem key={recipe.id} recipe={recipe} />
        ) : null;
      })}
    </RecipesList>
  );
};
