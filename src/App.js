import React,{useState} from 'react';
import * as Vsc from "react-icons/vsc";

function App() {

  const [inputType,setInputType]=useState('password');
  const [iconEye,setIconEye]=useState('hidden');
  // VscEye
  // VscEyeClosed
  const handleClick =()=>{
    if(inputType == 'password'){
      setInputType('text')
      setIconEye('show')
    }else{
      setInputType('password')
      setIconEye('hidden')
    }
    
  }

  return (
    <div className="App w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="input-fields bg-white p-2 d-flex gap-2 rounded-5">
          <span onClick={handleClick} className="fs-5" role="button"  >
            {iconEye == 'show'? <Vsc.VscEye /> : <Vsc.VscEyeClosed /> }
          </span>
          <input type={inputType} className="ltr" />
        </div>
    </div>
  );
}

export default App;
