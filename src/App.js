import React from 'react';
import ColorBox from './useContext/components/ColorBox';
import { ColorProvider } from './useContext/contexts/color';
import SelectColors from './useContext/components/SelectColor';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
