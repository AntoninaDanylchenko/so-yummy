import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ButtonDelete, LabelList, LabelListNumber } from './ContactList.styled';
import { getMyRecipes } from 'redux/myRecipes/selector';
import { getFavoriteOp } from 'redux/favorite/operation';
// import { Loader } from 'components/Spinner/Spinner';
import RecipeCard from 'components/RecipeCard/RecipeCard';

const MyRecipesList = () => {
  const dispatch = useDispatch();

  const { items: myRecipes } = useSelector(getMyRecipes);

  useEffect(() => {
    dispatch(getFavoriteOp());
  }, [dispatch]);

  return (
    <ul>
      {myRecipes.map(({ _id, title, description, preview, time }) => (
        <li key={_id}>
          <RecipeCard
            id={_id}
            title={title}
            description={description}
            preview={preview}
            time={time}
          />
        </li>
      ))}
    </ul>
  );
};

export default MyRecipesList;
