import './App.css';
import React, { useState, useEffect } from "react";
// import userContext from "./userContext";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import decode from "jwt-decode";
import sharebnbApi from './api';

/** Render the sharebnb app
 * props:
 * -
 * -
 * state:
 * -
 * -
 *
 * local storage:
 * - token: string token
 * - user: object of user data
 *
 * context:
 * -user login info
 *
 * App->{Navigation, RoutesList}
 *
 */
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
