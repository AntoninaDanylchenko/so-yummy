import FavoriteList from 'components/FavoriteList/FavoriteList';
import Title from '../../components/Title/Title'
import { Toaster } from 'react-hot-toast';

const FavoritePage = () => {
  return (
    <>
      <Title title="Favorites" />
      <FavoriteList />
      <Toaster />
    </>
  )
};
export default FavoritePage;
