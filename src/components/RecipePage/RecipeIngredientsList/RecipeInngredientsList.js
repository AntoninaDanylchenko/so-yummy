import {
  Container,
  Box,
  TitleWrapper,
  Desc,
  List,
  Item,
  Wrapper1,
  Image,
  Title,
  Wrapper2,
  Amount,
  Checkbox,
} from './RecipeIngredientsList.styled';

export const RecipeInngredientsList = ({ ingredients }) => {


  return (
    <Container>
      <Box>
        <Desc>Ingredients</Desc>
        <TitleWrapper>
          <Desc>Number</Desc>
          <Desc>Add to list</Desc>
        </TitleWrapper>
      </Box>
      <List>
        {ingredients.map(ingredient => (
          <Item key={ingredient._id}>
            <Wrapper1>
              <Image src={ingredient.thb} alt={ingredient.ttl} loading="lazy"></Image>
              <Title>{ingredient.ttl}</Title>
            </Wrapper1>

            <Wrapper2>
              <Amount>{ingredient.measure}</Amount>
              <Checkbox type="checkbox"></Checkbox>
            </Wrapper2>
          </Item>
        ))}
      </List>
    </Container>
  );
};
