import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { selectCategoriesList } from 'redux/categories/selectors';
import { fetchCategoriesList } from 'redux/categories/operations';
import { List, Wrapper, StyledLink, ListItem } from './NavBar.styled';

export default function NavBar() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const onWheel = e => {
    const elelemnt = ref.current;
    if (elelemnt) {
      if (e.deltaY === 0) return;
      elelemnt.scrollTo({
        left: elelemnt.scrollLeft + e.deltaY,
      });
    }
  };

  const categoriesList = useSelector(selectCategoriesList);

  return (
    <Wrapper ref={ref} onWheel={onWheel}>
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
