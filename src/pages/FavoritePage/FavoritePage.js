// import FavoriteList from 'components/FavoriteList/FavoriteList';
import Title from '../../components/Title/Title'
import { Toaster } from 'react-hot-toast';
import { getFavorite } from 'redux/favorite/selector';
import { getFavoriteOp } from 'redux/favorite/operation';
import PaginationComponent from 'components/PaginationComponent/PaginationComponent';
import {
  Container
} from '../AddRecipePage/AddRecipePage.styled';

const FavoritePage = () => {
  return (
    <Container >
      <Title title="Favorites" />
      {/* <FavoriteList /> */}
      <Toaster />
      <PaginationComponent
        getData={getFavorite}
        getDataOp={getFavoriteOp}
      />
    </Container>
  )
};
export default FavoritePage;
