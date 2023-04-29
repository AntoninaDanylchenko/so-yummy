import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite } from 'redux/favorite/selector';
import { getFavoriteOp } from 'redux/favorite/operation';
// import { Loader } from 'components/Spinner/Spinner';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import NoResult from 'components/NoResult/NoResult';

const FavoriteList = () => {
  const dispatch = useDispatch();

  const { items: favorite } = useSelector(getFavorite);

  useEffect(() => {
    dispatch(getFavoriteOp());
  }, [dispatch]);

  return (
    <>
      {favorite.length ? (
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
        </ul>) : (<NoResult />)}
    </>
  );
};

export default FavoriteList;
