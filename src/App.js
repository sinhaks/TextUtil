import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import Alert from "./Components/Alert";
import { BrowserRouter as Router,
Route, 
Routes} from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');
  const[alert,setAlert]= useState(null)
  
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert('Dark Mode Enabled', 'success');
      document.title='TextUtils-DarkMode'
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert('Light Mode Enabled', 'success');
      document.title='TextUtils-LightMode'
    }
  }

  return (
    <>
     <Router>
     <Navbar title="TextUtil" aboutText="About Us"  mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
      <Routes>
        <Route exact path='/'
        element={ <TextBox showAlert={showAlert} heading="Enter Your Text Below" mode={mode}/>}
        /> 
        <Route exact path='/about'
        element={<About/>}
        />
      </Routes>
     </div>
     </Router>    
    </>
  );
} 

export default App;
