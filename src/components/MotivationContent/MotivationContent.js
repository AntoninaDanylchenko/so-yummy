import CloseIcon from '@mui/icons-material/Close';

import {
  MotivationBox,
  CloseBtn,
  TextAccent,
  MotivationText,
  Content,
} from './MotivationContent.styled';

export const Motivation = ({ onClose, children }) => {
  return (
    <MotivationBox>
      <Content>
        <MotivationText>
          <TextAccent>'Wow!'</TextAccent>
          {children}
        </MotivationText>
        <CloseBtn onClick={onClose}>
          <CloseIcon sx={{ color: 'white' }} />
        </CloseBtn>
      </Content>
    </MotivationBox>
  );
};
