import { useState } from "react";
import "./NawBar.css";
import { carsData } from "../Grid/Grid.data";

const TYPE_OPTIONS = [
  { id: "sport", label: "Sport" },
  { id: "suv", label: "SUV" },
  { id: "mpv", label: "MPV" },
  { id: "sedan", label: "Sedan" },
  { id: "coupe", label: "Coupe" },
  { id: "hatchback", label: "Hatchback" },
];

const CAPACITY_OPTIONS = [
  { id: "2_person", label: "2 Person" },
  { id: "4_person", label: "4 Person" },
  { id: "6_person", label: "6 Person" },
  { id: "8_or_more", label: "8 or More" },
];
const min = 0;
const max = 150;

export const NawBar = () => {
  const [filters, setFilters] = useState(() => {
    const initial = {};

    [...TYPE_OPTIONS, ...CAPACITY_OPTIONS].forEach(
      (item) => (initial[item.id] = false),
    );

    return initial;
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const [price, setPrice] = useState(100);

  const countByType = (type) =>
    carsData.filter((car) => {
      if (typeof car.type !== "string") return false;
      return car.type === type;
    }).length;

  const countByCapacity = (capacityId) => {
    switch (capacityId) {
      case "2_person":
        return carsData.filter(
          (car) =>
            typeof car.numberOfSeats === "number" && car.numberOfSeats === 2,
        ).length;
      case "4_person":
        return carsData.filter(
          (car) =>
            typeof car.numberOfSeats === "number" && car.numberOfSeats === 4,
        ).length;
      case "6_person":
        return carsData.filter(
          (car) =>
            typeof car.numberOfSeats === "number" && car.numberOfSeats === 6,
        ).length;
      case "8_or_more":
        return carsData.filter(
          (car) =>
            typeof car.numberOfSeats === "number" && car.numberOfSeats >= 8,
        ).length;
      default:
        return 0;
    }
  };

  return (
    <div className="bar-select">
      <fieldset>
        <legend>TYPE</legend>

        {TYPE_OPTIONS.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              name={item.id}
              checked={filters[item.id]}
              onChange={handleChange}
            />
            <label htmlFor={item.id}>
              {item.label} ({countByType(item.label)})
            </label>
          </div>
        ))}
      </fieldset>

      <fieldset>
        <legend>CAPACITY</legend>

        {CAPACITY_OPTIONS.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              name={item.id}
              checked={filters[item.id]}
              onChange={handleChange}
            />
            <label htmlFor={item.id}>
              {item.label} ({countByCapacity(item.id)})
            </label>
          </div>
        ))}
      </fieldset>
      <div>
        <fieldset>
          <legend>PRICE</legend>
          <input
            className="range-price"
            type="range"
            id="price"
            name="price"
            min={min}
            max={max}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{
              "--fill-percent": `${((price - min) / (max - min)) * 100}%`,
            }}
          />
          <label htmlFor="price">Max. ${price.toFixed(2)}</label>
        </fieldset>
      </div>
    </div>
  );
};
