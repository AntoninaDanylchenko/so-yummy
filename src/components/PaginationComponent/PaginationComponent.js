import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Pagination } from '@mui/material';
import usePagination from '../PaginationComponent/Pagination';
import { useTheme } from '@mui/material';
import NoResult from 'components/NoResult/NoResult';
import { Loader } from 'components/Loader/Loader';

const PaginationComponent = ({
  getData, //data from backend thought selector
  getDataOp, //callback to get data
  getParam = {},
  ListComponent, // react component for <ul>
  CardComponent, //react component for <li>
  perPage = 3,
  buttonColorBg = '',
  isLoading = false,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const items = useSelector(getData);

  useEffect(() => {
    dispatch(getDataOp(getParam));
  }, [dispatch, getDataOp, getParam]);

  let [page, setPage] = useState(1);

  const count = Math.ceil(items?.length / perPage);
  const _DATA = usePagination(items, perPage);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const noResult = count && !isLoading;

  return (
    <Box
      sx={{
        marginBottom: '100px',
        minHeight: '250px',
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {noResult ? (
            <>
              <ListComponent>
                {_DATA.currentData().map((item, index) => (
                  <CardComponent
                    key={item._id}
                    buttonColorBg={buttonColorBg}
                    {...item}
                    index={index}
                  />
                ))}
              </ListComponent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Pagination
                  sx={{
                    backgroundColor: `${theme.background.pagination}`,
                    borderRadius: theme.radii[4],
                    height: '55px',
                    display: 'flex',
                    boxShadow: theme.shadows[2],
                  }}
                  count={count}
                  page={page}
                  onChange={handleChange}
                />
              </Box>
            </>
          ) : (
            <NoResult />
          )}
        </>
      )}
    </Box>
  );
};

export default PaginationComponent;
