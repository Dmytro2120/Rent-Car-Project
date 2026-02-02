import { fn } from "storybook/test";
import { Card } from "../Card/Card";
import { useState } from "react";
import { Button } from "../Button/Button";
import { carsData } from "./Grid.data";
import "./Grid.css";

export const Grid = ({ carsData }) => {
  const [favourites, setFavorites] = useState([]);
  const [index, setIndex] = useState(8);

  const cars = carsData.slice(0, index);

  function handleClick(id) {
    if (favourites.includes(id)) {
      const filteredFavorites = favourites.filter((value) => value !== id);
      setFavorites(filteredFavorites);
    } else {
      setFavorites(favourites.concat([id]));
    }
  }

  function handleShowMoreCar() {
    setIndex(index + 8);
  }

  return (
    <div className="categories">
      <span className="categories-name-grid">Recomendation Car</span>
      <div className="grid">
        {cars.map((car, index) => (
          <Card
            key={index}
            favourit={favourites.includes(car.id)}
            onFavourit={() => {
              handleClick(car.id);
            }}
            name={car.name}
            type={car.type}
            image={car.image}
            fuelCapacity={car.fuelCapacity}
            gearbox={car.gearbox}
            numberOfSeats={car.numberOfSeats}
            price={car.price}
            onRent={car.onRent}
          />
        ))}
      </div>
      <div className="footer-cars">
        <span className="button-more-car">
          {cars.length === carsData.length ? null : (
            <Button
              variant="primary"
              size="medium"
              children="Show more car"
              onClick={handleShowMoreCar}
            />
          )}
        </span>
        <div className="number-car"> {carsData.length} car</div>
      </div>
    </div>
  );
};
