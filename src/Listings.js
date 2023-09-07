import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import sharebnbApi from './api';
import { Link } from 'react-router-dom';

const BASE_URL = "http://localhost:5001";

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

  const displayListings = listings.data.map(({ id, photo_url, price, description }) =>
    <Link key={id} to={`/listings/${id}`}>
      <ListingCard photo_url={photo_url} description={description} price={price} />
    </Link>);


  return (
    <div className="List">
      {displayListings}
    </div>
  );

}

export default Listings;