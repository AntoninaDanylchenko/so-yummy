import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIngredientsList } from '../../../redux/ingredients/operations';
import { getIngredientsList } from '../../../redux/ingredients/selectors';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  IngredientsWrap,
  FormSubtitle,
  CountWrap,
  Counter,
  MinusButton,
  PlusButton,
  Number,
  IngredientItem,
  InputWrap,
  IngrInput,
  IngrList,
  IngrItem,
  IngrNumberLabel,
  NumberInput,
  UnitSelect,
  SelectText,
  UnitList,
  UnitItem,
  DeleteButton,
  Error,
  NumberError,
} from './RecipeIngredientsFields.styled';

export const RecipeIngredients = ({
  ingredients,
  incrementIngrList,
  decrementIngrList,
  deleteIngr,
  updateIngr,
  updateIngredient,
  errors,
  updateErrors,
}) => {
  const unitValues = ['tbs', 'tsp', 'kg', 'g'];
  const [count, setCount] = useState(1);
  const [unitIsActive, setUnitIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );
  const [ingrIsActive, setIngrIsActive] = useState(
    new Array(ingredients.length).fill(false)
  );

  const dispatch = useDispatch();
  const ingredientsList = useSelector(getIngredientsList);

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const [filteredIngredients, setFilteredIngredients] =
    useState(ingredientsList);

  const incrementCount = () => {
    incrementIngrList();
    setCount(prevState => prevState + 1);
  };

  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    decrementIngrList();
    setCount(prevState => prevState - 1);
  };

  const deleteItem = (itemId, index) => {
    deleteIngr(itemId);
    setCount(prevState => prevState - 1);

    setIngrIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const toggleUnit = index => {
    setUnitIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const setUnit = (index, value) => {
    setUnitIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    updateIngr(index, 'unitValue', value);
  };

  const unitNumberChange = (index, value) => {
    updateIngr(index, 'unitNumber', value);
    updateErrors([`ingredients[${index}].unitNumber`]);
  };

  const onInputChange = (index, value, key) => {
    setIngrIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    setFilteredIngredients(
      ingredientsList.filter(item =>
        item.ttl.toLowerCase().includes(value.toLowerCase())
      )
    );

    updateIngredient(index, value, key);

    updateErrors([`ingredients[${index}].ttl`]);
  };

  const setIngredient = (index, value, id) => {
    updateIngredient(index, value, id);

    setIngrIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <IngredientsWrap>
      <CountWrap>
        <FormSubtitle>Ingredients</FormSubtitle>
        <Counter>
          <PlusButton type="button" onClick={decrementCount}>
            <RemoveIcon />
          </PlusButton>
          <Number>{count}</Number>
          <MinusButton type="button" onClick={incrementCount}>
            <AddIcon />
          </MinusButton>
        </Counter>
      </CountWrap>
      <ul>
        {ingredients.map((item, index) => {
          return (
            <IngredientItem key={item.id}>
              <InputWrap>
                <div>
                  <IngrInput
                    autoFocus={true}
                    value={ingredients[index].name}
                    onChange={e => onInputChange(index, e.target.value)}
                  />
                  {errors[`ingredients[${index}].name`] && (
                    <Error>{errors[`ingredients[${index}].name`]}</Error>
                  )}
                  {ingrIsActive[index] && (
                    <IngrList>
                      {filteredIngredients.map(item => (
                        <IngrItem
                          key={item.ttl}
                          onClick={() =>
                            setIngredient(index, item.ttl, item._id)
                          }
                        >
                          {item.ttl}
                        </IngrItem>
                      ))}
                    </IngrList>
                  )}
                </div>
                <IngrNumberLabel>
                  <NumberInput
                    type="number"
                    value={item.unitNumber}
                    onChange={e => unitNumberChange(index, e.target.value)}
                  />
                  <UnitSelect onClick={() => toggleUnit(index)}>
                    <SelectText>{ingredients[index].unitValue}</SelectText>
                    <KeyboardArrowDownIcon size="18" />
                  </UnitSelect>
                  {unitIsActive[index] && (
                    <UnitList>
                      {unitValues.map(item => (
                        <UnitItem
                          key={item}
                          onClick={() => setUnit(index, item)}
                        >
                          {item}
                        </UnitItem>
                      ))}
                    </UnitList>
                  )}
                  {errors[`ingredients[${index}].unitNumber`] && (
                    <NumberError>
                      {errors[`ingredients[${index}].unitNumber`]}
                    </NumberError>
                  )}
                </IngrNumberLabel>
              </InputWrap>
              <DeleteButton
                type="button"
                onClick={() => deleteItem(item.id, index)}
              >
                <CloseIcon size="20px" />
              </DeleteButton>
            </IngredientItem>
          );
        })}
      </ul>
    </IngredientsWrap>
  );
};
