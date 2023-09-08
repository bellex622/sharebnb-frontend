import { Routes, Route, Navigate } from "react-router-dom";
import Listings from "./Listings";
import ListingDetail from "./ListingDetail";
// import { useContext } from "react";
import Homepage from "./Homepage";
// import LoginForm from "./LoginForm";
// import SignupForm from "./SignupForm";
// import ProfileForm from "./ProfileForm";
// import userContext from "./userContext";

function RoutesList() {
  // const { hasToken } = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listings/:id" element={<ListingDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

}

export default RoutesList;