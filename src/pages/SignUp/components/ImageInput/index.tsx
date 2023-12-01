import React, { useState } from 'react';
import './style.css';

interface ImageInputProps {
  onImageChange: (imagePreview: string | null) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      // Passa a URL da imagem para o componente pai
      onImageChange(previewUrl);
    }
  };

  return (
    <label
      htmlFor="fileInput"
      className="image-input-label"
      style={{
        backgroundImage: imagePreview ? `url(${imagePreview})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {!imagePreview && 'Enviar Foto'}
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        onChange={handleFileChange}
        className="image-input-input"
      />
    </label>
  );
};

export default ImageInput;
