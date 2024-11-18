import '../styles/CreateCarPage.css';
import React, { useState } from "react";
import axios from "axios";

function CreateCarPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("title", formData.title);
    formDataWithFiles.append("description", formData.description);
    formDataWithFiles.append("tags", formData.tags);
    for (const image of formData.images) {
      formDataWithFiles.append("images", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/cars",
        formDataWithFiles,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Car created successfully!");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="create-car-container">
      <form className="create-car-form" onSubmit={handleSubmit}>
        <h2 className="create-car-title">Create a New Car</h2>
        <input
          type="text"
          name="title"
          className="create-car-input"
          placeholder="Car Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="create-car-textarea"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tags"
          className="create-car-input"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleChange}
        />
        <input
          type="file"
          name="images"
          className="create-car-file"
          multiple
          onChange={handleImageUpload}
        />
        <button type="submit" className="create-car-button">Create Car</button>
      </form>
    </div>
  );
}

export default CreateCarPage;
