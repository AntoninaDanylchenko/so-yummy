import {
  Section,
  Container,
  Title,
  Wrap,
  SideWrap,
} from './AddRecipePage.styled';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import { FollowUs } from 'components/FollowUs/FollowUs';

const AddRecipePage = () => {
  return (
    <Container>
      <Section>
        <Title>Add recipe</Title>
        <Wrap>
          <AddRecipeForm />
          <SideWrap>
            <FollowUs />
            <PopularRecipe />
          </SideWrap>
        </Wrap>
      </Section>
    </Container>
  );
};

export default AddRecipePage;
