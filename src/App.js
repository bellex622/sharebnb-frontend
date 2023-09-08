import './App.css';
import React, { useState, useEffect } from "react";
// import userContext from "./userContext";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import decode from "jwt-decode";
import sharebnbApi from './api';

function App() {
  async function handleCreateNewListing(formData) {
    const listing = await sharebnbApi.createNewListing(formData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList handleCreateNewListing={handleCreateNewListing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
