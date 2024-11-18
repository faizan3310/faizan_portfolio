import '../styles/EditCarPage.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditCarPage() {
  const { id } = useParams(); // Get car ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    images: [],
  });

  useEffect(() => {
    const fetchCarDetails = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:5000/api/cars/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const car = response.data;
        setFormData({
          title: car.title,
          description: car.description,
          tags: car.tags.join(", "),
          images: car.images,
        });
      } catch (error) {
        alert("Error fetching car details!");
      }
    };
    fetchCarDetails();
  }, [id]);

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
      await axios.put(`http://localhost:5000/api/cars/${id}`, formDataWithFiles, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Car updated successfully!");
      navigate("/");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <div className="edit-container">
      <h1 className="edit-title">Edit Car Details</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="edit-input"
          placeholder="Car Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="edit-textarea"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tags"
          className="edit-input"
          placeholder="Tags (comma-separated)"
          value={formData.tags}
          onChange={handleChange}
        />
        <input
          type="file"
          name="images"
          className="edit-file-input"
          multiple
          onChange={handleImageUpload}
        />
        <button type="submit" className="edit-submit-button">
          Update Car
        </button>
      </form>
    </div>
  );
}

export default EditCarPage;
