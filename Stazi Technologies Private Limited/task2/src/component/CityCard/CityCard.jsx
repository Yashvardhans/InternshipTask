import React, { useState } from "react";
import { Link } from "react-router-dom";

import propertyData from "../../data";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";

import "./CityCard.css";

const CityCard = () => {
  const [selectedCity, setSelectedCity] = useState("New York");

  const [propertiesToShow, setPropertiesToShow] = useState(6);//default display 6 properties

  const handleCityButtonClick = (cityName) => {
    setSelectedCity(cityName);
    setPropertiesToShow(6);
    // console.log(displayedProperties);
  };

  const handleShowMore = () => {
    const remainingProperties = allProperties.slice(propertiesToShow);
    const nextPropertiesToShow = Math.min(remainingProperties.length, 3);
      
    // function for the show more button 

    setPropertiesToShow(propertiesToShow + nextPropertiesToShow);
  };

  const selectedCityData = propertyData.find(
    (city) => city.cityName === selectedCity
  );//searching for data that has same city name as selected city

  const allProperties = selectedCityData ? selectedCityData.allProperty : [];
  // console.log(selectedCityData);
  // Check if selectedCityData exists, if yes, assign allProperty, otherwise assign an empty array

  const displayedProperties = allProperties.slice(0, propertiesToShow);// Slice the 'allProperties' array to display only the first 'propertiesToShow' items

  return (
    <div>
      <div className="city-buttons">
        <div className="buttons">
          <button
            onClick={() => handleCityButtonClick("New York")}
            className={selectedCity === "New York" ? "active" : ""}
          >
            New York
          </button>
          <button
            onClick={() => handleCityButtonClick("London")}
            className={selectedCity === "London" ? "active" : ""}
          >
            London
          </button>
          <button
            onClick={() => handleCityButtonClick("Mumbai")}
            className={selectedCity === "Mumbai" ? "active" : ""}
          >
            Mumbai
          </button>
          <button
            onClick={() => handleCityButtonClick("Paris")}
            className={selectedCity === "Paris" ? "active" : ""}
          >
            Paris
          </button>
        </div>
        <div className="view-more">View More</div>
      </div>
      {selectedCity && (
        <div>
          <div className="property-card-container">
            {/* iterate the displayedProperties array */}
            {displayedProperties.map((cityProperty, index) => (
              <div className="property-card" key={index}>
                <div className="image-section">
                  <div className="sale-type">{cityProperty.saleType}</div>
                  <button className="favorite-button">
                    <FavoriteBorderOutlinedIcon />
                  </button>
                  <img
                    src={cityProperty.image}
                    alt="londonProperty"
                    className="property-image"
                  />
                </div>
                <div className="property-address-container">
                  <div className="property-street-name">
                    <PlaceOutlinedIcon /> {cityProperty.address.streetName}
                  </div>
                  <div className="property-full-address">
                    {cityProperty.address.fullAddress}
                  </div>
                </div>

                <div className="property-specs">
                  <div className="property-specs-item">
                    <DomainOutlinedIcon />{" "}
                    {cityProperty.propertySpecs.totalRooms} Rooms
                  </div>
                  <div className="property-specs-item">
                    <BedOutlinedIcon /> {cityProperty.propertySpecs.totalBeds}{" "}
                    Beds
                  </div>
                  <div className="property-specs-item">
                    <BathtubOutlinedIcon />{" "}
                    {cityProperty.propertySpecs.totalBath} Bath
                  </div>
                  <div className="property-specs-item">
                    <OpenWithOutlinedIcon />{" "}
                    {cityProperty.propertySpecs.totalArea}
                  </div>
                </div>
                <div className="property-rent-container">
                  <div className="rent-amount-container">
                    <div className="rent-amount">{cityProperty.rentAmount}</div>
                    <span>/month</span>
                  </div>
                  <Link
                    to={`/property/${selectedCity}/${cityProperty.p_id}`}
                    className="read-more-button"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="show-more">
            <button onClick={handleShowMore}>
              <HourglassTopOutlinedIcon />
              <span>Show More</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityCard;
