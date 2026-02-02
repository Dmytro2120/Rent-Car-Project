import "./CarBasicInfo.css";

export const CarBasicInfo = ({ name, type }) => {
  return (
    <div className="car-basic-info">
      <span className="car-basic-info__name">{name}</span>
      <span className="car-basic-info__type">{type}</span>
    </div>
  );
};
