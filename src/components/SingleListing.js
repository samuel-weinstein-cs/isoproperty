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
                {this.state.singleListing.address}{this.state.singleListing.address2} {this.state.singleListing.state}
                {this.state.singleListing.city} {this.state.singleListing.zip}
              </b>
            </h2>
      </div>
    );
  }
}

export default SingleListing;
