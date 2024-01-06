import React, { useState } from 'react';

function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add logic to handle the form data locally
    console.log('Category Name:', categoryName);
    console.log('Image URL:', imageUrl);

    // You can further use the data as needed, such as updating local state or displaying a confirmation message
  };

  return (
    <div className="container">
      <h3>Add New Category</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Card</button>
      </form>
    </div>
  );
}

export default AddCategory;

