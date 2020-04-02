import React, { Component } from "react";
import {getListings} from '../services/api_helper'

class SingleListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      listing: null,
      currentListing: null,
      listingId: null
    };
  }

  componentDidMount = async () => {
    const listings = await getListings();
    this.setState({
      listings
    });
  };

  setCurrentListing = () => {
    const currentListing = this.props.listinghs.find(
      listing => listing.id === parseInt(this.props.listingId)
    );

    this.setState({
      currentListing
    });
  };

  reset = () => {
    this.setState({
      currentListing: null
    });
  };

  setListingId = () => {
    const listingId = this.props.match.params.id;
    this.setState({
      listingId
    });
  };

  render() {
    return (
      <div className="single-listing">
        <h1>Property Details</h1>
        {this.state.listings.map(listing => (
          <div>
            <h2>
              <b>
                {listing.address} {listing.address2} {listing.state}{" "}
                {listing.city} {listing.zip}
              </b>
            </h2>
          </div>
        ))}
      </div>
    );
  }
}

export default SingleListing;
