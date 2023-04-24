// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectShoppingList } from 'redux/shoppingList/selectors';
// import { fetchShoppingList } from 'redux/shoppingList/operations';
// import { List } from './ShoppingList.styled';
// import ListItem from '../ListItem/ListItem';

// export default function ShoppingList() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchShoppingList());
//   }, [dispatch]);

//   const shoppingList = useSelector(selectShoppingList);

//   return (
//     <List>
//       {shoppingList?.map(shoppingItem => (
//         <ListItem key={shoppingItem.id} shoppingItem={shoppingItem}></ListItem>
//       ))}
//     </List>
//   );
// }
