import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CareerStart from "./pages/CareerStart.jsx";
import CareerForm from "./pages/CareerForm.jsx";
import CareerTest from "./pages/CareerTest.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/career-start" element={<CareerStart/>}/>
        <Route path="/career-form" element={<CareerForm/>}/>
        <Route path="/career-test" element={<CareerTest/>}/>
      </Routes>
    </>

  );
}

export default App;
