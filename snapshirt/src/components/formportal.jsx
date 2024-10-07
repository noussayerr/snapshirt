import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Usericon from '../assets/usericon';
import ModalContent from './modalContent';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
function Formportal() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated, user } = useAuthStore();
  
  const handleUserIconClick = () => {
    if (!showModal || isAuthenticated) {
      navigate('/login', { state: { background: location } });
      setShowModal(true); 
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    const { state } = location;
    console.log(location)
  };

  return (
    <div>
      <button onClick={handleUserIconClick}>
        <Usericon />
      </button>
      {showModal && createPortal(
        <ModalContent onClose={handleCloseModal} />,
        document.body
      )}
    </div>
  );
}

export default Formportal;
