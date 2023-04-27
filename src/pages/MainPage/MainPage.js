import { useSearchParams } from 'react-router-dom';

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
  const defaultCategory = ['breakfast', 'miscellaneous', 'chicken', 'dessert'];

  const [, setSearchParams] = useSearchParams();

  const setParams = value => {
    setSearchParams(value);
  };

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
                <PreviewCategories category={category} />
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
