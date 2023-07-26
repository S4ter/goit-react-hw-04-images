import './Modal.styles.css';
import React, { useEffect } from 'react';

const Modal = ({ isOpen, imageUrl, onClose }) => {
  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt="Large" />
      </div>
    </div>
  );
};

export default Modal;
