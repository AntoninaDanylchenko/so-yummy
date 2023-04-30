import { useState, useNavigate } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
} from './UserInfoModal.styled';
import { yupSchema } from 'components/AddRecipeForm/yupSchema';
import { userUpdate } from 'redux/auth/operation';

const UserInfoModal = ({onClose}) => {
  const userName = useSelector(state => state.auth.user.username);
  const avatarURL = useSelector(state => state.auth.avatarURL);

  const initialValues = {
    userName,
    avatarURL,
  };
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputImageSet = event => {
    setImage(event.target.files[0]);
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
    yupSchema.validate(initialValues, { abortEarly: false }).then(() => {
      dispatch(userUpdate(formData))
        .unwrap()
        .then(() => {
          navigate('/my', { replace: true });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <ModalContainer initialValues={initialValues} onSubmit={handleSubmit}>
        <CloseButton type="button" onClick={onClose}>
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
          </FileInputWrap>
          <InputContainer>
            <IconUser />
            <Input type="text" name="name" placeholder={userName} />
            <IconPencil />
          </InputContainer>
        </div>
        <SaveButton type="submit">Save changes</SaveButton>
      </ModalContainer>

      {/* </ModalBackdrop> */}
    </>
  );
};

export { UserInfoModal };
