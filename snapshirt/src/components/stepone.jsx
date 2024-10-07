import React, { useState } from 'react';
import upload from '../assets/upload.png';
import reload from '../assets/reload.png';

function StepOne({ setSelectedImage, selectedImage,handleNext }) {
  return (
    <div>
      <div className="">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 h-[32rem] border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          {selectedImage ? (
            <button onClick={() => setSelectedImage(null)}>
              <img src={reload} className='w-8' alt="" />
            </button>
          ) : null}
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {selectedImage ? (
              <div>
                <img
                  alt="not found"
                  className='w-52 h-64'
                  src={URL.createObjectURL(selectedImage)} />
              </div>
            ) : (
              <div>
                <img src={upload} className='w-32' />
                <p className='text-xl font-bold text-center'>Upload image</p>
                <input
                  type='file'
                  accept="image/*"
                  name="myImage"
                  className="hidden"
                  id="dropzone-file"
                  onChange={(event) => { setSelectedImage(event.target.files[0]); }}
                />
              </div>
            )}
          </div>
        </label>
          {
          selectedImage && (
          <div className="flex justify-center mt-8 mb-4">
            <button
              className={`px-4 py-2 rounded-xl text-xl border-2 mt-4 border-[#FF6D30] text-black font-bold'}`}
              onClick={handleNext}
            >
              Continue
            </button>
          </div>
        )
      }
      </div>
    </div>
  );
}

export default StepOne;
