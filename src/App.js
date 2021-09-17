import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
     }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
     // document.title = "TextUtils - Dark mode"; -------- For Dynamically changed the app title
     //  setInterval(() => {
     //    document.title = 'TextUtils Is Amazing';
     //   }, 2000);
    //    setInterval(() => {     ---------------  For animated title text
    //      document.title = 'TextUtils For Work';
    //     }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode is disabled", "success")
      //document.title = "TextUtils - Light mode";  For Dynamically changed the app title
    }
  }
  return (
   <>
{/*<Navbar title="Textutils" aboutText="About Utils"/>*/}  
<Router>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform showAlert ={showAlert} heading="Enter your thoughts" mode={mode}/>
          </Route>
        </Switch>
</div>
</Router>
</>
  );
}

export default App;
