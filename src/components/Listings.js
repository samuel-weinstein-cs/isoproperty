import React, { Component } from "react";
import { getListings } from "../services/api_helper";
import {Link} from 'react-router-dom';

class Listings extends Component {
  constructor(props) {
    super(props);

    this.state = {
        listings: []
    };
  }

  componentDidMount = async () => {
    const listings = await getListings();
    this.setState({
      listings
    });
  };

  render() {
    return (
      <div className="listings">
        <h1>Listings</h1>
        <div className="header-flex">
          <h2 className="sales">Sales</h2>
          <p className="click-img">
            <i>
              Click the address or thumbnail photo below <br /> to see more
              property details
            </i>
          </p>
        </div>
        {this.state.listings.map((listing, index) => (
          <div className="listing" key={index}>
            <Link to={`/listings/${listing.id}`}>
              <p className="listing-title">
                <b>
                  {listing.address} {listing.address2} {listing.state}{" "}
                  {listing.city} {listing.zip}
                </b>
              </p>
            </Link>
            <div className="listing-flex-container">
              <div className="listing-flex-left">
                <p>
                  <b>Price:</b> {listing.price}
                </p>
                <p>
                  <b>Rental: </b> {listing.rental}
                </p>
                <p>
                  <b>Size: </b> {listing.size}
                </p>
              </div>
              <div className="listing-flex-right">
                <p>
                  <b>Bedrooms: </b> {listing.bedrooms}
                </p>
                <p>
                  <b>Neighborhood: </b> {listing.neighborhood}
                </p>
                <p>
                  <b>Description: </b> {listing.description}
                </p>
              </div>
              <Link to={`/listings/${listing.id}`}><img
                className="address-img"
                src="https://frugalfrolicker.com/wp-content/uploads/2014/06/top-of-the-rock-1.jpg"
                alt="address"
              /></Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Listings;
