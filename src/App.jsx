import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [browserSupport, setBrowserSupport] = useState(true);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (isListening) {
      handleSpeechRecognition();
    } else {
      stopSpeechRecognition();
    }
  }, [isListening]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSpeechRecognition = () => {
    if (!window.webkitSpeechRecognition) {
      setBrowserSupport(false);
      return;
    }

    const recognitionInstance = new webkitSpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = language;

    recognitionInstance.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
    };

    recognitionInstance.start();
    setRecognition(recognitionInstance);
  };

  const stopSpeechRecognition = () => {
    if (recognition) {
      recognition.stop();
      setRecognition(null);
    }
  };

  return (
    <div className="Main">
      {browserSupport ? (
        <>
          <Header {...{ darkMode, handleDarkModeToggle }} />
          <Section
            {...{
              darkMode,
              handleDarkModeToggle,
              language,
              setLanguage,
              isListening,
              setIsListening,
              transcript,
              setTranscript
            }}
          />
          <Footer {...{ darkMode, handleDarkModeToggle }} />
        </>
      ) : (
        <p>The browser you are using is not supported.Please try again with another browser.</p>
      )}
      <ToastContainer autoClose={2000} position='top-center' />
    </div>
  );
}

export default App;
