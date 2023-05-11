import { useState } from 'react';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js';
import Alerts from './components/Alerts.js';
/*import About from './components/About.js';*/

function App() {
  const [mode,setmode]=useState('white')
  const [alert,setAlert]=useState(null)
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
   }
  let HandleMode=(a)=>{
      if(a==='#34282C'){
        if(mode==='#34282C'){
          setmode('white')
          document.body.style.backgroundColor='white'
        }else{
          setmode('#34282C')
          document.body.style.backgroundColor='#3B3131'
          showAlert('Mode Enabled','success');
        }
      }
      else if(a==='#2B3856'){
        if(mode==='#2B3856'){
          setmode('white')
          document.body.style.backgroundColor='white'
        }else{
          setmode('#2B3856')
          document.body.style.backgroundColor='#4863A0'
          showAlert('Mode Enabled','success');
        }
      }
      else if(a==='dark'){
        if(mode==='black'){
          setmode('white')
          document.body.style.backgroundColor='white'
        }else{
          setmode('black')
          document.body.style.backgroundColor='#52595D'
          showAlert('Mode Enabled','success');
        }
      }
      else {
        setmode('white')
        document.body.style.backgroundColor='white'
        showAlert('Dark Mode Disabled','danger')
      }

  }
  return (
    <>

      <Navbar title="TextUtils" option1="About" mode={mode} HandleMode={HandleMode}/>
      <Alerts alert={alert}/>
      {/*<About />*/}
      <TextForm mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
