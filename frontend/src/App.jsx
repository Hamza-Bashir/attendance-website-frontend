import MainLayout from "./layouts/MainLayout";
import {Routes, Route} from "react-router-dom"

function App(){
  return <>
  <Routes>
    <Route path="/" element={<MainLayout/>}>

    </Route>
  </Routes>
  </>
}

export default App