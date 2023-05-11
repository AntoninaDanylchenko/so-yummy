import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoriesList } from '../../../redux/categories/selectors';
import { fetchCategoriesList } from '../../../redux/categories/operations';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
// import { Motivation } from 'components/MotivatioContent/MotivationContent';
import { ResetImage } from './AcceptModal';
import timeCooking from '../../AddRecipeForm/timeCooking.json';
import imageS from '../../../images/addRecipe/file-input-mob.png';
import imageL from '../../../images/addRecipe/file-input-desk.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  DescrWrap,
  FileInputWrap,
  FileInput,
  RecipeImage,
  Image,
  InputWrap,
  DescrInput,
  SelectWrap,
  DescrLabel,
  DescrSelect,
  SelectText,
  CategoryList,
  CategoryItem,
  TimeList,
  TimeItem,
  OneInputWrap,
  Error,
} from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = ({
  title,
  description,
  time,
  category,
  onInputImageSet,
  onTitleChange,
  onDescriptionChange,
  onTimeSet,
  onCategorySet,
  errors,
}) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(selectCategoriesList);

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const [image, setImage] = useState('');
  const [timeIsActive, setTimeIsActive] = useState(false);
  const [categoryIsActive, setCategoryIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onFileInputChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', event => {
      const buffer = event.target.result;
      const blob = new Blob([buffer], { type: file.type });
      const url = URL.createObjectURL(blob);
      setImage(url);
    });
    reader.readAsArrayBuffer(file);

    onInputImageSet(event);
  };

  const toggleTimeList = () => {
    setTimeIsActive(!timeIsActive);
  };

  const toggleCategory = () => {
    setCategoryIsActive(!categoryIsActive);
  };

  const setTime = value => {
    onTimeSet(value);
    setTimeIsActive(false);
  };

  const setCategory = value => {
    onCategorySet(value);
    setCategoryIsActive(false);
  };

  const resetImage = () => {
    setImage('');
    setShowModal(false);
  };
  return (
    <DescrWrap>
      <FileInputWrap onChange={event => onFileInputChange(event)}>
        <label htmlFor="photo">
          <Image>
            <source srcSet={imageS} media="(max-width: 1439px)" />
            <source srcSet={imageL} media="(min-width: 1440px)" />
            <img src={imageS} alt="addphoto" />
          </Image>
        </label>
        <FileInput type="file" accept=".jpg, .jpeg, .png" id="photo" />
        {image && (
          <RecipeImage
            src={image}
            alt="recipeImage"
            onClick={() => setShowModal(true)}
          ></RecipeImage>
        )}
      </FileInputWrap>

      <InputWrap>
        <OneInputWrap>
          <DescrInput
            type="text"
            id="title"
            name="title"
            placeholder="Enter item title"
            onChange={e => onTitleChange(e.target.value)}
            value={title}
          />
          {errors.title && <Error>{errors.title}</Error>}
        </OneInputWrap>
        <OneInputWrap>
          <DescrInput
            type="text"
            id="about"
            name="about"
            placeholder="Enter about recipe"
            onChange={e => onDescriptionChange(e.target.value)}
            value={description}
          />
          {errors.description && <Error>{errors.description}</Error>}
        </OneInputWrap>
        <SelectWrap onClick={toggleCategory}>
          <DescrLabel>Category</DescrLabel>
          <DescrSelect>
            <SelectText>{category}</SelectText>
            <KeyboardArrowDownIcon size="18" />
          </DescrSelect>
          {categoryIsActive && (
            <CategoryList>
              {categoriesList.map((item, index) => (
                <CategoryItem key={index} onClick={() => setCategory(item)}>
                  {item}
                </CategoryItem>
              ))}
            </CategoryList>
          )}
        </SelectWrap>
        <SelectWrap onClick={toggleTimeList}>
          <DescrLabel>Cooking time</DescrLabel>
          <DescrSelect>
            <SelectText>{time}</SelectText>
            <KeyboardArrowDownIcon size="18" />
          </DescrSelect>
          {timeIsActive && (
            <TimeList>
              {timeCooking.map((item, index) => (
                <TimeItem key={index} onClick={() => setTime(item)}>
                  {item}
                </TimeItem>
              ))}
            </TimeList>
          )}
        </SelectWrap>
      </InputWrap>
      {showModal && (
        <ModalWindow onClose={() => setShowModal(false)}>
          <ResetImage
            onResetImage={() => resetImage()}
            onClose={() => setShowModal(false)}
          />
        </ModalWindow>
      )}
    </DescrWrap>
  );
};
