import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams

import Navbar from "../../component/Navbar/Navbar";
import CarCard from "../../component/CarCard/CarCard";
import Pagination from "../../component/Pagination/Pagination";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import carData from "../../data";

import "./Home.css";

const ITEMS_PER_PAGE = 6;
const TOTAL_PAGES = 10;

const Home = () => {
  const { pageNumber } = useParams();
  const parsedPageNumber = parseInt(pageNumber || 1, 10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(parsedPageNumber || 1);
  }, [parsedPageNumber]);

  const handlePageChange = () => {
    console.log(parsedPageNumber);
    setCurrentPage(parsedPageNumber);
  };

  const handleSearch = () => {
    const results = carData.filter((car) =>
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCars(results);

    if (results.length > 0) {
      const firstCarPage = Math.ceil(
        carData.indexOf(results[0]) / ITEMS_PER_PAGE
      );
      setCurrentPage(firstCarPage);
      navigate(`/page/${firstCarPage}`);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedCars = carData.slice(startIndex, endIndex);
  const displayedSearchedCars = filteredCars.slice(startIndex, endIndex);
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <SearchOutlinedIcon />
          </button>
          <div className="irrelevant">Relevance</div>
          <div className="irrelevant">All Brands</div>
        </div>

        <div className="car-section">
          {filteredCars.length > 0
            ? displayedSearchedCars.map((carInfo, index) => (
                <CarCard
                  key={index}
                  name={carInfo.name}
                  carImage={carInfo.image}
                  modelYear={carInfo.model_year}
                  seats={carInfo.seats}
                  fuelType={carInfo.fuel_type}
                  mileage={carInfo.mileage}
                  gearType={carInfo.gear_type}
                  rentPrice={carInfo.rent_price}
                />
              ))
            : displayedCars.map((carInfo, index) => (
                <CarCard
                  key={index}
                  name={carInfo.name}
                  carImage={carInfo.image}
                  modelYear={carInfo.model_year}
                  seats={carInfo.seats}
                  fuelType={carInfo.fuel_type}
                  mileage={carInfo.mileage}
                  gearType={carInfo.gear_type}
                  rentPrice={carInfo.rent_price}
                />
              ))}
        </div>
        {filteredCars.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredCars.length / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        ) : (
          <Pagination
            currentPage={parsedPageNumber}
            totalPages={TOTAL_PAGES}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
