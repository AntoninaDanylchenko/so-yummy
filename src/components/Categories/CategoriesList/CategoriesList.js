import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRecipesByCategory } from 'redux/categories/operations';
import { selectRecipesByCategory } from 'redux/categories/selectors';
import {
  Card,
  PrewievImg,
  TitleWrapper,
  StyledLink,
  Title,
  List,
  UnderList,
} from './CategoriesList.styled';

export default function CategoriesList() {
  const { category } = useParams();
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipesByCategory(capitalizedCategory));
  }, [capitalizedCategory, dispatch]);

  const { recipesList } = useSelector(selectRecipesByCategory);
  return (
    <>
      <List>
        {recipesList?.map(recipe => (
          <li key={recipe._id}>
            <StyledLink to={`/recipe/${recipe._id}`}>
              <Card>
                <PrewievImg src={recipe.preview} alt={recipe.title} />
                <TitleWrapper>
                  <Title>{recipe.title}</Title>
                </TitleWrapper>
              </Card>
            </StyledLink>
          </li>
        ))}
      </List>
      <UnderList />
    </>
  );
}
