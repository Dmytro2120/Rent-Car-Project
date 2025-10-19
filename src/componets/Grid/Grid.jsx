import { fn } from "storybook/test";
import { Card } from "../Card/Card";
import "./Grid.css";

export const Grid = ({ cars = [] }) => {
  return (
    <div className="categories">
      <span className="categories-name-grid">Recomendation Car</span>
      <div className="grid">
        {cars.map((car, index) => (
          <Card
            key={index}
            favourit={car.favourit}
            onFavourit={car.onFavourit}
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
    </div>
  );
};
