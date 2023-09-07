import React, { useContext } from "react";
// import userContext from "./userContext";
import { NavLink } from "react-router-dom";


function Navigation() {

return (
  <nav className="Navigation">
    <div>
      <NavLink to="/"
        className="Navigation-home"
        end>
        ShareBNB
      </NavLink>

        <NavLink to="/signup"
          className="Navigation-listings"
          end>
          Listings
        </NavLink>
    </div>

</nav >




)

}

export default Navigation;