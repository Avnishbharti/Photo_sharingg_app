// import Landing from "./landing.png"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Postview from "./Postview"
import Form from "./Form"
import Landing from "./landingpage"
const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Landing/>}></Route>
      <Route path="/Postview" element={<Postview/>}></Route>
      <Route path="/Form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App
