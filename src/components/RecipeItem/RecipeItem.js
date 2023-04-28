import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  StyledItem,
  Card,
  PrewievImg,
  TitleWrapper,
  Title,
} from './RecipeItem.styled';

export const RecipeItem = ({ recipe: { id, title, preview } }) => {
  return (
    <StyledItem key={id}>
      <Link to={`/recipe/${id}`}>
        <Card>
          <PrewievImg src={preview} alt={title} />
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
        </Card>
      </Link>
    </StyledItem>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
};
