import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  RecipeItem,
  RecipeTitle,
  RecipeImg,
} from './RecipeСategotyItem.styled';

export const RecipeСategotyItem = ({ recipe: { id, title, preview } }) => {
  //   const dispatch = useDispatch();
  //   const { id, title, preview } = recipeItem;

  return (
    <RecipeItem>
      <Link to={`/recipe/${id}`}>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeImg src={preview} alt={title} />
      </Link>
    </RecipeItem>
  );
};

RecipeСategotyItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
};
