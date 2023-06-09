import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import PageTitle from 'components/ShoppingListPage/Title/PageTitle';
import SearchBar from 'components/SearchPage/SearchBar';
import { useSearchParams } from 'react-router-dom';
import {
  fetchRecipesByIngredients,
  fetchRecipesByTitle,
} from 'components/SearchPage/fetchAPI';
import { SearchTypeSelector } from 'components/SearchPage/SearchTypeSelector';
import { RecipeItem } from 'components/RecipeItem/RecipeItem';
import { SearchWrapper } from 'components/SearchPage/SearchBar.styled';
import { SearchedRecipesList } from 'components/SearchPage/SearchedRecipesList.styled';
import NoResult from 'components/NoResult/NoResult';
import { Loader } from 'components/Loader/Loader';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  const [query, setQuery] = useState(search ? search : '');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
          ? await fetchRecipesByTitle(query)
          : await fetchRecipesByIngredients(query);
        const dataRecipes = response.data.map(
          ({ _id, title, preview, thumb }) => ({
            id: _id,
            title,
            preview,
            thumb,
          })
        );
        setRecipes(dataRecipes);
      } catch (error) {
        console.log('Something wrong... Try again!');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isTitle, query]);

  const onChangeQuery = query => {
    setRecipes([]);
    setQuery(query);
  };

  return (
    <Container
      fixed
      maxWidth="desktop"
      style={{ background: 'transparent', padding: 0 }}
    >
      <PageTitle title="Search" />
      <SearchWrapper>
        <SearchBar searchValue={query} onSubmit={onChangeQuery} />
        <SearchTypeSelector onSelectChange={onSelectChange} />
      </SearchWrapper>
      {recipes.length ? (
        <SearchedRecipesList>
          {recipes?.map(recipe => {
            return <RecipeItem key={recipe.id} {...recipe} />;
          })}
        </SearchedRecipesList>
      ) : (
        <NoResult />
      )}

      {isLoading && <Loader />}
    </Container>
  );
};

export default SearchPage;
