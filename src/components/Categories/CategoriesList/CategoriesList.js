import { useParams } from 'react-router-dom';
import { RecipeItem } from '../../RecipeItem/RecipeItem';
import { fetchRecipesByCategory } from 'redux/categories/operations';
import {
  selectIsLoading,
  selectRecipesByCategory,
} from 'redux/categories/selectors';
import { List } from './CategoriesList.styled';
import PaginationComponent from 'components/PaginationComponent/PaginationComponent';
import { useSelector } from 'react-redux';

export default function CategoriesList() {
  const { category } = useParams();
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const isLoading = useSelector(selectIsLoading);

  return (
    <PaginationComponent
      getData={selectRecipesByCategory}
      getDataOp={fetchRecipesByCategory}
      getParam={capitalizedCategory}
      ListComponent={List}
      CardComponent={RecipeItem}
      perPage={8}
      isLoading={isLoading}
    />
  );
}
