import { RecipeItem, RecipeTitle, RecipeImg } from './PreviewCategories.styled';

export const PreviewCategories = ({ recipes, category }) => {
  return (
    <ul>
      {recipes.map(({ id, title, preview, categoryRecipe }) => {
        return categoryRecipe === category ? (
          <RecipeItem to={`/recipe/${id}}`} key={id}>
            <RecipeTitle>{title}</RecipeTitle>
            <RecipeImg src={preview} alt={title} />
          </RecipeItem>
        ) : null;
      })}
    </ul>
  );
};
