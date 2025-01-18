// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Files from "./pages/file";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Files />} />
      </Routes>
    </Router>
  );
};

export default App;
