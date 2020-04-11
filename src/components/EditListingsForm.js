import React, { Component } from "react";

class EditListingsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="edit-single-listing">
        <div className="input-labels">
          <p>Address:</p>
          <p>Address2:</p>
          <p>State:</p>
          <p>City:</p>
          <p>Zip:</p>
          <p>Price:</p>
          <p>Rental:</p>
          <p>Size:</p>
          <p>Bedrooms:</p>
          <p>Neighborhood:</p>
          <p>Description:</p>
        </div>
        <form className="edit-listing-form">
          <input
            className="edit-input"
            type="text"
            name="address"
            placeholder="address"
          />
          <input
            className="edit-input"
            type="text"
            name="address2"
            placeholder="address2"
          />
          <input
            className="edit-input"
            type="text"
            name="state"
            placeholder="state"
          />
          <input
            className="edit-input"
            type="text"
            name="city"
            placeholder="city"
          />
          <input
            className="edit-input"
            type="text"
            name="zip"
            placeholder="zip"
          />
          <input
            className="edit-input"
            type="text"
            name="price"
            placeholder="price"
          />
          <div className="rental">
            <input type="checkbox" id="true" name="true" value="true" />
            <label for="true">True</label>
            <input type="checkbox" id="false" name="false" value="false" />
            <label for="false">False</label>
          </div>
          <input
            className="edit-input"
            type="text"
            name="size"
            placeholder="size"
          />
          <input
            className="edit-input"
            type="text"
            name="bedrooms"
            placeholder="bedrooms"
          />
          <input
            className="edit-input"
            type="text"
            name="neighborhood"
            placeholder="neighborhood"
          />
          <input
            className="edit-input"
            type="text"
            name="description"
            placeholder="description"
          />
        </form>
      </div>
    );
  }
}
export default EditListingsForm;
