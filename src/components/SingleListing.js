import React from "react";

function SingleListing(props) {
  return (
    <div className="single-listing">
      <h1>Property Details</h1>
      <h2>
        <b>
          {props.listing.address} {props.listing.address2} {props.listing.state}{" "}
          {props.listing.city} {props.listing.zip}
        </b>
      </h2>
    </div>
  );
}

export default SingleListing;
