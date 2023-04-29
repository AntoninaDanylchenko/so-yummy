import { getFavorite } from 'redux/favorite/selector';
import { getFavoriteOp } from 'redux/favorite/operation';
import PaginationComponent from 'components/PaginationComponent/PaginationComponent';

const FavoriteList = () => {
  return (<PaginationComponent
    getData={getFavorite}
    getDataOp={getFavoriteOp}
  />)
}
export default FavoriteList;
