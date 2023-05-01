// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { selectShoppingList } from 'redux/shoppingList/selectors';
import { fetchShoppingList } from 'redux/shoppingList/operations';
import { List } from './ShoppingList.styled';
import ListItem from '../ListItem/ListItem';
// import NoResult from 'components/NoResult/NoResult';
// import { UnderList } from 'components/Categories/CategoriesList/CategoriesList.styled';

import PaginationComponent from 'components/PaginationComponent/PaginationComponent';

// export default function ShoppingList() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchShoppingList());
//   }, [dispatch]);

//   const shoppingList = useSelector(selectShoppingList);
//   return (
//     <>
//       {shoppingList.length ? (
//         <List>
//           {shoppingList?.map(shoppingItem => (
//             <ListItem
//               key={shoppingItem.id}
//               shoppingItem={shoppingItem}
//             ></ListItem>
//           ))}
//         </List>
//       ) : (
//         <NoResult />
//       )}
//       <UnderList />
//     </>
//   );
// }

export default function ShoppingList() {
  return (
    <>
      <PaginationComponent
        getData={selectShoppingList}
        getDataOp={fetchShoppingList}
        ListComponent={List}
        CardComponent={ListItem}
        perPage={5}
      />
      {/* <UnderList /> */}
    </>
  )
}