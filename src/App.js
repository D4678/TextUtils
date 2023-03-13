import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enable or  not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <BrowserRouter>
      {<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />}
      {<Alert alert={alert} />}
      <Routes>
        <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter,Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
        <Route exact path='/about' element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
