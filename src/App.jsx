import Home from "./pages/Home.jsx"
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/sign/Signin.jsx"
import Signup from "./pages/sign/Signup.jsx"
import Navigation from "./components/navigation/Navigation.jsx";
import House from "./pages/view/House.jsx";
import InSide from "./pages/view/Inside.jsx";
import Board from "./pages/board/board.jsx";

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/outside" element={<House />} />
        <Route path="/inside" element={<InSide />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  )
}

export default App
