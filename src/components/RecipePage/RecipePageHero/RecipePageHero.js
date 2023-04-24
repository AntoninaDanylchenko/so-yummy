import {
  Button,
  Container,
  Description,
  Time,
  Title,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ recipe }) => {
  const { title, description, time } = recipe.recipe;

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <Button type="button">Add to favorite</Button>

        <Time>{time} min</Time>
      </Container>
    </>
  );
};
