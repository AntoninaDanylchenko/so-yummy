import React from 'react';
import {
  Selector,
  TypeSelector,
  TypeSelectorWrapper,
} from './SearchTypeSelector.styled';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredients' },
];

export const SearchTypeSelector = ({ onSelectChange }) => {
  const defaultOption = options.find(option => option.value);

  return (
    <TypeSelectorWrapper>
      <TypeSelector htmlFor="select">Search by:</TypeSelector>
      <div
        className="type-selector"
        styles={{
          control: baseStyles => ({
            ...baseStyles,
          }),
        }}
      >
        <Selector
          classNamePrefix="Selector"
          defaultValue={defaultOption}
          onChange={selectedOption => onSelectChange(selectedOption.value)}
          options={options}
          styles={{
            control: baseStyles => ({
              ...baseStyles,
            }),
            singleValue: baseStyles => ({
              ...baseStyles,
              paddingTop: '4px',
              paddingBottom: '4px',
              color: 'grey',
            }),
            menu: baseStyles => ({
              ...baseStyles,
            }),
            option: baseStyles => ({
              ...baseStyles,
            }),
            dropdownIndicator: () => ({
              color: '#8BAA36',
            }),
            indicatorSeparator: baseStyles => ({
              ...baseStyles,
              backgroundColor: 'transparent',
            }),
          }}
        />
      </div>
    </TypeSelectorWrapper>
  );
};
