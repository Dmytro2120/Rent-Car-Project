import React from "react";
import "./ImageCar.css";

const ImageCar = ({ src, alt, width = 248, height = 100, ...rest }) => {
  return (
    <div className="image__wrapper" style={{ width, height }}>
      <img
        className="image__element"
        src={src}
        alt={alt}
        style={{ objectFit: "cover" }}
        {...rest}
      />
    </div>
  );
};

export default ImageCar;
