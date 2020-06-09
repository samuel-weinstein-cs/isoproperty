import React from "react";

function EditAbout(props) {
  return (
    <div>
      <h1>Edit About</h1>
      <form className="about-form" onSubmit={props.submitAbout}>
        <textarea
          className="about-input"
          type="text"
          name="editAbout"
          placeholder="About Isoproperty"
          value={props.editAbout}
          onChange={props.handleAbout}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditAbout;
