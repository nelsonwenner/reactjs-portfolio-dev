import React from 'react';
import './image-modal.css';

const ImageModal = () => {

  const closeImageModel = (event) => {
    const lightBox = document.querySelector(".lightbox");
    lightBox.classList.remove("open");
  }

  return (
    <div className="lightbox">
      <div className="lightbox-content">
        <div onClick={ closeImageModel } className="light-close">&times;</div>
        <img src={ null } className="lightbox-img" alt="lightbox-img" />
        <div className="lightbox-caption">
          <div className="caption-text">Web Design</div>
        </div>
      </div>
    </div>
  )
}

export default ImageModal;