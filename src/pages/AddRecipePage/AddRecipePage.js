import {
  Section,
  Container,
  Title,
  Wrap,
  SideWrap,
} from './AddRecipePage.styled';
import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';

const AddRecipePage = () => {
  return (
    <Container>
      <Section>
        <Title>Add recipe</Title>
        <Wrap>
          <AddRecipeForm />
          <SideWrap>
            <PopularRecipe />
          </SideWrap>
        </Wrap>
      </Section>
    </Container>
  );
};

export default AddRecipePage;
