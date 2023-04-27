import React, { useState } from "react"
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import {   
  ModalContainer,
  EditProfileButton,
  LogoutBtn,
  FormContainer,
  FormTitle,
  FormExample,
  PencilIcon,
  FormInput,
  SaveButton,
  CloseButton,
  CloseIcon, } from './UserLogoModal.styled';

const UserLogoModal = () => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsUserInfoModalOpen(true);
  };

  const handleLogoutClick = () => {
    
  };

  return (
    <ModalContainer>
      <EditProfileButton onClick={handleEditProfileClick}>
        Edit Profile
      </EditProfileButton>
      <LogoutBtn onClick={handleLogoutClick} />
      {isUserInfoModalOpen && (
        <UserInfoModal onClose={() => setIsUserInfoModalOpen(false)} />
      )}
    </ModalContainer>
  );
};


export default UserLogoModal;