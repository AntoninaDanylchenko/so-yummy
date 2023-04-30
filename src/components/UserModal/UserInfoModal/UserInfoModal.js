import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import imageS from '../../../images/addRecipe/file-input-mob.png';
import imageL from '../../../images/addRecipe/file-input-desk.png';

import {
  // ModalBackdrop,
  ModalContainer,
  CloseButton,
  InputContainer,
  Input,
  IconClose,
  IconUser,
  IconPencil,
  FileInputWrap,
  Image,
  FileInput,
  UserImage,
  SaveButton,
  // Error,
} from './UserInfoModal.styled';
import { yupSchema } from 'components/AddRecipeForm/yupSchema';
import { userUpdate } from 'redux/auth/operation';
// import { BaseModal } from 'components/Header/context/BaseModal/BaseModal';

// const UserInfoModal = ({ onRequestClose, ...otherProps }) => {
  
  
const UserInfoModal = () => {
  const userName = useSelector(state => state.auth.user.username);
  const avatarURL = useSelector(state => state.auth.avatarURL);

  const initialValues = {
    userName,
    avatarURL,
  };
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const onInputImageSet = event => {
    setImage(event.target.files[0]);
    // updateErrors('image');
  };

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

  const formData = new FormData();
  formData.append('avatars', avatarURL);
  formData.append('username', name);

  const handleSubmit = e => {
    e.preventDefault();
    yupSchema
      .validate(initialValues, { abortEarly: false })
      .then(() => {
        dispatch(userUpdate(formData))
          .unwrap()
          .then(() => {
            // navigate('/my', { replace: true });
            // toast.success('Your recipe has been successfully added');
            console.log('====================================');
            console.log('ok');
            console.log('====================================');
          })
          .catch(error => {
            // toast.error('Something went wrong... Please, try again');
            console.log('====================================');
            console.log(error);
            console.log('====================================');
          });
      })
      .catch(err => {
        const errors = err.inner.reduce(
          (acc, curr) => ({ ...acc, [curr.path]: curr.message }),
          {}
        );
        // setErrors(errors);
      });
  };

  return (
    <>
      {/* <ModalBackdrop
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      > */}
      {/* <BaseModal onRequestClose={onRequestClose} {...otherProps}> */}
        <ModalContainer initialValues={initialValues} onSubmit={handleSubmit}>
          <CloseButton type="button">
            {/* <CloseButton type="button" onClick={handleClose}> */}
            <IconClose />
          </CloseButton>
     
          <div>
            <FileInputWrap onChange={event => onFileInputChange(event)}>
              <label htmlFor="photo">
                <Image>
                  <img src={avatarURL} alt="addphoto" />
                </Image>
              </label>
              <FileInput type="file" accept=".jpg, .jpeg, .png" id="photo" />
              {image && <UserImage src={image} alt="userImage"></UserImage>}
              {/* {errors.image && <Error>{errors.image}</Error>}  */}
            </FileInputWrap>

            <InputContainer>
              <IconUser />
              <Input type="text" name="name" placeholder={userName} />

              <IconPencil />
            </InputContainer>
          </div>

          <SaveButton
            type="submit"

            //  disabled={isSubmitting}
          >
            Save changes
          </SaveButton>
        </ModalContainer>
        {/* </BaseModal> */}
      {/* </ModalBackdrop> */}
    </>
  );
};

export { UserInfoModal };
