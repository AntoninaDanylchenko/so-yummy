import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCategoriesList } from 'redux/categories/selectors';
import { fetchCategoriesList } from 'redux/categories/operations';
import { List, Wrapper, StyledLink } from './NavBar.styled';

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
          <li key={category}>
            <StyledLink to={`/categories/${category.toLowerCase()}`}>
              {category}
            </StyledLink>
          </li>
        ))}
      </List>
    </Wrapper>
  );
}
