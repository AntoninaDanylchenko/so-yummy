import { useState } from 'react';
import {
  FormSubtitle,
  RecipeText,
  Error,
} from './RecipePreparationFields.styled';

export const RecipePreparation = ({
  onPreparationSet,
  preparation,
  errors,
}) => {
  const [text, setText] = useState('');

  const handleKeyDown = event => {
    let arrayText = text;
    if (event.key === 'Enter') {
      arrayText = text.split('\n').join(', ');
    }
    onPreparationSet(arrayText);
  };

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <>
      <FormSubtitle>Recipe Preparation</FormSubtitle>
      <RecipeText
        name="recipe"
        id="recipe"
        placeholder="Enter recipe"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={text}
      ></RecipeText>
      {errors.preparation && <Error>{errors.preparation}</Error>}
    </>
  );
};
