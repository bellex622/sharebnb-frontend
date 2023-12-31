import { Routes, Route, Navigate } from "react-router-dom";
import Listings from "./Listings";
import ListingDetail from "./ListingDetail";
// import { useContext } from "react";
import Homepage from "./Homepage";
import NewListingForm from "./NewListingForm";
// import SignupForm from "./SignupForm";
// import ProfileForm from "./ProfileForm";
// import userContext from "./userContext";

/**
 * Routes to different components
 * If no matching route, then redirect to homepage
 *
 * props:
 * -handleCreateNewListing: a function passed from parent component
 *
 * state: none
 *
 * context:
 * -
 *
 * App -> RoutesList -> {Listings, ListingDetail, NewListingForm}
 *
 */
function RoutesList({ handleCreateNewListing }) {
  // const { hasToken } = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listings/:id" element={<ListingDetail />} />
      <Route path="/newlistingform" element={<NewListingForm handleCreateNewListing={handleCreateNewListing} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

}

export default RoutesList;