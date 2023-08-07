import React, { useState } from 'react';

export const FunctionalColorChangingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? 'lightblue' : 'white',
    color: isHovered ? 'white' : 'black',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover Me
    </button>
  );
};

export default ColorChangingButton;