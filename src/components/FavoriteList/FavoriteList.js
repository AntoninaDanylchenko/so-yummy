import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ButtonDelete, LabelList, LabelListNumber } from './ContactList.styled';
import { getFavorite } from 'redux/favorite/selector';
import { getFavoriteOp } from 'redux/favorite/operation';
// import { Loader } from 'components/Spinner/Spinner';
import RecipeCard from 'components/RecipeCard/RecipeCard';

const FavoriteList = () => {
  const dispatch = useDispatch();

  const { items: favorite } = useSelector(getFavorite);

  useEffect(() => {
    dispatch(getFavoriteOp());
  }, [dispatch]);

  return (
    <ul>
      {favorite.map(({ _id, title, description, preview, time }) => (
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

export default FavoriteList;
