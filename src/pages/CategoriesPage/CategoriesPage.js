import { Container } from '@mui/material';
import PageTitle from 'components/ShoppingListPage/Title/PageTitle';
import NavBar from 'components/Categories/NavBar/NavBar';
import CategoriesList from 'components/Categories/CategoriesList/CategoriesList';

const CategoriesPage = () => {
  return (
    <Container
      fixed
      maxWidth="desktop"
      style={{ background: '#FAFAFA', padding: 0 }}
    >
      <PageTitle title="Categories" />
      <NavBar />
      <CategoriesList />
    </Container>
  );
};
export default CategoriesPage;
