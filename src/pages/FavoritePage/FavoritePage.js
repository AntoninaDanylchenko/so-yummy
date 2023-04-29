import FavoriteList from 'components/FavoriteList/FavoriteList';
import Title from '../../components/Title/Title'
import { Toaster } from 'react-hot-toast';
import {
  Container
} from '../AddRecipePage/AddRecipePage.styled';

const FavoritePage = () => {
  return (
    <Container >
      <Title title="Favorites" />
      <FavoriteList />
      <Toaster />
    </Container>
  )
};
export default FavoritePage;
