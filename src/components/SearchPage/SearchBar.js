import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, SearchBtn } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
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
