import React, { useState, useEffect } from "react";
import sharebnbApi from "./api";
import { useParams } from 'react-router-dom';
import './ListingDetail.css';


/** Presentational Component.
 *  Provide listing detail.
 *
 * Props:
 * -
 *
 * State:
 * - listingDetail: an object of listing detail for a single listing
 *  ->{listing: {id, title, username, images, price, description,
 * is_reserved}}
 *  where images is an array of image objects [{id,image_url},{...}]
 *
 * RoutesList -> ListingDetail
 */
function ListingDetail() {

  const { id } = useParams();

  const [listingDetail, setListingDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log("listingDetail", listingDetail)



  useEffect(function fetchListingDetailWhenMounted() {
    async function fetchListingDetail() {

      const listingDetailResult = await sharebnbApi.getListingDetail(id);
      setListingDetail(listingDetailResult);
      setIsLoading(false);

    }
    fetchListingDetail();
  }, [id]);


  if (isLoading) return <i>Loading...</i>;



  return (
    <div className="ListingDetail">
      <p>{listingDetail.description}</p>
      <p>{listingDetail.price}</p>
      {listingDetail.images.map(image => <img key={image.id}src={image.image_url} />)}
      <p>contact {listingDetail.username}</p>
    </div>
  );
}

export default ListingDetail;