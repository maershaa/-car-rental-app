import React from "react";
import { StyledCarsListItem } from "./StyledCarsListItem";

// Функция форматирования адреса
const formatAddress = (address) => {
  if (address) {
    const addressParts = address.split(", ");
    const [city, country] = addressParts.slice(-2);
    return `${city} | ${country}`;
  }
  return null;
};

const CarsListItem = ({
  id,
  img,
  brand,
  model,
  year,
  cost,
  functionalities,
  rentalCompany,
  address,
  type,
}) => {
  return (
    <StyledCarsListItem>
      <img src={img} alt={`${brand} ${model}`} className="custom-image" />

      <div className="carDetails">
        <p className="details">
          {brand} <span className="model">{model},</span> {year}
        </p>
        <p className="cost">{cost}</p>
      </div>

      <p className="additionalInfo">
        {formatAddress(address)} | {rentalCompany} | {type} | {model} | {id} |{" "}
        {functionalities[0]}
      </p>
//!
      <a href="https://www.youtube.com/watch?v=XQHu4UUc9-A&list=PLViULGko0FdhZ99yYnqB64F_4nVyvOPH5&index=8" target="_blank" rel="noopener noreferrer" className="LearnMoreLink">
        Learn More
      </a>
    </StyledCarsListItem>
  );
};

export default CarsListItem;
