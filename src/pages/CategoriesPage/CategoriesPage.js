import { Container } from '@mui/material';
import PageTitle from 'components/ShoppingListPage/Title/PageTitle';
import NavBar from 'components/Categories/NavBar/NavBar';
import CategoriesList from 'components/Categories/CategoriesList/CategoriesList';
import { useTheme } from '@mui/material';

const CategoriesPage = () => {
  const theme = useTheme();
  return (
    <Container
      fixed
      maxWidth="desktop"
      style={{ background: theme.primary.userBg, padding: 0 }}
    >
      <PageTitle title="Categories" />
      <NavBar />
      <CategoriesList />
    </Container>
  );
};
export default CategoriesPage;
