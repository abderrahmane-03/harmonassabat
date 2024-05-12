import './App.css'
import {Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";

function App() {

  return (
  <div>


      <Routes>
          <Route path="/NavBar" element={<NavBar/>}/>
      </Routes>
  </div>
  )
}

export default App
