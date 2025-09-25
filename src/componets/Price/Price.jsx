import "./Price.css";

const Price = ({ value }) => (
  <div className="price">
    <span className="price__value">${parseFloat(value).toFixed(2)}/ </span>
    <span className="price__day">day</span>
  </div>
);
export default Price;
