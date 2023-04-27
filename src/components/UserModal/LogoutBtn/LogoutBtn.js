import { useState } from "react";
import { useFormik } from "formik";
import { LogoutModal, LogoutTitle, LogoutButton, CancelButton, CloseButton } from './LogoutBtn.styled';

const LogoutBtn = ({ api }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleLogout = async () => {
    try {
      await api.logout();
      setShowModal(false);
    } catch (error) {
      console.error('Помилка під час виходу:', error);
    }
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleLogout,
  });


  return (
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
  );
};

export default LogoutBtn;