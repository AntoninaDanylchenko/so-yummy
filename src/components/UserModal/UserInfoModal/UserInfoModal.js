import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
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

import { userUpdate } from 'redux/auth/operation';

const UserInfoModal = ({ onClose }) => {
  const userName = useSelector(state => state.auth.user.username);
  const avatarURL = useSelector(state => state.auth.avatarURL);

  const initialValues = {
    userName,
    avatarURL,
  };
  const yupSchema = yup.object().shape({
    userName: yup.string().required(),
    avatarURL: yup.string(),
  });
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  console.log(setName);

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
      setUrl(url);
    });
    reader.readAsArrayBuffer(file);

    onInputImageSet(event);
  };
  const onNameInputChange = e => {
    setName(e.target.value);
  };
  const formData = new FormData();
  formData.append('avatar', image);
  formData.append('username', name);
  console.log(formData);
  const handleSubmit = e => {
    console.log('ok');
    e.preventDefault();

    yupSchema.validate(initialValues, { abortEarly: false }).then(() => {
      console.log(formData);
      dispatch(userUpdate(formData))
        .unwrap()
        .then(() => {
          // toast.success('Your recipe has been successfully added');
        })
        .catch(error => {
          console.log(error);
        });
    });
    onClose();
  };

  return (
    <>
      <ModalContainer>
        <CloseButton type="button" onClick={onClose}>
          <IconClose />
        </CloseButton>

        <form onSubmit={handleSubmit}>
          <FileInputWrap onChange={event => onFileInputChange(event)}>
            <label htmlFor="photo">
              <Image>
                <img src={avatarURL} alt="addphoto" />
              </Image>
            </label>
            <FileInput type="file" accept=".jpg, .jpeg, .png" id="photo" />
            {image && <UserImage src={url} alt="userImage"></UserImage>}
          </FileInputWrap>
          <InputContainer>
            <IconUser />
            <Input
              type="text"
              name="name"
              value={name}
              placeholder={userName}
              onChange={onNameInputChange}
            />

            <IconPencil />
          </InputContainer>
          <SaveButton type="submit">Save changes</SaveButton>
        </form>
      </ModalContainer>

      {/* </ModalBackdrop> */}
    </>
  );
};

export { UserInfoModal };
