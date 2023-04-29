import FavoriteList from 'components/FavoriteList/FavoriteList';
import Title from '../../components/Title/Title'
import { Toaster } from 'react-hot-toast';

import { useTheme } from '@mui/material';
import {
  Container
} from '../AddRecipePage/AddRecipePage.styled';

const FavoritePage = () => {
  const theme = useTheme();
  return (
    <Container >
      <Title title="Favorites" />
      <FavoriteList />
      <Toaster />
    </Container>
  )
};
export default FavoritePage;
