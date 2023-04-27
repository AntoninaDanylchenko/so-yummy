<<<<<<< HEAD
import { useState } from "react";
import { useFormik } from "formik";
import { LogoutModal, LogoutTitle, LogoutButton, CancelButton, CloseButton } from './LogoutBtn.styled';
=======
// import React from 'react';
// import LogoutButton from './LogoutBtn.styled';
>>>>>>> 96526eab497e1fa4bf77c9df81f72ee1104ed1eb

const LogoutBtn = ({ api }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

<<<<<<< HEAD
  const handleLogout = async () => {
    try {
      await api.logout();
      setShowModal(false);
    } catch (error) {
      console.error('Помилка під час виходу:', error);
    }
  };
=======
const LogoutBtn = (
  // { onLogout }
) => {
  // const handleLogout = async () => {
  //   try {
  //     await fetch('/logout', {
  //       method: 'POST',
  //       credentials: 'include',
  //     });
  //     onLogout();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
>>>>>>> 96526eab497e1fa4bf77c9df81f72ee1104ed1eb

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleLogout,
  });


  return (
<<<<<<< HEAD
    <>
      <button onClick={() => setShowModal(true)}>Logout</button>
      {showModal && (
        <LogoutModal className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CloseButton></CloseButton>
            <LogoutTitle>Are you sure you want to logout?</LogoutTitle>
            <div className="modal-buttons">
              <CancelButton onClick={closeModal}>Cancel</CancelButton>
              <LogoutButton type="submit" onClick={formik.handleSubmit}>
                Logout
              </LogoutButton>
            </div>
          </div>
        </LogoutModal>
      )}
    </>
=======
   <>
    {/* <LogoutButton onClick={handleLogout}>
      Logout
      </LogoutButton> */}
      </>
>>>>>>> 96526eab497e1fa4bf77c9df81f72ee1104ed1eb
  );
};

export default LogoutBtn;