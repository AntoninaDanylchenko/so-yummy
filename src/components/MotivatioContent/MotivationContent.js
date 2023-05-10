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
          <TextAccent>Wow!</TextAccent> You have added the first recipe to your
          favorites!
        </MotivationText>
        <CloseBtn onClick={onClose}>
          <CloseIcon sx={{ color: 'white' }} />
        </CloseBtn>
      </Content>
    </MotivationBox>
  );
};
