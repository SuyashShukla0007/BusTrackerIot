import { Routes,Route } from "react-router-dom"
import Landing from "./Landing"
import BusRoute from "./BusRoute"
function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing/>}></Route>
      <Route path="/route" element={<BusRoute/>}/>

    </Routes>
  
  )
}

export default App
