import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import { Box, Pagination } from '@mui/material';
import usePagination from '../PaginationComponent/Pagination';
import { useTheme } from '@mui/material';


const PaginationComponent = ({ getData, getDataOp }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const { items: favorite } = useSelector(getData);

    useEffect(() => {
        dispatch(getDataOp());
    }, [dispatch, getDataOp]);

    let data = favorite;

    let [page, setPage] = useState(1);
    const PER_PAGE = 2;

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <>
            <ul>
                {_DATA.currentData().map(({ _id, title, description, preview, time }) => (
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
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Pagination sx={{
                    bgcolor: `${theme.background.pagination}`,
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
    );
};

export default PaginationComponent;
