import { useDispatch, useSelector } from 'react-redux';

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

import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList,
} from 'redux/shoppingList/operations';
import { selectShoppingList } from 'redux/shoppingList/selectors';

export const RecipeInngredientsList = ({ ingredients }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  const handleOnChange = (productId, measure) => {

    const ingredient = { productId, measure };
    console.log("ingredient:", ingredient);
    
    const isIngredientsInList = products.some(
      p => p.productId === productId && p.measure.some(m => m === measure)
    );

    if (isIngredientsInList) {
      dispatch(removeIngredientFromShoppingList(ingredient));
    } else {
      dispatch(addIngredientToShoppingList(ingredient));
    }
  };

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
              <Image
                src={ingredient.thb}
                alt={ingredient.ttl}
                loading="lazy"
              ></Image>
              <Title>{ingredient.ttl}</Title>
            </Wrapper1>

            <Wrapper2>
              <Amount>{ingredient.measure}</Amount>

              <Checkbox
                type="checkbox"
                checked={products.some(p => p.productId === ingredient._id)}
                onChange={() =>
                  handleOnChange(ingredient._id, ingredient.measure)
                }
              ></Checkbox>
            </Wrapper2>
          </Item>
        ))}
      </List>
    </Container>
  );
};