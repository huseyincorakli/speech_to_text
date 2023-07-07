import React, { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const header = ({darkMode,handleDarkModeToggle}) => {
  
  return (
    <div className={`flex flex-row bg-${darkMode ? 'zinc-950' : 'slate-300'} justify-between p-6 rounded-lg`}>
      <div className={`text-5xl ${darkMode ? 'text-white' : ''}`}>S2T</div>
      <button className={`text-${darkMode ? 'white' : 'neutral-950'}`} onClick={handleDarkModeToggle}>
        {darkMode ? <LightModeIcon/> : <DarkModeIcon/>}
      </button>
    </div>
  );
};

export default header;