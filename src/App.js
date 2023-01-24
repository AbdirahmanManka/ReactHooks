import React from "react";
import { Route, Routes } from "react-router-dom"


// import "bootstrap/dist/css/bootstrap.css";
import Todo from "./Todo";

import './style.css'
import Useref from "./Useref";
import Usememo from "./Usememo";
import Usecall from "./Usecall";

// import Counter from "./counter";
// import Usecontext from "./Compo/Usecontext";
// import Nav from "./Nav";
function App() {
   return (

    <div className="App">

      <Todo/>
      <Useref/>

      <Usememo/>
      {/* <Usecall /> */}

      {/* <Counter /> */}
      {/* <Nav/> */}
      {/* <Routes>
          
          <Route path="/UseContext" element={<Usecontext/>} />
        </Routes> */}
      



   
    </div>

    );
}
export default App;




// import './App.css';
// import AntTable from './Table';

// function App() {
//   return (
//     <div className="App">
//       <AntTable/>
//     </div>
//   );
// }

// export default App;
