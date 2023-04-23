import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchRecipesMain } from '../../Services/Api';
import { СhooseYourBreakfast } from '../../components/MainPage/СhooseYourBreakfast';
import { Search } from '../../components/MainPage/Search';
import { PreviewCategories } from '../../components/MainPage/PreviewCategories';
import { ButtonSeeAll, ButtonOther } from './MainPage.styled';

const MainPage = () => {
  const defaultCategory = ['breakfast', 'miscellaneous', 'chicken', 'dessert'];
  const [recipes, setRecipes] = useState([]);

  const [, setSearchParams] = useSearchParams();

  const setParams = value => {
    setSearchParams(value);
  };

  useEffect(() => {
    fetchRecipesMain(1).then(setRecipes);
  }, []);

  return (
    <div>
      <СhooseYourBreakfast />
      <Search setParams={setParams} />
      {
        <ul>
          {defaultCategory.map(category => (
            <li key={category}>
              <h3>{category}</h3>
              <PreviewCategories recipes={recipes} category={category} />
              <ButtonSeeAll to={`/categories/${category}`} type="button">
                See all
              </ButtonSeeAll>
            </li>
          ))}
        </ul>
      }
      <ButtonOther to={`/categories/beef`}>Other categories</ButtonOther>
    </div>
  );
};
export default MainPage;
