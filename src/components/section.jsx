import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from './dropdown/dropdown'
import StartStop from './start_stop/startstop'
import TextArea from './text_area/text_area'
import { Button } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const section = ({darkMode,handleDarkModeToggle,language,setLanguage,setIsListening,transcript,isListening,setTranscript}) => {
  const handleCopy = () => {
    if (!transcript) {
      toast.error('No text to copy was found!');
      return;
    }

    navigator.clipboard
      .writeText(transcript)
      .then(() => {
        toast.success('The text has been copied!');
        setTranscript('')
      })
      .catch((error) => {
        toast.error('Copy failed!');
      });
  };
  return (
    <div  className={`bg-${darkMode ? 'zinc-950' : 'slate-300'} mt-2 rounded-lg`}>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-around mt-3 p-4'>
          <Dropdown {...{ darkMode, handleDarkModeToggle ,language,setLanguage}}></Dropdown>
          <StartStop {...{ darkMode, handleDarkModeToggle,isListening,setIsListening }} ></StartStop>
        </div>
        <hr className={`border-t-1 ${darkMode ? 'border-white' : 'border-black'} w-full my-4`} />
        <TextArea {...{ darkMode, handleDarkModeToggle,transcript }} ></TextArea>
      </div>
      <div className='p-4'>
        <Button variant="outlined" startIcon={<ContentCopyIcon />} onClick={handleCopy}>
          Copy
        </Button>
      </div>
    </div>
  )
}

export default section
