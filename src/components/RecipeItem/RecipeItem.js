import { Link } from 'react-router-dom';

import {
  StyledItem,
  Card,
  PreviewImg,
  TitleWrapper,
  Title,
} from './RecipeItem.styled';

export function RecipeItem(recipe) {
  const { _id, preview, title } = recipe;
  return (
    <StyledItem key={_id}>
      <Link to={`/recipe/${_id}`}>
        <Card>
          <PreviewImg src={preview} alt={title} />
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
        </Card>
      </Link>
    </StyledItem>
  );
}
