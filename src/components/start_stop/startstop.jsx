import React, { useState } from 'react'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const startstop = ({ darkMode, handleDarkModeToggle,setIsListening,isListening}) => {
    const iconColor = darkMode ? 'white' : 'black';
    const spanColor = darkMode ? 'text-white' : 'text-black';
    const handleStopClick = () => {
      setIsListening(false);
    };
  
    const handleListenClick = () => {
      setIsListening(true);
    };
  return (
    <div className="flex gap-4 sm:gap-8">
      <button className="flex flex-col items-center" onClick={handleListenClick}>
      {isListening ? (
          <RecordVoiceOverIcon style={{ fontSize: 32, color: 'red' }} />
        ) : (
          <PlayCircleFilledWhiteIcon style={{ fontSize: 32, color: iconColor }} />
        )}
        <span className={spanColor}>Listen</span>
      </button>
      <button className="flex flex-col items-center" onClick={handleStopClick}>
        <StopCircleIcon style={{ fontSize: 32, color: iconColor  }} />
        <span className={spanColor}>Stop</span>
      </button>
    </div>
  )
}

export default startstop
