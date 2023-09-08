import React, { useContext } from "react";
// import userContext from "./userContext";
import { NavLink } from "react-router-dom";

/** Render NavLinks to corresponding routes.
 *
 * props:
 * -
 *
 * state:none
 *
 * context:
 * -
 *
 * App -> Navigation
 */
function Navigation() {

  return (
    <nav className="Navigation">
      <div>
        <NavLink to="/"
          className="Navigation-home"
          end>
          ShareBNB
        </NavLink>

        <NavLink to="/listings"
          className="Navigation-listings"
          end>
          Listings
        </NavLink>

        <NavLink to="/newlistingform"
          className="Navigation-listings"
          end>
          Create New Listing
        </NavLink>
      </div>

    </nav >

  );

}

export default Navigation;