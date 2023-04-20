import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectShoppingList } from 'redux/ShoppingList/selectors';
import { fetchShoppingList } from 'redux/ShoppingList/operations';

export default function ShoppingList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  const shoppingList = useSelector(selectShoppingList);

  return (
    <ul>
      {shoppingList?.map(shoppingItem => (
        <li key={shoppingItem.id}>shoppingItem</li>
      ))}
    </ul>
  );
}
