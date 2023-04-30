import React from 'react';
import { TypeSelector, TypeSelectorWrapper } from './SearchTypeSelector.styled';
import Select from 'react-select';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredients' },
];

export const SearchTypeSelector = ({ onSelectChange }) => {
  const defaultOption = options.find(option => option.value);

  return (
    <TypeSelectorWrapper>
      <TypeSelector htmlFor="select">Search by:</TypeSelector>
      <Select
        id="select"
        defaultValue={defaultOption}
        onChange={selectedOption => onSelectChange(selectedOption.value)}
        options={options}
      />
    </TypeSelectorWrapper>
  );
};
