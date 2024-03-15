import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./pages/login-register/Register";
import { Home } from "./pages/home/Home";
import Login from "./pages/login-register/Login";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "./hooks";
import { useEffect } from "react";
import { pulledUser } from "./components/layout/Header";

function App() {
  const { user } = useAppSelector((state) => state.userInfo);

  const { _id } = user as pulledUser;

  const navigate = useNavigate();

  useEffect(() => {
    if (_id) {
      navigate("/");
    }
  }, [_id, navigate]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
