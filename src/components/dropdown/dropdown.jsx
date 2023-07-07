import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function Dropdown({ darkMode, handleDarkModeToggle,language,setLanguage }) {
  

  const handleChange = (event) => {
    setLanguage(event.target.value)
  };

  const selectStyle = {
    backgroundColor: darkMode ? "#2A2F4F" : "#f5f5f5",
    color: darkMode ? "white" : "black",
  };
  const labelStyle = {
    color: darkMode ? "#ffffff" : "#000000",
  };
  return (
    <div className="mr-2">
      <Box style={{ maxWidth: 120, width: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" style={labelStyle}>Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={handleChange}
            style={selectStyle}
          >
            <MenuItem value={'en-US'}>English</MenuItem>
            <MenuItem value={'tr-TR'}>Türkçe</MenuItem>
            <MenuItem value={'de-DE'}>Deutsch</MenuItem>
            <MenuItem value={'es-ES'}>Español</MenuItem>
            <MenuItem value={'fr-FR'}>Français</MenuItem>
            <MenuItem value={'it-IT'}>Italiano</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Dropdown;
