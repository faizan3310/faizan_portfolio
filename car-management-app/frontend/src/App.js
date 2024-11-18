import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateCarPage from "./pages/CreateCarPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import EditCarPage from "./pages/EditCarPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreateCarPage />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
        <Route path="/car/edit/:id" element={<EditCarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
