import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
import CareerStart from "./pages/CareerStart.jsx";
import CareerForm from "./pages/CareerForm.jsx";
import CareerTest from "./pages/CareerTest.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import ResumeUpload from "./pages/ResumeUpload.jsx";
import Chatbot from "./pages/Chatbot.jsx";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-start" element={<CareerStart />} />
        <Route path="/career-form" element={<CareerForm />} />
        <Route path="/career-test" element={<CareerTest />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume-upload" element={<ResumeUpload />} />
        <Route
          path="/chatbot"
          element={
            <PrivateRoute>
              <Chatbot />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
