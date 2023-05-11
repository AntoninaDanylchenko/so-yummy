import { AddButton } from '../AddRecipeForm.styled';
import { Box, Content, Text, ButtonBox } from './AcceptModal.styled';

export const ResetImage = ({ onClose, onResetImage }) => {
  return (
    <Box>
      <Content>
        <Text>Are you sure you want to change the image?</Text>
        <ButtonBox>
          <AddButton onClick={onResetImage}>Continue</AddButton>
          <AddButton onClick={onClose}>Cancel</AddButton>
        </ButtonBox>
      </Content>
    </Box>
  );
};
