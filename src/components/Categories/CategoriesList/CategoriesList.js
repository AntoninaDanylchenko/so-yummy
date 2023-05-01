import { useParams } from 'react-router-dom';
import CategoryCard from '../CategoryCard';
import { fetchRecipesByCategory } from 'redux/categories/operations';
import { selectRecipesByCategory } from 'redux/categories/selectors';
import { List } from './CategoriesList.styled';
import PaginationComponent from 'components/PaginationComponent/PaginationComponent';


export default function CategoriesList() {
  const { category } = useParams();
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <PaginationComponent
        getData={selectRecipesByCategory}
        getDataOp={fetchRecipesByCategory}
        getParam={capitalizedCategory}
        ListComponent={List}
        CardComponent={CategoryCard}
        perPage={8} />
    </>
  );
}
