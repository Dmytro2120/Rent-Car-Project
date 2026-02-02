import React from "react";
import "./ImageCar.css";

const ImageCar = ({ src, alt, height = 100, ...rest }) => {
  return (
    <div className="image__wrapper" style={{ height }}>
      <img className="image__element" src={src} alt={alt} {...rest} />
    </div>
  );
};

export default ImageCar;
