import { AddButton } from '../AddRecipeForm.styled';
import { Box, Content, Text, ButtonBox } from './AcceptModal.styled';
import { Modal } from 'components/ModalWindows/ModalWindow';

export const ReplaseImage = ({ onClose }) => {
  return (
    <Modal>
      <Box>
        <Content>
          <Text>Are you sure you want to change the image?</Text>
          <ButtonBox>
            <AddButton onClick={() => console.log('yes')}>Continue</AddButton>
            <AddButton onClick={onClose}>Censel</AddButton>
          </ButtonBox>
        </Content>
      </Box>
    </Modal>
  );
};
