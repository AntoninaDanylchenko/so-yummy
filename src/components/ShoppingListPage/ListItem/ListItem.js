import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
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
} from './ListItem.styled';

export default function ListItem(shoppingItem) {
  const dispatch = useDispatch();
  const { ingredient, measure, id } = shoppingItem;
  // const {
  //   // desc,
  //   thb,
  //   ttl,
  // } = ingredient;

  return (
    <Item key={id}>
      <PosterWrapper>
        <PosterContainer>
          <Poster src={ingredient?.thb} alt={ingredient?.ttl} />
        </PosterContainer>
        <PosterTitle>{ingredient?.ttl}</PosterTitle>
      </PosterWrapper>
      <MeasureWrapper>
        {measure ? (
          <Measure>
            {measure[0]} {measure[1]}
          </Measure>
        ) : (
          <Measure></Measure>
        )}
      </MeasureWrapper>
      <CloseButton
        aria-label="delete"
        onClick={() => {
          dispatch(removeIngredientFromShoppingList(id));
        }}
      >
        <CloseIcon color="inherit" fontSize="inherit" />
      </CloseButton>
    </Item>
  );
}
