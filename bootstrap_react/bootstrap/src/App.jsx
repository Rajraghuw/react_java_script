import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Service from "./Service"
function App(){
  return(
  <>
    <Routes>
      <Route index element={<Header/>}/>
      <Route path="/Service" element={<Service/>}/>
    </Routes>
  </>
  )
}
export default App

