import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    },
  });

  return (
    <div {...getRootProps()} className="dropzone flex justify-center items-center p-5 border border-gray-500 rounded-2xl shadow-sm focus:outline-none focus:border-red-700 border-2">
      <input {...getInputProps()}/>

      {image ? (
        <img src={image} alt="Uploaded" style={{ width: '50%',  maxHeight: '100%'}} />
      ) : (
        <p className='text-gray-500 text-xl'>Drag and drop an image here, or click to select one</p>
      )}
    </div>
  );
};

export default ImageUploader;
