import { useState } from 'react';
import { UserLogoModal } from './UserLogoModal';

const UserLogo = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(show => !show);
  };
  return (
    <div>
      <button onClick={() => setShow(true)}></button>
      {show && <UserLogoModal onClose={toggleModal} />}
    </div>
  );
};

export { UserLogo };
