import React from "react";
import ComingSoon from "./pages/ComingSoon";
import { Security } from "./pages/Security";
import { Route, Routes } from "react-router-dom";

function App(){

  return (
    <div className="App" style={{fontFamily:'sans-serif', backgroundColor:'#FFF'}}>
      <Routes>
        <Route path='/' element={<ComingSoon/>}/>
        <Route path='/security' element={<Security/>}/>
      </Routes>
    </div>
  );
}

export default App;
