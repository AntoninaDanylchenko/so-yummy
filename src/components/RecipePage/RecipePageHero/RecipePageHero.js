import {
  Button,
  Container,
  Description,
  Time,
  Title,
} from './RecipePageHero.styled';

export const RecipePageHero = () => {
  return (
    <Container>
      <Title>Recipe title</Title>
      <Description>This is description of recipe</Description>
      <Button type="button">Add to favorite recipes</Button>
      <Time>...min</Time>
    </Container>
  );
};
