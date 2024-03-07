import { Routes, Route } from "react-router-dom";
import Register from "./pages/login-register/Register";
import { Home } from "./pages/home/Home";
import Login from "./pages/login-register/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
