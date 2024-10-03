import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Details from "./components/Details";
import { AppProvider } from "./store/context";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/characters/:uid" element={<Details type="people" />} />
          <Route path="/planets/:uid" element={<Details type="planets" />} />
          <Route path="/vehicles/:uid" element={<Details type="vehicles" />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;


