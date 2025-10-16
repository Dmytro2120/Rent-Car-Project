import { Button } from "../Button/Button";
import { CarBasicInfo } from "../CarBasicInfo/CarBasicInfo";
import { Heard } from "../FavoriteHeard/Heard";
import FuelCapacity from "../FuelCapacity/FuelCapacity";
import Gearbox from "../Gearbox/Gearbox";
import ImageCar from "../ImageCar/ImageCar";
import NumberOfSeats from "../NumberOfSeats/NumberOfSeats";
import Price from "../Price/Price";
import "./Card.css";

export const Card = ({
  favourit,
  onFavourit,
  name,
  type,
  image,
  fuelCapacity,
  gearbox,
  numberOfSeats,
  price,
  onRent,
}) => {
  return (
    <div className="card">
      <div className="card-top">
        <CarBasicInfo name={name} type={type} />
        <Heard onClick={onFavourit} value={favourit} />
      </div>

      <div className="card-iner">
        <ImageCar src={image} />

        <span className="details">
          <FuelCapacity value={fuelCapacity} /> <Gearbox value={gearbox} />
          <NumberOfSeats value={numberOfSeats} />
        </span>
      </div>
      <span className="card-footer">
        <Price value={price} />{" "}
        <Button
          variant="primary"
          size="medium"
          children="Rent Now"
          value={onRent}
        />
      </span>
    </div>
  );
};
