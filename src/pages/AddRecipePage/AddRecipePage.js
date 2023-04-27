import {
  Section,
  Container,
  Title,
  Wrap,
  SideWrap,
} from './AddRecipePage.styled';
import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';

const AddRecipePage = () => {
  return (
    <Container>
      <Section>
        <Title>Add recipe</Title>
        <Wrap>
          <AddRecipeForm />
          <SideWrap></SideWrap>
        </Wrap>
      </Section>
    </Container>
  );
};

export default AddRecipePage;
