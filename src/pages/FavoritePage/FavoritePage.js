// import FavoriteList from 'components/FavoriteList/FavoriteList';
import Title from '../../components/Title/Title';
import { Toaster } from 'react-hot-toast';
import { getFavorite } from 'redux/favorite/selector';
import { getFavoriteOp } from 'redux/favorite/operation';
import PaginationComponent from 'components/PaginationComponent/PaginationComponent';
import { Container } from '../AddRecipePage/AddRecipePage.styled';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const FavoritePage = () => {
  const theme = useTheme();
  return (
    <Container>
      <Title title="Favorites" />
      <Toaster />
      <PaginationComponent
        getData={getFavorite}
        getDataOp={getFavoriteOp}
        ListComponent={styled.ul``}
        CardComponent={RecipeCard}
        perPage={4}
        buttonColorBg={theme.favorite}
      />
    </Container>
  );
};
export default FavoritePage;
