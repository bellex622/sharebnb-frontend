import './App.css';
import React, { useState, useEffect } from "react";
// import userContext from "./userContext";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import decode from "jwt-decode";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navigation />
          <RoutesList />
        </BrowserRouter>
    </div>
  );
}

export default App;
