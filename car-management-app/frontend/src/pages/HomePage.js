import '../styles/HomePage.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:5000/api/cars", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCars(response.data);
      } catch (error) {
        alert("Error fetching cars!");
      }
    };
    fetchCars();
  }, []);

  const handleSearch = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/cars/search?query=${searchQuery}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCars(response.data);
    } catch (error) {
      alert("Error during search!");
    }
  };

  return (
    <div className="home-container">
      <div className="home-search-bar">
        <input
          type="text"
          className="home-search-input"
          placeholder="Search cars"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="home-search-button" onClick={handleSearch}>
          Search
        </button>
        <button className="home-create-button" onClick={() => navigate("/create")}>
          Create New Car
        </button>
      </div>
      <div className="home-cars-container">
        {cars.map((car) => (
          <div
            key={car._id}
            className="home-car-card"
            onClick={() => navigate(`/car/${car._id}`)}
          >
            <h2 className="home-car-title">{car.title}</h2>
            <p className="home-car-description">{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
