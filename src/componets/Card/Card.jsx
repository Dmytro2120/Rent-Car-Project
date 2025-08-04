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
    <div>
      {favourit} {onFavourit} {name} {type} {image} {fuelCapacity} {gearbox}
      {numberOfSeats} {price} {onRent}
    </div>
  );
};
