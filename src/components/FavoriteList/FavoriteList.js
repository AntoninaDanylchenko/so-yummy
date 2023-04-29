import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ButtonDelete, LabelList, LabelListNumber } from './ContactList.styled';
import { getFavorite } from 'redux/favorite/selector';
import { getFavoriteOp } from 'redux/favorite/operation';
// import { Loader } from 'components/Spinner/Spinner';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import { Box, Pagination } from '@mui/material';
import usePagination from '../PaginationComponent/Pagination';

import PaginationComponent from 'components/PaginationComponent/PaginationComponent';

const FavoriteList = () => {
  return (<PaginationComponent
    getData={getFavorite}
    getDataOp={getFavoriteOp}
  />)
  // const dispatch = useDispatch();

  // const { items: favorite } = useSelector(getFavorite);

  // useEffect(() => {
  //   dispatch(getFavoriteOp());
  // }, [dispatch]);

  // let data = favorite;

  // let [page, setPage] = useState(1);
  // const PER_PAGE = 2;

  // const count = Math.ceil(data.length / PER_PAGE);
  // const _DATA = usePagination(data, PER_PAGE);

  // const handleChange = (e, p) => {
  //   setPage(p);
  //   _DATA.jump(p);
  // };

  // return (
  //   <>
  //     <ul>
  //       {_DATA.currentData().map(({ _id, title, description, preview, time }) => (
  //         <li key={_id}>
  //           <RecipeCard
  //             id={_id}
  //             title={title}
  //             description={description}
  //             preview={preview}
  //             time={time}
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //     <Box>
  //       <Pagination
  //         count={count}
  //         page={page}
  //         onChange={handleChange}
  //       />
  //     </Box>
  //   </>
  // );
};

export default FavoriteList;
