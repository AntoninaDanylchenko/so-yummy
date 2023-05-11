import CloseIcon from '@mui/icons-material/Close';

import {
  MotivationBox,
  CloseBtn,
  TextAccent,
  MotivationText,
  Content,
} from './MotivationContent.styled';

export const Motivation = ({ onClose }) => {
  return (
    <MotivationBox>
      <Content>
        <MotivationText>
          <TextAccent>Wow!</TextAccent>You have added the first recipe to your
          favorites!
        </MotivationText>
        <CloseBtn onClick={onClose}>
          <CloseIcon sx={{ color: 'white' }} />
        </CloseBtn>
      </Content>
    </MotivationBox>
  );
};

// Wow!
// You have been using the application for 100 days!
// You have added the first recipe to your favorites!
// You have added 10 recipes to your favorites!
// You have created your first shopping list!
