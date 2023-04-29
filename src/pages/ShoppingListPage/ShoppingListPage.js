import { Container } from '@mui/material';
import { useTheme } from '@mui/material';
import ShoppingList from 'components/ShoppingListPage/ShoppingList/ShoppingList';
import PageTitle from 'components/ShoppingListPage/Title/PageTitle';
import TableHeader from 'components/ShoppingListPage/TableHeader/TableHeader';

const ShoppingListPage = () => {
  const theme = useTheme();
  return (
    <Container
      fixed
      maxWidth="desktop"
      style={{ background: theme.primary.userBg, padding: 0 }}
    >
      <PageTitle title="Shopping list" />
      <TableHeader />
      <ShoppingList />
    </Container>
  );
};
export default ShoppingListPage;
