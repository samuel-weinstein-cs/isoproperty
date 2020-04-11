import React, { Component } from "react";
import { getListings } from "../services/api_helper";
import { Link } from "react-router-dom";

class EditListings extends Component {
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
        <h1>Edit Listings</h1>
        <div className="header-flex">
          <h2 className="sales">Sales</h2>
          <p className="click-img">
            <i>
              Click the address or thumbnail photo below <br /> to edit property
              details
            </i>
          </p>
        </div>
        {this.state.listings.map((listing, index) => (
          <div className="listing" key={index}>
            <Link to={`/listings/${listing.id}/edit`}>
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
              <div className="edit-image">
                <form className="image-selection" action="/action_page.php">
                  <label for="img">Select image: </label>
                  <input type="file" id="img" name="img" accept="image/*" />
                  <input className="el-img-submit" type="submit" />
                </form>
                <Link to={`/listings/${listing.id}/edit`}>
                  <img
                    className="edit-address-img"
                    src="https://frugalfrolicker.com/wp-content/uploads/2014/06/top-of-the-rock-1.jpg"
                    alt="address"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default EditListings;
