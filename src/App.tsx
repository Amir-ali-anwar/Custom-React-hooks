// import ToggleComponent from "./01-useToggle/ToggleComponent";
import FetchComponent from './Hooks/02-useFetch/FetchComponent' 
import ConditionalComponent from './components/ConditionalComponent'
import "./App.css";
import { useState } from 'react';

function App() {
  const [toggle,SetToggle]= useState<string| Boolean>(false)
  console.log('render');
  
  return (
    <>
      {/* <ToggleComponent /> */}
      {/* <FetchComponent /> */}
     {toggle && <ConditionalComponent />} 
     <div className='btn-container'>

      <button className='btn' onClick={()=>SetToggle(!toggle)}>Click me</button>
     </div>
    </>
  );
}

export default App;
