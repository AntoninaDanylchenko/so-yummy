import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material/styles';
import { fetchRecipesMain } from '../../Services/Api';
import { СhooseYourBreakfast } from '../../components/MainPage/СhooseYourBreakfast';
import { Search } from '../../components/MainPage/Search';
import { PreviewCategories } from '../../components/MainPage/PreviewCategories';
import {
  MainSection,
  RecipeSection,
  RecipeList,
  CategoryName,
  ButtonSeeAll,
  ButtonOther,
} from './MainPage.styled';

const MainPage = () => {
  const theme = useTheme();
  const defaultCategory = ['breakfast', 'miscellaneous', 'chicken', 'dessert'];
  const [recipes, setRecipes] = useState([]);

  const [, setSearchParams] = useSearchParams();

  const isTablet = useMediaQuery({
    query: `(${theme.device.tablet} and (max-width: 1439px))`,
  });
  const isDesktop = useMediaQuery({ query: theme.device.desktop });

  const setParams = value => {
    setSearchParams(value);
  };

  const getRecipes = useCallback(async () => {
    const numberOfRecipes = () => {
      if (isDesktop) return 4;
      else if (isTablet) return 2;
      else return 1;
    };

    const recipes = await fetchRecipesMain(numberOfRecipes());

    setRecipes(recipes);
  }, [isTablet, isDesktop]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <>
      <MainSection>
        <СhooseYourBreakfast />
        <Search setParams={setParams} />
      </MainSection>
      <RecipeSection>
        {
          <RecipeList>
            {defaultCategory.map(category => (
              <li key={category}>
                <CategoryName>{category}</CategoryName>
                <PreviewCategories recipes={recipes} category={category} />
                <ButtonSeeAll to={`/categories/${category}`} type="button">
                  See all
                </ButtonSeeAll>
              </li>
            ))}
          </RecipeList>
        }
        <ButtonOther to={`/categories/beef`}>Other categories</ButtonOther>
      </RecipeSection>
    </>
  );
};
export default MainPage;
