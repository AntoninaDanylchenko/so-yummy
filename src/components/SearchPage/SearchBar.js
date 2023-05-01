import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, SearchBtn } from './SearchBar.styled';
import { toast } from 'react-hot-toast';

export const SearchBar = ({ searchValue, onSubmit }) => {
  const [query, setQuery] = useState(searchValue ? searchValue : '');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return toast.error('Please enter the item you to search for');
    }
    onSubmit(query.toLowerCase().trim());
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search..."
          onChange={handleChange}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
