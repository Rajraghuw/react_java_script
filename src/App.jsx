import React from "react";
import InsertForm from "./insertForm";
import Showdata from "./Showdata";
import { Route, Routes } from "react-router-dom";
function App () {
return(
  <>
  <h1>this is app page</h1>
  <Routes>
    <Route index element={<InsertForm/>}/>
    <Route path="/showdata" element={<Showdata/>}/>
  </Routes>
  </>
)
}
export default App