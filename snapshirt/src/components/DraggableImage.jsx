import React, { useRef, useState } from 'react'
import Moveable from 'react-moveable';

const DraggableImage = ({ image }) => {
  const [frame, setFrame] = useState({ translate: [0, 0], scale: [1, 1], rotate: 0 });
  const imageRef = useRef();

  return (
    <div>
      <div
        ref={imageRef}
        style={{
          position: "absolute",
          transform: `translate(${frame.translate[0]}px, ${frame.translate[1]}px) scale(${frame.scale[0]}, ${frame.scale[1]}) rotate(${frame.rotate}deg)`,
          width: '200px',
          height: '200px',
        }}
      >
        <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
      </div>
      <Moveable
        target={imageRef.current}
        draggable
        scalable
        rotatable
        onDrag={({ target, beforeTranslate }) => {
          setFrame({ ...frame, translate: beforeTranslate });
        }}
        onScale={({ target, delta, transform }) => {
          const scale = [frame.scale[0] * delta[0], frame.scale[1] * delta[1]];
          setFrame({ ...frame, scale });
        }}
        onRotate={({ target, beforeRotate }) => {
          setFrame({ ...frame, rotate: beforeRotate });
        }}
      />
    </div>
  );
};

export default DraggableImage;
