import React, { Component } from "react";
import {
  getSingleListing,
  postListing,
  putListing,
  postImage,
} from "../services/api_helper";

class EditListingsForm extends Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
    this.state = {
      fields:{},
      images:[],
    };
  }

  async componentDidMount() {
    const listingData = await getSingleListing(this.props.id);
    this.setState({fields:listingData});
  }

  handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    let fields=this.state.fields;
    let newField;
    if(type==="checkbox"){
      newField = checked
    } else {
      newField = value
    }
    fields[name]=newField;
    this.setState({
      fields
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await putListing(this.props.id, this.state.fields);
  }

  handleFileUpload = async (e) => {
      e.preventDefault();
      const id=this.props.id;
      const file=this.fileInput.current.files[0];
      console.log(file);
      const resp = await postImage(id,file);
      console.log(resp);
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
              value={this.state.fields.address||""}
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
              value={this.state.fields.address2||""}
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
              value={this.state.fields.state||""}
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
              value={this.state.fields.city||""}
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
              value={this.state.fields.zip||""}
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
              value={this.state.fields.price||""}
              />

            <div className="rental">
              <label htmlFor="rental">Rental:</label>
              <input
                type="checkbox"
                name="rental"
                onChange={this.handleChange}
                checked={this.state.fields.rental||""}
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
              value={this.state.fields.size||false}
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
              value={this.state.fields.bedrooms||""}
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
              value={this.state.fields.neighborhood||""}
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
              value={this.state.fields.description||""}
              />
          </div>
          <input type="submit" className="submit" value="Save Listing" />
        </form>
        <form className="image-selection" onSubmit={this.handleFileUpload}>
          <label htmlFor="img">Select image: </label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            ref={this.fileInput}
            />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default EditListingsForm;
