// import React,{useEffect, useRef}from 'react'
// import './style.css'
// function Useref() { 
//     const inputRef=useRef(null)

    


//     useEffect(()=>{


//         //focus the input element
//         inputRef.current.focus()

//     },[])
//   return (
//     <div>

//         <input ref={inputRef} type="text" />
      
//     </div>
//   )
// }

// export default Useref;



import ReactDOM from "react-dom/client";
import React,{ useRef}from 'react'
import './style.css'

export default function Useref() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Useref/>);
