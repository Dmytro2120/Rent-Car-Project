export const Card = ({
  favorit,
  onFavorit,
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
      {favorit} {onFavorit} {name} {type} {image} {fuelCapacity} {gearbox}
      {numberOfSeats} {price} {onRent}
    </div>
  );
};
