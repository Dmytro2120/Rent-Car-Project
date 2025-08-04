import React from "react";

const Image = ({ src, alt, width = 248, height = 100, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ objectFit: "cover" }}
      {...rest}
    />
  );
};

export default Image;
