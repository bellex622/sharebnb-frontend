import React, { useState, useEffect } from "react";
import sharebnbApi from "./api";
import { useParams } from 'react-router-dom';
import './ListingDetail.css';


/** Presentational Component.
 *  Provide listing detail.
 *
 * Prop:
 * outdoor listing { photo_url, price, description}
 * State: none
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