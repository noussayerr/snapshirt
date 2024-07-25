import React, { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import whitetshirt from '../assets/whitetshirt.png';

function StepThree({ image, frame }) {
  const tShirtRef = useRef();

  useEffect(() => {
    if (tShirtRef.current) {
      html2canvas(tShirtRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        document.getElementById('summaryImage').src = imgData;
      });
    }
  }, [image, frame]);

  return (
    <div className="flex flex-col items-center">
      <div className='bg-[#F1F1F1] w-2/3 p-10 rounded-xl flex justify-center relative' ref={tShirtRef}>
        <img src={whitetshirt} alt="T-shirt" className="absolute inset-0" />
        <div
          style={{
            position: "absolute",
            transform: `translate(${frame.translate[0]}px, ${frame.translate[1]}px) scale(${frame.scale[0]}, ${frame.scale[1]}) rotate(${frame.rotate}deg)`,
            width: '200px',
            height: '200px',
          }}
        >
          <img src={URL.createObjectURL(image)} alt="Uploaded" className="object-cover w-full h-full" />
        </div>
      </div>
      <h2 className="text-2xl mt-8">Summary</h2>
      <div className="mt-4">
        <img id="summaryImage" alt="Summary" />
      </div>
    </div>
  );
}

export default StepThree;
