import { fn } from "storybook/test";

import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = {
  args: {
    favourit: true,
    onFavourit: fn,
    name: "CR-V",
    type: "SUV",
    image: null,
    fuelCapacity: 80,
    gearbox: "Manual",
    numberOfSeats: "6 People",
    price: 80.0,
    onRent: fn,
  },
};
