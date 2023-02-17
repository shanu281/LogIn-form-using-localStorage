import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
