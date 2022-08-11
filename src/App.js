import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Login/Home/Home";
import Register from "./components/Login/Register";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
