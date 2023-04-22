import { useDispatch } from 'react-redux';
import { removeIngredientFromShoppingList } from 'redux/shoppingList/operations';
import {
  Item,
  PosterWrapper,
  PosterContainer,
  Poster,
  PosterTitle,
  CloseButton,
  MeasureWrapper,
  Measure,
  DelIcon,
} from './ListItem.styled';

export default function ListItem({ shoppingItem }) {
  const dispatch = useDispatch();
  const { ingredient, measure, id } = shoppingItem;
  const { desc, thb, ttl } = ingredient;

  return (
    <Item>
      <PosterWrapper>
        <PosterContainer>
          <Poster src={thb} alt={ttl} />
        </PosterContainer>
        <PosterTitle>{ttl}</PosterTitle>
      </PosterWrapper>
      <MeasureWrapper>
        <Measure>
          {measure[0]} {measure[1]}
        </Measure>
      </MeasureWrapper>
      <CloseButton
        aria-label="delete"
        onClick={() => {
          dispatch(removeIngredientFromShoppingList(id));
        }}
      >
        <DelIcon />
      </CloseButton>
    </Item>
  );
}
