
// import About from './About';
import { useState } from 'react';
import './App.css';
import TextForm from './TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setalert]= useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  const toggleMode =()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      setTimeout(()=>{
        setalert(null);
      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      setTimeout(()=>{
        setalert(null);
      },1500);

    }
  }
  return (
   <>
 
<Navbar title="mye-app" mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Navbar/> */}
<div className="container my-3">
{/* <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          
          </Route>
        </Switch> */}
      
        <TextForm showAlert={showAlert} heading="Enter the text"  mode={mode} />
       

</div>

   </>
  );
}

export default App;
