import CloseIcon from '@mui/icons-material/Close';
import {
  MotivationBox,
  CloseBtn,
  TextAccent,
  MotivationText,
} from './MotivationContent.styled';

export const Motivation = ({ onClose }) => {
  return (
    <MotivationBox>
      <MotivationText>
        <TextAccent>Wow!</TextAccent> You have been using the application for
        <TextAccent>100</TextAccent> days!
      </MotivationText>
      <CloseBtn onClick={onClose}>
        <CloseIcon />
      </CloseBtn>
    </MotivationBox>
  );
};
