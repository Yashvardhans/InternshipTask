import React from "react";
import { useParams } from "react-router-dom";

//importing dataset
import propertyData from "../../data";

import "./PropertyDetail.css";

const PropertyDetail = () => {
  const { selectedCity, p_id } = useParams(); //using the values passed in the route

  const selectedCityData = propertyData.find(
    (city) => city.cityName === selectedCity
  ); //searching for data that has same city name as selected city

  if (!selectedCityData) {
    return <div>City not found</div>;
  } //if city not found show the above message

  const selectedProperty = selectedCityData.allProperty.find(
    (property) => property.p_id === Number(p_id)
  ); //searching through the selected city data to find the property that has same id (in this case p_id) 
    //to match the id in route

  if (!selectedProperty) {
    return <div>Property not found</div>;
  }//if property not found show above message

  return (
    <div className="property-detail">
      <h1>Property Details</h1>
      <div className="property-card property-item">
        <div className="image-section">
          <img
            src={selectedProperty.image}
            alt="Property"
            className="property-image"
          />
        </div>
        <div className="property-address-container">
          <div className="property-street-name">
            <strong>Street Name:</strong> {selectedProperty.address.streetName}
          </div>
          <div className="property-full-address">
            <strong>Full Address:</strong>{" "}
            {selectedProperty.address.fullAddress}
          </div>
        </div>
        <div className="property-specs">
          <div className="property-specs-item">
            <strong>Total Rooms:</strong>{" "}
            {selectedProperty.propertySpecs.totalRooms} Rooms
          </div>
          <div className="property-specs-item">
            <strong>Total Beds:</strong>{" "}
            {selectedProperty.propertySpecs.totalBeds} Beds
          </div>
          <div className="property-specs-item">
            <strong>Total Bath:</strong>{" "}
            {selectedProperty.propertySpecs.totalBath} Bath
          </div>
          <div className="property-specs-item">
            <strong>Total Area:</strong>{" "}
            {selectedProperty.propertySpecs.totalArea}
          </div>
        </div>
        <div className="property-rent-container">
          <div className="rent-amount-container">
            <div className="rent-amount">{selectedProperty.rentAmount}</div>
            <span>/month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
