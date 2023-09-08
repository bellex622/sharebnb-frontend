import React, { useState } from "react";
import sharebnbApi from "./api";

function NewListingForm({ handleCreateNewListing }) {
  const initialState = {
    title: "",
    username: "",
    price: "",
    description: ""
  };

  // const { signup } = useContext(userContext);

  const [formData, setFormData] = useState(initialState);

  /** Send {title, username, price, description, images} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleCreateNewListing(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <div>
      <h1>Post New Listing</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewListingForm;