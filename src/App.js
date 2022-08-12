import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Login/Home/Home";
import TeacherDashboard from "./components/Login/Home/TeacherDashboard";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/teacher-dashboard"
          element={<TeacherDashboard></TeacherDashboard>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
