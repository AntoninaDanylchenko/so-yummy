import Title from '../../components/Title/Title';
import { Toaster } from 'react-hot-toast';
import {
  Container
} from '../AddRecipePage/AddRecipePage.styled';
import MyRecipesList from '../../components/MyRecipesPage/MyRecipesList';

const MyRecipesPage = () => {
  return (
    <Container>
      <Title title="My recipes" />
      <MyRecipesList />
      <Toaster />
    </Container>
  );
};
export default MyRecipesPage;
