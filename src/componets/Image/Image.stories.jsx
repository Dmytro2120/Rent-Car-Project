import React from "react";
import Image from "./Image";

export default {
  title: "Components/Image",
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "/src/componets/Image/Car.png",
  alt: "Vw Image",
  width: 248,
  height: 100,
};
