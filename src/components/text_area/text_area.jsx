import { TextField } from '@mui/material';
import React from 'react';

const TextArea = ({ darkMode, handleDarkModeToggle,transcript }) => {
  const textFieldStyle = {
    backgroundColor: darkMode ? "#2c2c2c" : "#f5f5f5",
    color: darkMode ? "white" : "black",
  };

  const labelStyle = {
    color: darkMode ? "white" : "black",
  };

  return (
    <div className='p-7'>
      <TextField
        id="outlined-multiline-static"
        label={<span style={labelStyle}>Your Text</span>}
        multiline
        rows={4}
        value={transcript}
        fullWidth
        style={textFieldStyle}
        InputProps={{ style: { color: darkMode ? "white" : "black" } }}
      />
    </div>
  );
};

export default TextArea;
