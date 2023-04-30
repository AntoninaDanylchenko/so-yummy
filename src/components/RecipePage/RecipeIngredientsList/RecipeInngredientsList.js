import { useDispatch } from 'react-redux';

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
  fetchShoppingList,
} from 'redux/shoppingList/operations';
import { useState } from 'react';
import { store } from 'redux/store';

export const RecipeInngredientsList = ({ ingredients }) => {
  const dispatch = useDispatch();
  const [isCheck, setChek] = useState(false);

  const handleOnChange = (event, ingredientId, measure) => {
    const ingredient = { ingredientId, measure: [measure] };

    if (event.target.checked) {
      event.target.setAttribute('disabled', true);
      dispatch(addIngredientToShoppingList(ingredient)).then(() => {
        dispatch(fetchShoppingList()).then(() => {
          const data = store.getState();
          const products = data.shoppingList.items;
          const product = products[products.length - 1];
          event.target.setAttribute('id', product.id);
          event.target.removeAttribute('disabled');
        });
      });
      setChek(true);
      return;
    }
    if (!event.target.checked) {
      const prodId = event.target.getAttribute('id');
      dispatch(removeIngredientFromShoppingList(prodId));
      setChek(false);
      return;
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
                value={isCheck}
                onChange={event =>
                  handleOnChange(event, ingredient._id, ingredient.measure)
                }
              ></Checkbox>
            </Wrapper2>
          </Item>
        ))}
      </List>
    </Container>
  );
};
