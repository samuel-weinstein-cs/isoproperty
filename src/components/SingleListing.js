import React, { Component } from "react";
import { getSingleListing, getListingImages } from "../services/api_helper";
import Carousel from './Carousel';

class SingleListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listingData: {},
      images: []
    };
  }

  componentDidMount = async () => {
    const [listingData, imageData] = await Promise.all([
      getSingleListing(this.props.id),
      getListingImages(this.props.id)
    ]);
    const images = imageData.map(image => image.url);
    this.setState({
      listingData,
      images
    });
  };

  render() {
    return (
      <div className="single-listing">
        <h1>Property Details</h1>
        <h2>
          <b>
            {`${this.state.listingData.address}${this.state.listingData.address2}, ${this.state.listingData.city}, ${this.state.listingData.state} ${this.state.listingData.zip}`}
          </b>
        </h2>

        <div className="single-listing-info">
          <div className="prop-details">
            <p><b>Price:</b> {`$${this.state.listingData.price} ${this.state.listingData.rental&&`per month`}`}</p>
            <p><b>Size:</b> {`${this.state.listingData.size} sq. ft`}</p>
            <p><b>Bedrooms:</b> {this.state.listingData.bedrooms}</p>
            <p><b>Neighborhood:</b> {this.state.listingData.neighborhood}</p>
            <p><b>Description:</b> {this.state.listingData.description}</p>
          </div>
        {/* <img className="single-prop-img" src="https://frugalfrolicker.com/wp-content/uploads/2014/06/top-of-the-rock-1.jpg" alt="single-listing" /> */}
        </div>
        <Carousel images={this.state.images}/>
      </div>
    );
  }
}

export default SingleListing;
