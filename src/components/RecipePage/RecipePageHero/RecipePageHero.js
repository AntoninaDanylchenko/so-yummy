import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addFavoriteOp,
  deleteFavoriteOp,
  getFavoriteOp,
} from 'redux/favorite/operation';
import { getFavorite } from 'redux/favorite/selector';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { Motivation } from 'components/MotivatioContent/MotivationContent';
import {
  Button,
  Container,
  Description,
  Time,
  Title,
} from './RecipePageHero.styled';

import { ReactComponent as Clock } from '../../../images/icon/clock.svg';

export const RecipePageHero = ({ recipe, title, description, time }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const favorite = useSelector(getFavorite);

  useEffect(() => {
    dispatch(getFavoriteOp());
  }, [dispatch]);

  const handleAddRecipeToFavorite = () => {
    dispatch(addFavoriteOp(recipe._id));
    setShowModal(true);
  };

  const handleRemoveRecipeFromFavorite = () => {
    const recipeToRemove = favorite.find(fav => fav._id === recipe._id);
    dispatch(deleteFavoriteOp(recipeToRemove._id));
  };

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {favorite?.some(fav => fav._id === recipe._id) ? (
          <Button type="button" onClick={handleRemoveRecipeFromFavorite}>
            Remove from favorite
          </Button>
        ) : (
          <Button type="button" onClick={handleAddRecipeToFavorite}>
            Add to favorite
          </Button>
        )}
        <Time>
          <Clock />
          {time} min
        </Time>
        {showModal && (
          <ModalWindow onClose={() => setShowModal(false)}>
            <Motivation onClose={() => setShowModal(false)} />
          </ModalWindow>
        )}
      </Container>
    </>
  );
};
