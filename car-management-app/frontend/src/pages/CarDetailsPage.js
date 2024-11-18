import '../styles/CarDetailsPage.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function CarDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:5000/api/cars/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCar(response.data);
      } catch (error) {
        alert("Error fetching car details!");
      }
    };
    fetchCar();
  }, [id]);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Car deleted successfully!");
      navigate("/");
    } catch (error) {
      alert("Error deleting car!");
    }
  };

  return car ? (
    <div className="details-container">
      <h1 className="details-title">{car.title}</h1>
      <p className="details-description">{car.description}</p>
      <p className="tags">
        <strong>Tags:</strong> {car.tags.join(", ")}
      </p>
      <div className="image-gallery">
        {car.images.map((image, index) => (
          <img
            key={index}
            className="car-image"
            src={`http://localhost:5000/uploads/${image}`}
            alt={`Car ${index}`}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="edit-button" onClick={() => navigate(`/car/edit/${id}`)}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <p className="loading-text">Loading...</p>
  );
}

export default CarDetailsPage;
