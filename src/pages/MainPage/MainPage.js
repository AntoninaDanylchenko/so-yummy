import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesMain } from 'redux/recipesMain/operations';
import {
  selectRecipesMain,
  selectIsLoading,
  selectError,
} from 'redux/recipesMain/selectors';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ChooseYourBreakfast } from '../../components/MainPage/ChooseYourBreakfast';
import { Search } from '../../components/MainPage/Search';
import { PreviewCategories } from '../../components/MainPage/PreviewCategories';
import {
  Container,
  ContainerHero,
  MainSection,
  RecipeSection,
  RecipeList,
  CategoryTitle,
  CategoryName,
  ButtonSeeAll,
  ButtonOther,
} from './MainPage.styled';

const MainPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const defaultCategory = ['breakfast', 'miscellaneous', 'chicken', 'dessert'];

  const [, setSearchParams] = useSearchParams();

  const setParams = value => {
    setSearchParams(value);
  };

  useEffect(() => {
    dispatch(fetchRecipesMain(4));
  }, [dispatch]);

  const recipes = useSelector(selectRecipesMain);
  if (recipes.length === 0) {
    return null;
  }
  return (
    <>
      <MainSection>
        <ContainerHero>
          <ChooseYourBreakfast />
          <Search setParams={setParams} />
        </ContainerHero>
      </MainSection>

      <RecipeSection>
        <Container>
          {
            <RecipeList>
              {defaultCategory.map(category => (
                <CategoryTitle key={category}>
                  <CategoryName>{category}</CategoryName>
                  <PreviewCategories recipes={recipes} category={category} />
                  <ButtonSeeAll to={`/categories/${category}`} type="button">
                    See all
                  </ButtonSeeAll>
                </CategoryTitle>
              ))}
            </RecipeList>
          }
          <ButtonOther to={`/categories/beef`}>Other categories</ButtonOther>
        </Container>
      </RecipeSection>
      {isLoading && !error && <Loader />}
    </>
  );
};
export default MainPage;
