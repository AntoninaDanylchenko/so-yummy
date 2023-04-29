import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ButtonDelete, LabelList, LabelListNumber } from './ContactList.styled';
import { getMyRecipes } from 'redux/myRecipes/selector';
import { getMyRecipesOp } from 'redux/myRecipes/operation';
// import { Loader } from 'components/Spinner/Spinner';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import NoResult from 'components/NoResult/NoResult';

const MyRecipesList = () => {
  const dispatch = useDispatch();

  const { items: myRecipes } = useSelector(getMyRecipes);

  useEffect(() => {
    dispatch(getMyRecipesOp());
  }, [dispatch]);

  return (
    <>
      {myRecipes.length ? (
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
      ) : (
        <NoResult />
      )}
    </>
  );
};

export default MyRecipesList;
