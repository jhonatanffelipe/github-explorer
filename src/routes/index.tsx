import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Repository from "../pages/repository";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repositories/*" element={<Repository />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
