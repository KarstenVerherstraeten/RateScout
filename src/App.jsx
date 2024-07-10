import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import TakeProfitCalculator from "./pages/TakeProfit.jsx";
import Crypto from "./pages/Crypto.jsx";

function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Crypto" element={<Crypto />} /> 
        <Route path="take-profit" element={<TakeProfitCalculator />} />
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;