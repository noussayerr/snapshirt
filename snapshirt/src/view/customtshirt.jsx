import React, { useState } from 'react';
import StepOne from '../components/stepone';
import StepTwo from '../components/steptwo';
import StepThree from '../components/stepthree';
import returnicon from '../assets/returnicon.png';

const Customtshirt = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [frame, setFrame] = useState({ translate: [0, 0], scale: [1, 1], rotate: 0 });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return <StepOne setSelectedImage={setSelectedImage} selectedImage={selectedImage} />;
      case 2:
        return <StepTwo image={selectedImage} frame={frame} setFrame={setFrame} />;
      case 3:
        return <StepThree image={selectedImage} frame={frame} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-screen-4xl">
      <div className="w-full max-w-screen-lg mx-auto p-4 mt-6 mb-8">
        <button
          className={`px-4 w-16 h-10 py-2 mb-2 rounded ${currentStep === 1 ? 'hidden' : ''}`}
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          <img src={returnicon} alt="Return" />
        </button>
        <div className="flex justify-between mb-4 h-16">
          <div className={`w-80 border-2 p-2 flex items-center gap-2 text-xl ${currentStep === 1 ? 'text-[#E48056]' : ''}`}>
            <div className={`flex items-center justify-center rounded-3xl border-2 w-8 h-8 text-center text-xl 
              ${currentStep > 1 ? 'bg-[#FF6D30] border-[#FF6D30]' : currentStep === 1 ? 'text-[#E48056] border-[#E48056]' : 'text-[#ABB7C2] border-[#ABB7C2]'}`}>
              {currentStep > 1 ? (
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z" fill="white" />
                </svg>
              ) : (
                <p>01</p>
              )}
            </div>
            Your Photo
          </div>
          <div className={`w-80 border-2 p-2 flex items-center gap-2 text-xl ${currentStep === 2 ? 'text-[#E48056]' : ''}`}>
            <div className={`flex items-center justify-center rounded-3xl border-2 w-8 h-8 text-center text-xl 
              ${currentStep > 2 ? 'bg-[#FF6D30] border-[#FF6D30]' : currentStep === 2 ? 'text-[#E48056] border-[#E48056]' : 'text-[#ABB7C2] border-[#ABB7C2]'}`}>
              {currentStep > 2 ? (
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z" fill="white" />
                </svg>
              ) : (
                <p>02</p>
              )}
            </div>
            Designing
          </div>
          <div className={`w-80 border-2 p-2 flex items-center gap-2 text-xl ${currentStep === 3 ? 'text-[#E48056]' : ''}`}>
            <div className={`flex items-center justify-center rounded-3xl border-2 w-8 h-8 text-center text-xl 
              ${currentStep > 3 ? 'bg-[#FF6D30] border-[#FF6D30]' : currentStep === 3 ? 'text-[#E48056] border-[#E48056]' : 'text-[#ABB7C2] border-[#ABB7C2]'}`}>
              <p>03</p>
            </div>
            Payment info
          </div>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto'>
        {renderContent()}
      </div>
      {
        selectedImage && (
          <div className="flex justify-center mt-8 mb-4">
            <button
              className={`px-4 py-2 rounded-xl text-xl border-2 mt-4 ${currentStep === 3 ? 'bg-[#FF6D30] text-white font-bold' : 'border-[#FF6D30] text-black font-bold'}`}
              onClick={handleNext}
              disabled={currentStep === 3}
            >
              Continue
            </button>
          </div>
        )
      }
    </div>
  );
};

export default Customtshirt;
