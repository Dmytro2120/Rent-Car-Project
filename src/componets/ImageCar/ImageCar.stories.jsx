import React from "react";
import ImageCar from "./ImageCar";

export default {
  title: "Components/ImageCar",
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
};

const Template = (args) => <ImageCar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "/src/assets/Car.png",
  alt: "Vw Image",
  width: 248,
  height: 100,
};
