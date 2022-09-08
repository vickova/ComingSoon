import React from "react";
import ComingSoon from "./pages/ComingSoon";
import { Route, Routes } from "react-router-dom";

function App(){

  return (
    <div className="App" style={{fontFamily:'sans-serif', backgroundColor:'#FFF'}}>
      <Routes>
        <Route path='/' element={<ComingSoon/>}/>
      </Routes>
    </div>
  );
}

export default App;
