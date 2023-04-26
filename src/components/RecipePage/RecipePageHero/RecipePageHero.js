// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { addFavoriteOp, deleteFavoriteOp, getFavoriteOp } from 'redux/favorite/operation';

import {
  Button,
  Container,
  Description,
  Time,
  Title,
} from './RecipePageHero.styled';
// import { getFavorite } from 'redux/favorite/selector';

export const RecipePageHero = ({ recipe, title, description, time }) => {
  console.log(recipe._id);

  // const dispatch = useDispatch();
  // const favorite = useSelector(getFavorite());
  

  // useEffect(() => {
  //   dispatch(getFavoriteOp());
  // }, [dispatch]);

  // const handleAddRecipeToFavorite = () => {
  //   dispatch(addFavoriteOp({ recipeId: recipe._id }));
  // };

  // const handleRemoveRecipeFromFavorite = () => {
  //   dispatch(deleteFavoriteOp({ recipeId: recipe._id }));
  // };

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {/* {favorite !== null && favorite !== undefined && favorite ? ( */}
          <Button type="button" >
            Add to favorite
          </Button>
        {/* ) : ( */}
          {/* <Button type="button" >
            Remove from favorite
          </Button> */}
        {/* )} */}

        <Time>{time} min</Time>
      </Container>
    </>
  );
};
