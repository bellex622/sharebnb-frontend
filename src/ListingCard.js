import React from 'react';

/** Presentational Component.
 *  Provide listing card.
 *
 * Prop:
 * outdoor listing { photo_url, price, description}
 * State: none
 *
 * Listings -> ListingCard
 */

function ListingCard({ photo_url, price, description }) {

  return (
    <div className='ListingCard'>
      <div>
        <p>{description}</p>
        <p>{`${price} per day`}</p>
      </div>
      <img className='ListingCard-img' src={photo_url} />
    </div>
  );
}

export default ListingCard;