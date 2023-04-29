import React from 'react';
import { SearchSelectorLabel, stylesSelect } from './SearchTypeSelector.styled';
import Select from 'react-select';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredients' },
];

export const SearchTypeSelector = ({ onSelectChange }) => {
  const defaultOption = options.find(option => option.value);
  //   const [typeSearch, setTypeSearch] = useState('title');
  //   console.log(typeSearch);

  return (
    <>
      <SearchSelectorLabel htmlFor="search-type">
        Search by:
      </SearchSelectorLabel>
      <Select
        id="search-type"
        defaultValue={defaultOption}
        onChange={selectedOption => onSelectChange(selectedOption.value)}
        styles={stylesSelect}
        options={options}
      />
    </>
  );
};
