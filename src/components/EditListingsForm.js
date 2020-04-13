import React, { Component } from "react";

class EditListingsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="edit-single-listing">
        <form className="edit-listing-form">
          <div>
            <label for="address">Address:</label>
            <input className="edit-input" type="text" name="address" placeholder="address" />
          </div>
          <div>
            <label for="address2">Address Line 2:</label>
            <input className="edit-input" type="text" name="address2" placeholder="address 2" />
          </div>
          <div>
            <label for="state">State:</label>
            <input className="edit-input" type="text" name="state" placeholder="state" />
          </div>
          <div>
            <label for="city">City:</label>
            <input className="edit-input" type="text" name="city" placeholder="city" />
          </div>
          <div>
            <label for="zip">Zip Code:</label>
            <input className="edit-input" type="text" name="zip" placeholder="zip" />
          </div>
          <div>
            <label for="price">Price:</label>
            <input className="edit-input" type="text" name="price" placeholder="price" />
            <label for="rental">Rental:</label>
            <input type="checkbox" name="rental"/>
          </div>
          <div>
            <label for="size">Size (ft²):</label>
            <input className="edit-input" type="text" name="size" placeholder="size" />
          </div>
          <div>
            <label for="bedrooms">Bedrooms:</label>
            <input className="edit-input" type="text" name="bedrooms" placeholder="bedrooms" />
          </div>
          <div>
            <label for="neighborhood">Neighborhood:</label>
            <input className="edit-input" type="text" name="neighborhood" placeholder="neighborhood" />
          </div>
          <div>
            <label for="description">Description:</label>
            <input className="edit-input" type="text" name="description" placeholder="description" />
          </div>

        </form>
        <form className="image-selection" action="/action_page.php">
          <label for="img">Select image: </label>
          <input type="file" id="img" name="img" accept="image/*" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default EditListingsForm;
