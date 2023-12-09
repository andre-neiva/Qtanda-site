import React, { useState } from 'react';
import ImageInput from '../../../ImageInput';
import './style.css';

const UploadPhoto: React.FC = () => {
  const [imageSelected, setImageSelected] = useState(false);

  const handleImageChange = (imagePreview: string | null) => {
    setImageSelected(!!imagePreview);
  };

  return (
    <div id="genericContainer">
      <div className="upload-photo-container">
        <h4>Foto do restaurante</h4>
        <ImageInput onImageChange={handleImageChange} />
        {imageSelected && <p className="note">Clique novamente para trocar a foto</p>}
      </div>
      <div className="right-part">
        <h4>Nome do restaurante</h4>
        <input type="text" placeholder="Restaurante do fulano" className="nameInput" />
      </div>
    </div>
  );
};
export default UploadPhoto;
