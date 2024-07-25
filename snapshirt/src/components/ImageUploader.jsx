// src/components/ImageUploader.js
import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onImageUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    },
  });

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-400 p-4 cursor-pointer">
      <input {...getInputProps()} />
      <p className="text-center">Drag 'n' drop an image here, or click to select one</p>
    </div>
  );
};

export default ImageUploader;
