import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCategoriesList } from 'redux/categories/selectors';
import { fetchCategoriesList } from 'redux/categories/operations';
import { List, Wrapper, StyledLink, ListItem } from './NavBar.styled';

export default function NavBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const categoriesList = useSelector(selectCategoriesList);

  return (
    <Wrapper>
      <List>
        {categoriesList?.map(category => (
          <ListItem key={category}>
            <StyledLink to={`/categories/${category.toLowerCase()}`}>
              {category}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
