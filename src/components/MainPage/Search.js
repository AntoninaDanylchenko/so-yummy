import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Form, Input, ButtonSearch } from './Search.styled';

export const Search = ({ setParams }) => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.query.value.trim();
    if (!query) {
      return toast.error('Please enter the item you to search for');
    }
    setParams({ query });

    navigate(`/search?search=${query}&type=title`);

    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="query" />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </Form>
  );
};

Search.propTypes = {
  setParams: PropTypes.func.isRequired,
};
