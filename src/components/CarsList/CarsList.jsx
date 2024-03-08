import React, { useState, useEffect } from "react";
import CarsListItem from "../CarsListItem/CarsListItem";
import { StyledCarsList } from './StyledCarsList';

// Компонент списка автомобилей
const CarsList = ({ cars }) => {
  const [visibleCars, setVisibleCars] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setVisibleCars(4);
      } else if (screenWidth >= 768) {
        setVisibleCars(2);
      } else {
        setVisibleCars(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const limitedCars = cars.slice(0, visibleCars * 3);
  return (
    <StyledCarsList>

      <ul className="carsList">
      {limitedCars.map((car) => (
        <CarsListItem
          key={car.id}
          id={car.id}
          className="carsListItem"
          img={car.img}
          brand={car.make}
          model={car.model}
          year={car.year}
          cost={car.rentalPrice}
          functionalities={car.functionalities}
          rentalCompany={car.rentalCompany}
          address={car.address}
          type={car.type}
        />
      ))}
    </ul>
    </StyledCarsList>
   
  );
};

export default CarsList;
