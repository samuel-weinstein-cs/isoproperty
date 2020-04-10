import React, { Component } from "react";
import { getListings, getSingleListing } from "../services/api_helper";

class SingleListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singleListing: {},
      listing: null,
      currentListing: null,
      listingId: null
    };
  }

  componentDidMount = async () => {
    await getListings();
    const singleListing = await getSingleListing(this.props.id);
    this.setState({
      singleListing
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
        <h2>
          <b>
            {this.state.singleListing.address}
            {this.state.singleListing.address2} {this.state.singleListing.state}
            {this.state.singleListing.city} {this.state.singleListing.zip}
          </b>
        </h2>
        <div className="single-listing-info">
        <p className="prop-details">
          <span><b>Price:</b> {this.state.singleListing.price}</span>
          <span><b>Rental:</b> {this.state.singleListing.rental}</span>
          <span><b>Size:</b> {this.state.singleListing.size}</span>
          <span><b>Bedrooms:</b> {this.state.singleListing.bedrooms}</span>
          <span><b>Neighborhood:</b> {this.state.singleListing.neighborhood}</span>
          <span><b>Description:</b> {this.state.singleListing.description}</span>
        </p>
        <img className="single-prop-img" src="https://frugalfrolicker.com/wp-content/uploads/2014/06/top-of-the-rock-1.jpg" alt="single-listing" />
        </div>
      </div>
    );
  }
}

export default SingleListing;
