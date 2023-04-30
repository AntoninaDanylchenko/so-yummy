import { Container } from '../MainPage/MainPage.styled';

import { useState, useEffect } from 'react';

import PageTitle from 'components/ShoppingListPage/Title/PageTitle';
import SearchBar from 'components/SearchPage/SearchBar';
import fetchRecipesByIngredients, {
  fetchRecipesByTitle,
} from 'components/SearchPage/fetchAPI';
import Button from 'components/SearchPage/ButtonLoad';
import { SearchTypeSelector } from 'components/SearchPage/SearchTypeSelector';
import { RecipeItem } from 'components/RecipeItem/RecipeItem';
import { SearchWrapper } from 'components/SearchPage/SearchBar.styled';
import { SearchedRecipesList } from 'components/SearchPage/SearchedRecipesList.styled';
import NoResult from 'components/NoResult/NoResult';
import { Container } from './MainPage.styled';

const SearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [isTitle, setIsTitle] = useState(true);

  const onSelectChange = value => {
    value === 'title' ? setIsTitle(true) : setIsTitle(false);
    setQuery('');
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    (async () => {
      try {
        const response = isTitle
          ? await fetchRecipesByTitle(query, page)
          : await fetchRecipesByIngredients(query, page);

        const dataRecipes = response.data.map(
          ({ _id, title, preview, thumb }) => ({
            id: _id,
            title,
            preview,
            thumb,
          })
        );
        console.log('dataRecipes', dataRecipes);
        setRecipes(prevRecipes => [...prevRecipes, ...dataRecipes]);
        setTotalRecipes(prevTotalRecipes => response.data.totalRecipes);

        if (page !== 1) {
          scrollOnLoadButton();
        }
      } catch (error) {
        console.log('Something wrong... Try again!');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isTitle, query, page]);

  const onChangeQuery = query => {
    setRecipes([]);
    setPage(1);
    setQuery(query);
    setTotalRecipes(0);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const showLoadMore = recipes.length !== totalRecipes && !isLoading;

  return (
    <Container fixed maxWidth="desktop">
      <PageTitle title="Search" />
      <SearchWrapper>
        <SearchBar onSubmit={onChangeQuery} />
        <SearchTypeSelector onSelectChange={onSelectChange} />
      </SearchWrapper>
      {recipes.length ? (
        <SearchedRecipesList>
          {recipes?.map(recipe => {
            return <RecipeItem key={recipe.id} recipe={recipe} />;
          })}
        </SearchedRecipesList>
      ) : (
        <NoResult />
      )}
      {showLoadMore && <Button onClick={loadMore} />}
    </Container>
  );
};

export default SearchPage;
