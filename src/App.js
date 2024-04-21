import React,{useState} from 'react';
import * as Vsc from "react-icons/vsc";

function App() {

  const [inputType,setInputType]=useState('password');

  const handleClick =()=>{
    if(inputType == 'password'){
      setInputType('text')
    }else{
      setInputType('password')
    }
    
  }

  return (
    <div className="App w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="input-fields bg-white p-2 d-flex gap-2 rounded-5">
          <span onClick={handleClick} className="fs-5" role="button"  >
            {inputType == 'text'? <Vsc.VscEye /> : <Vsc.VscEyeClosed /> }
          </span>
          <input type={inputType} className="ltr" />
        </div>
    </div>
  );
}

export default App;
