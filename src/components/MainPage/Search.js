import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Search = ({ setParams }) => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.query.value.trim();
    if (!query) {
      return toast.error('Please enter the item you to search for');
    }
    setParams({ query });

    navigate(`/search?value=${query}`);

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
};

Search.propTypes = {
  setParams: PropTypes.func.isRequired,
};
