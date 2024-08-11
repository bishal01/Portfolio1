import React, { createContext, useState } from 'react';
export const ColorContext = createContext();
export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState(false);
    const handleclick = () => {
        setColor(prevColor => !prevColor); // Use the previous state value to toggle color
      };
    return (
      <ColorContext.Provider value={{ color,handleclick }}>
        {children}
      </ColorContext.Provider>
    );
  };