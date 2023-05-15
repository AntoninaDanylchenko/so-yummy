import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addFavoriteOp,
  deleteFavoriteOp,
  getFavoriteOp,
} from 'redux/favorite/operation';
import { getFavorite } from 'redux/favorite/selector';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { Motivation } from 'components/MotivationContent/MotivationContent';

import {
  Button,
  Container,
  Description,
  Time,
  Title,
} from './RecipePageHero.styled';

import { ReactComponent as Clock } from '../../../images/icon/clock.svg';
import { MotivationModalText } from 'components/MotivationContent/MotivationModalText';

export const RecipePageHero = ({ recipe, title, description, time }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const favorite = useSelector(getFavorite);

  useEffect(() => {
    dispatch(getFavoriteOp());
  }, [dispatch]);

  const handleAddRecipeToFavorite = () => {
    dispatch(addFavoriteOp(recipe._id));
    showMotivation();
  };

  const handleRemoveRecipeFromFavorite = () => {
    const recipeToRemove = favorite.find(fav => fav._id === recipe._id);
    dispatch(deleteFavoriteOp(recipeToRemove._id));
  };

  const showMotivation = () => {
    if (favorite.length === 0 || favorite.length === 10) {
      setShowModal(true);
    }
    return;
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
            <Motivation onClose={() => setShowModal(false)}>
              {favorite?.some(fav => fav.langth === 0)
                ? MotivationModalText.addFirstFavorit
                : MotivationModalText.addTenFavorit}
            </Motivation>
          </ModalWindow>
        )}
      </Container>
    </>
  );
};
