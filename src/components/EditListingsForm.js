import React, { Component } from "react";
import {getSingleListing, postListing, putListing} from "../services/api_helper";

class EditListingsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const listingData = await getSingleListing(this.props.id);
    this.setState(listingData);
  }

  handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    let newState;
    if(type==="checkbox"){
      newState={
        [name]: checked
      }
    } else {
      newState={
        [name]: value
      }
    }
    console.log({...this.state, ...newState});
    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    putListing(this.props.id, this.state);
  }

  render() {
    return (
      <div className="edit-single-listing">
        <form className="edit-listing-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              className="edit-input"
              type="text"
              name="address"
              placeholder="address"
              onChange={this.handleChange}
              value={this.state.address}
              />
          </div>
          <div>
            <label htmlFor="address2">Address Line 2:</label>
            <input
              className="edit-input"
              type="text"
              name="address2"
              placeholder="address 2"
              onChange={this.handleChange}
              value={this.state.address2}
              />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input
              className="edit-input"
              type="text"
              name="state"
              placeholder="state"
              onChange={this.handleChange}
              value={this.state.state}
              />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              className="edit-input"
              type="text"
              name="city"
              placeholder="city"
              onChange={this.handleChange}
              value={this.state.city}
              />
          </div>
          <div>
            <label htmlFor="zip">Zip Code:</label>
            <input
              className="edit-input"
              type="text"
              name="zip"
              placeholder="zip"
              onChange={this.handleChange}
              value={this.state.zip}
              />
          </div>
          <div className="price-input">
            <label htmlFor="price">Price:</label>
            <input
              className="edit-input price"
              type="text"
              name="price"
              placeholder="price"
              onChange={this.handleChange}
              value={this.state.price}
              />

            <div className="rental">
              <label htmlFor="rental">Rental:</label>
              <input
                type="checkbox"
                name="rental"
                onChange={this.handleChange}
                checked={this.state.rental}
                />
            </div>
          </div>

          <div>
            <label htmlFor="size">Size (ft²):</label>
            <input
              className="edit-input"
              type="text" name="size"
              placeholder="size"
              onChange={this.handleChange}
              value={this.state.size}
              />
          </div>
          <div>
            <label htmlFor="bedrooms">Bedrooms:</label>
            <input
              className="edit-input"
              type="text"
              name="bedrooms"
              placeholder="bedrooms"
              onChange={this.handleChange}
              value={this.state.bedrooms}
              />
          </div>
          <div>
            <label htmlFor="neighborhood">Neighborhood:</label>
            <input
              className="edit-input"
              type="text"
              name="neighborhood"
              placeholder="neighborhood"
              onChange={this.handleChange}
              value={this.state.neighborhood}
              />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              className="edit-input"
              type="text"
              name="description"
              placeholder="description"
              onChange={this.handleChange}
              value={this.state.description}
              />
          </div>
          <input type="submit" className="submit" value="Save Listing" />
        </form>
        <form className="image-selection">
          <label htmlFor="img">Select image: </label>
          <input
            type="file" id="img" name="img" accept="image/*" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default EditListingsForm;
