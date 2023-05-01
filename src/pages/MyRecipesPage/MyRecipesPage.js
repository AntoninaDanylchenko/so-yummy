import Title from '../../components/Title/Title';
import { Toaster } from 'react-hot-toast';
import { getMyRecipes } from 'redux/myRecipes/selector';
import { getMyRecipesOp } from 'redux/myRecipes/operation';
import PaginationComponent from 'components/PaginationComponent/PaginationComponent';
import {
  Container
} from '../AddRecipePage/AddRecipePage.styled';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const MyRecipesPage = () => {
  const theme = useTheme()
  return (
    <Container>
      <Title title="My recipes" />
      <Toaster />
      <PaginationComponent
        getData={getMyRecipes}
        getDataOp={getMyRecipesOp}
        ListComponent={styled.ul``}
        CardComponent={RecipeCard}
        buttonColorBg={theme.myRecipe}
      />
    </Container>
  );
};
export default MyRecipesPage;
