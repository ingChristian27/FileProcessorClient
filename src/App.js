import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilesPage from "./pages/file/file";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
