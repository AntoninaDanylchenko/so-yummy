import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import {
  MotivationBox,
  CloseBtn,
  TextAccent,
  MotivationText,
  Content,
} from './MotivationContent.styled';
import { selectOwnData } from 'redux/addRecipe/selectors';

import { getOwnUserData } from 'redux/addRecipe/operations';
import { useEffect } from 'react';

const MotivationModalText = {
  textAccent: 'Wow!',
  addFirstFavorit: 'You have added the first recipe to your favorites!',
  addTenFavorit: 'You have added 10 recipes to your favorites!',
  createFirstSL: 'You have created your first shopping list!',
  usingAppDays: 'You have been using the application for 100 days!',
};

export const Motivation = ({ onClose }) => {
  const dispatch = useDispatch();
  const selectData = useSelector(selectOwnData);
  useEffect(() => {
    dispatch(getOwnUserData(selectData));
  }, [dispatch, selectData]);

  return (
    <MotivationBox>
      <Content>
        <MotivationText>
          <TextAccent>{MotivationModalText.textAccent}</TextAccent>
          {MotivationModalText.addFirstFavorit}
        </MotivationText>
        <CloseBtn onClick={onClose}>
          <CloseIcon sx={{ color: 'white' }} />
        </CloseBtn>
      </Content>
    </MotivationBox>
  );
};
