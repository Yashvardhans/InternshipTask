import React from "react";

import PeopleIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStationOutlined";
import SpeedIcon from "@mui/icons-material/SpeedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { Icon } from "@iconify/react";

import "./CarCard.css";

const CarCard = ({
  name,
  modelYear,
  carImage,
  seats,
  fuelType,
  mileage,
  gearType,
  rentPrice,
}) => {
  return (
    <div className="car-container">
      <div className="car-image">
        <img src={carImage} alt="" />
      </div>
      <div className="car-name-info">
        <div className="car-name">{name}</div>
        <div className="car-year">{modelYear}</div>
      </div>
      <div className="car-general-info">
        <div className="seats">
          <PeopleIcon></PeopleIcon> {seats}
        </div>
        <div className="fuel-type">
          <LocalGasStationIcon></LocalGasStationIcon> {fuelType}
        </div>
        <div className="mileage">
          <SpeedIcon></SpeedIcon> {mileage}
        </div>
        <div className="gear-type">
          <Icon icon="tabler:steering-wheel" width="24" height="24" />{" "}
          {gearType}
        </div>
      </div>
      <div className="car-rent-info">
        <div className="rent-price">
          <AttachMoneyOutlinedIcon />
          {rentPrice}
          <span>/ month</span>
        </div>
        <div className="rent-buttons">
          <button className="favorite-button">
            <FavoriteBorderOutlinedIcon />
          </button>
          <button className="rent-button">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
