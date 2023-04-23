import { useSearchParams } from 'react-router-dom';
import { Search } from '../../components/MainPage/Search';

const MainPage = () => {
  const [setSearchParams] = useSearchParams();

  const setParams = value => {
    setSearchParams(value);
  };

  return (
    <div>
      <Search setParams={setParams} />
    </div>
  );
};
export default MainPage;
