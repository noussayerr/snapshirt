import React, { useRef, useState, useEffect } from 'react';
import Moveable from 'react-moveable';

function StepTwo({ image }) {
  const [frame, setFrame] = useState({ translate: [0, 0], scale: [1, 1], rotate: 0 });
  const imageRef = useRef(null);
  const tshirtRef = useRef(null);
  const imageObjectURL = useRef(null);
  const [svgColor, setSvgColor] = useState('#e8ebee');
  const handleColorChange = (color) => {
    setSvgColor(color);
  };
  useEffect(() => {
    if (image) {
      // Create an object URL for the uploaded image
      imageObjectURL.current = URL.createObjectURL(image);
      setFrame({ translate: [0, 0], scale: [1, 1], rotate: 0 });
    }

    return () => {
      // Revoke the object URL when the component unmounts
      if (imageObjectURL.current) {
        URL.revokeObjectURL(imageObjectURL.current);
      }
    };
  }, [image]);

  const constrainDrag = (beforeTranslate) => {
    const tshirtRect = tshirtRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();

    const minX = tshirtRect.left - imageRect.left + frame.translate[0];
    const maxX = tshirtRect.right - imageRect.right + frame.translate[0];
    const minY = tshirtRect.top - imageRect.top + frame.translate[1];
    const maxY = tshirtRect.bottom - imageRect.bottom + frame.translate[1];

    return [
      Math.min(maxX, Math.max(minX, beforeTranslate[0])),
      Math.min(maxY, Math.max(minY, beforeTranslate[1])),
    ];
  };

  return (
    <div className=" md:flex justify-around">
      <div className="bg-[#F1F1F1] w-2/3 p-10 rounded-xl flex justify-center relative">
        <div
          ref={imageRef}
          style={{
            position: 'absolute',
            transform: `translate(${frame.translate[0]}px, ${frame.translate[1]}px) scale(${frame.scale[0]}, ${frame.scale[1]}) rotate(${frame.rotate}deg)`,
            width: '200px',
            height: '190px',
          }}
        >
          <img src={imageObjectURL.current} alt="Uploaded" className="object-cover" />
        </div>
        <Moveable
          target={imageRef.current}
          draggable
          scalable
          rotatable
          onDrag={({ target, beforeTranslate }) => {
            const constrainedTranslate = constrainDrag(beforeTranslate);
            setFrame({ ...frame, translate: constrainedTranslate });
            target.style.transform = `translate(${constrainedTranslate[0]}px, ${constrainedTranslate[1]}px) scale(${frame.scale[0]}, ${frame.scale[1]}) rotate(${frame.rotate}deg)`;
          }}
          onScale={({ target, delta, transform }) => {
            const scale = [frame.scale[0] * delta[0], frame.scale[1] * delta[1]];
            setFrame({ ...frame, scale });
            target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px) scale(${scale[0]}, ${scale[1]}) rotate(${frame.rotate}deg)`;
          }}
          onRotate={({ target, beforeRotate }) => {
            setFrame({ ...frame, rotate: beforeRotate });
            target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px) scale(${frame.scale[0]}, ${frame.scale[1]}) rotate(${beforeRotate}deg)`;
          }}
        />
<svg
          xmlns="http://www.w3.org/2000/svg"
          ref={tshirtRef}
          width="433"
          height="403"
          viewBox="0 0 433 403"
          version="1.1"
        >
          <path
            d="M 175.831 2.670 C 173.180 3.898, 167.971 6.012, 164.255 7.368 C 158.162 9.591, 153.489 11.513, 144.500 15.492 C 142.850 16.223, 139.591 17.327, 137.258 17.947 C 131.585 19.453, 113.065 26.934, 104.995 30.980 C 94.682 36.150, 86.629 42.417, 80.909 49.725 C 77.993 53.451, 72.615 60.100, 68.958 64.500 C 63.115 71.531, 51.609 88.550, 10.341 151.199 C 4.653 159.833, -0 167.812, -0 168.929 L 0 170.959 3.843 172.920 C 14.725 178.471, 58.495 207.821, 77 221.975 C 82.775 226.392, 88.385 230.290, 89.466 230.639 L 91.431 231.272 95.093 227.146 L 98.754 223.020 99.377 226.135 C 99.720 227.848, 100 267.632, 100 314.543 C 100 361.454, 100.273 400.548, 100.607 401.418 L 101.214 403 218.138 403 L 335.063 403 335.781 401.250 C 336.550 399.379, 336.661 370.609, 336.220 287.500 C 336.069 258.900, 336.295 233.095, 336.722 230.157 L 337.500 224.813 341.388 227.907 C 346.312 231.825, 348.099 231.790, 352.747 227.686 C 354.811 225.864, 360.935 221.251, 366.355 217.436 C 371.775 213.621, 378.764 208.700, 381.886 206.500 C 385.008 204.300, 391.149 200.152, 395.531 197.283 C 399.914 194.414, 405.750 190.454, 408.500 188.483 C 411.250 186.512, 416.875 182.611, 421 179.814 C 430.931 173.080, 434 170.115, 434 167.254 C 434 165.949, 433.663 165.088, 433.250 165.339 C 432.837 165.591, 429.350 161.273, 425.500 155.745 C 421.650 150.217, 417.336 144.300, 415.914 142.597 C 406.108 130.854, 383.184 97.134, 371.418 77.145 C 365.657 67.358, 357.547 57.222, 352.833 53.918 C 351 52.633, 348.867 50.663, 348.094 49.541 C 347.321 48.418, 344.148 44.983, 341.043 41.908 L 335.398 36.315 319.949 28.657 C 310.933 24.188, 301.585 20.315, 297.500 19.357 C 290.958 17.822, 279.761 13.609, 273.972 10.505 C 272.582 9.759, 267.182 7.246, 261.972 4.919 L 252.500 0.689 216.576 0.562 L 180.652 0.436 175.831 2.670"
            stroke="none"
            fill={svgColor}
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-4xl font-bold">Your own t-shirt</p>
        <p className="w-80 text-lg">SnapShirt is an innovative mobile and web application that allows users to design custom t-shirts using their own photos. Whether you want to commemorate a special event, create personalized gifts...</p>
      <div className='flex justify-between'>
        <div className='text-xl'>

        <p className="font-semibold">More info</p>
        <div className='flex justify-start gap-2 px-2 mt-4'>
        <div
            className="w-8 h-8 bg-[#e8ebee] rounded-3xl cursor-pointer"
            onClick={() => handleColorChange('#e8ebee')}
            ></div>
          <div
            className="w-8 h-8 bg-black rounded-3xl cursor-pointer"
            onClick={() => handleColorChange('black')}
            ></div>
          <div
            className="w-8 h-8 bg-[#FF0000] rounded-3xl cursor-pointer"
            onClick={() => handleColorChange('#FF0000')}
            ></div>
          <div
            className="w-8 h-8 bg-[#00592F] rounded-3xl cursor-pointer"
            onClick={() => handleColorChange('#00592F')}
            >
          </div>
        </div>
        </div>
        <div className='text-xl'>
          <p className=" font-semibold">Size</p>
          <div className='flex justify-start gap-2 px-2 mt-4  '>
          <div className="w-12 h-8 bg-[#D9D9D9] rounded-3xl cursor-pointer font-bold flex items-center justify-center">L</div>
          <div className="w-12 h-8 bg-[#D9D9D9] rounded-3xl cursor-pointer font-bold flex items-center justify-center">XL</div>
        </div>
        </div>
        </div>
            <p className='text-center mt-5 text-xl font-bold' >35 DT</p>
      </div>
    </div>
  );
}

export default StepTwo;
