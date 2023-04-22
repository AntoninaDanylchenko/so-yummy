import { Container } from '@mui/material';
import ShoppingList from 'components/ShoppingListPage/ShoppingList/ShoppingList';
import PageTitle from 'components/ShoppingListPage/Title/PageTitle';
import TableHeader from 'components/ShoppingListPage/TableHeader/TableHeader';

const ShoppingListPage = () => {
  return (
    <Container
      fixed
      maxWidth="desktop"
      style={{ background: '#FAFAFA', padding: 0 }}
    >
      <PageTitle title="Shopping list" />
      <TableHeader />
      <ShoppingList />
    </Container>
  );
};
export default ShoppingListPage;
