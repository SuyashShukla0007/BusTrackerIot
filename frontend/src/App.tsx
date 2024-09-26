import { Routes,Route } from "react-router-dom"
import Landing from "./Landing"
import BusRoute from "./BusRoute"
import Sign from "./Sign"
import Login from "./Login"
function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing/>}></Route>
      <Route path="/route" element={<BusRoute/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
  
  )
}

export default App
