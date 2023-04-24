import React from 'react';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from 'redux/addRecipes/operations';
import { selectLoading, selectError } from 'redux/addRecipes/selectors';
import { nanoid } from 'nanoid';
import { yupSchema } from './yupSchema';
import { RecipeDescriptionFields } from '../RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredients } from '../RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparation } from '../RecipePreparationFields/RecipePreparationFields';
// import { AddRecipeSection, Form, AddButton } from './AddRecipeForm.styled';
import Loader from 'components/Loader';
import { toast } from 'react-hot-toast';

export const AddRecipeForm = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Breakfast');
  const [cookingTime, setCookingTime] = useState('30 min');
  const [ingredients, setIngredients] = useState([
    { id: nanoid(), unitValue: 'tbs', unitNumber: '', name: '' },
  ]);
  const [preparation, setPreparation] = useState('');

  const [errors, setErrors] = useState({});
  const updateErrors = value => {
    setErrors(prevState => ({ ...prevState, [value]: '' }));
  };

  const onInputImageSet = event => {
    setImage(event.target.files[0]);
    updateErrors('image');
  };

  const onTitleChange = value => {
    setTitle(value);
    updateErrors('title');
  };

  const onDescriptionChange = value => {
    setDescription(value);
    updateErrors('description');
  };

  const onTimeSet = value => {
    setCookingTime(value);
  };

  const onCategorySet = value => {
    setCategory(value);
  };

  const incrementIngrList = () => {
    setIngredients(prevState => [
      ...prevState,
      { id: nanoid(), unitValue: 'tbs', unitNumber: '', name: '' },
    ]);
  };

  const decrementIngrList = () => {
    const lastItem = ingredients[ingredients.length - 1];
    setIngredients(prevState =>
      prevState.filter(item => {
        return item.id !== lastItem.id;
      })
    );
  };

  const deleteIngr = itemId => {
    setIngredients(ingredients.filter(item => item.id !== itemId));
  };

  const updateIngr = (index, unit, value) => {
    setIngredients(prevState => {
      const newState = [...prevState];
      newState[index][unit] = value;
      return newState;
    });
  };

  const updateIngredient = (index, value, id) => {
    setIngredients(prevState => {
      const newState = [...prevState];
      newState[index].name = value;
      newState[index].id = id;
      return newState;
    });
  };

  const onPreparationSet = data => {
    setPreparation(data);
    updateErrors('preparation');
  };

  const updatedIngredients = useMemo(
    () =>
      ingredients.map(ingredient => {
        const { id, unitValue, unitNumber } = ingredient;
        const measure = `${unitNumber} ${unitValue}`;
        return { measure: measure, id: id };
      }),
    [ingredients]
  );

  const initialValues = {
    image,
    title,
    description,
    cookingTime,
    category,
    ingredients,
    preparation,
  };

  const navigate = useNavigate();

  const formData = new FormData();
  formData.append('image', image);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('category', category);
  formData.append('time', cookingTime);
  formData.append('ingredients', JSON.stringify(updatedIngredients));
  formData.append('instructions', preparation);

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoad = useSelector(selectLoading);

  const handleSubmit = e => {
    e.preventDefault();
    yupSchema
      .validate(initialValues, { abortEarly: false })
      .then(() => {
        dispatch(addRecipe(formData))
          .unwrap()
          .then(() => {
            navigate('/my', { replace: true });
            toast.success('Your recipe has been successfully added');
          })
          .catch(error => {
            toast.error('Something went wrong... Please, try again');
          });
      })
      .catch(err => {
        const errors = err.inner.reduce(
          (acc, curr) => ({ ...acc, [curr.path]: curr.message }),
          {}
        );
        setErrors(errors);
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <RecipeDescriptionFields
          title={title}
          description={description}
          time={cookingTime}
          category={category}
          onInputImageSet={onInputImageSet}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
          onTimeSet={onTimeSet}
          onCategorySet={onCategorySet}
          errors={errors}
        />
        <RecipeIngredients
          ingredients={ingredients}
          incrementIngrList={incrementIngrList}
          decrementIngrList={decrementIngrList}
          deleteIngr={deleteIngr}
          updateIngr={updateIngr}
          updateIngredient={updateIngredient}
          errors={errors}
          updateErrors={updateErrors}
        />

        <RecipePreparation
          onPreparationSet={onPreparationSet}
          preparation={preparation}
          errors={errors}
        />
        <button type="submit">Add</button>
      </form>
      {isLoad && !error && <Loader />}
    </section>
  );
};
