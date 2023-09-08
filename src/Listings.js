import React, { useState, useEffect } from "react";
import ListingCard from "./ListingDetail";
import sharebnbApi from './api';
import { Link } from 'react-router-dom';

/** Renders all listings from all hosts
 *
 * props:
 * -
 *
 * state:
 * -listings: an array of listing detail object
 *  ->[{id, title, username, price, description, is_reserved},{...}]
 *
 *
 * RoutesList -> Listings
 */
function Listings() {
  console.log('do we reach here');
  const [listings, setListings] = useState({
    data: null,
    isLoading: true,
  });


  console.log("in Listings, listings= ", listings);

  async function fetchListings() {

    const fetchedListings = await sharebnbApi.getListings();

    console.log("List in fetchList, fetchedListings =", fetchedListings);

    setListings({
      isLoading: false,
      data: fetchedListings,
    });

  }


  if (listings.isLoading) {
    fetchListings();
    return <h1>Loading...</h1>;
  }


  return (
    <div className="List">
      <ul>
        {listings.data.map(
          listing =>
            <li key={listing.id}>
              <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
            </li>
        )}
      </ul>
    </div>
  );

}

export default Listings;