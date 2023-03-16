import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Page3 from "./pages/Page 3";
import Dashboard from "./pages/Dashboard";
import SignInSide from "./pages/SignInSide";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign" element={<SignInSide />} />
      </Routes>
    </Router>
  );
}

export default App;
