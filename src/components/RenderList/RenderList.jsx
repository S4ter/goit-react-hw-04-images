import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import './RenderList.styles.css';
const RenderList = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (images.length > 0) {
    return (
      <ul className="gallery">
        {images.map(el => (
          <li key={el.id}>
            <img
              className="previewImg"
              alt={el.tags}
              src={el.webformatURL}
              onClick={() => openModal(el.largeImageURL)}
            />
          </li>
        ))}
        <Modal
          isOpen={selectedImage !== null}
          imageUrl={selectedImage}
          onClose={closeModal}
        />
      </ul>
    );
  } else {
    return <div className="empty_info">Brak dostępnych zdjęć.</div>;
  }
};

export default RenderList;
