import { fn } from "storybook/test";
import { useArgs } from "storybook/internal/preview-api";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  render: (args) => {
    const [, setArgs] = useArgs();

    const handleChange = (value) => {
      args.onFavourit(value);
      setArgs({ favourit: value });
    };

    return <Card {...args} onFavourit={handleChange} />;
  },
};

export const Default = {
  args: {
    favourit: false,
    onFavourit: () => {},
    name: "CR-V",
    type: "SUV",
    image: "/src/assets/Car.png",
    fuelCapacity: 80,
    gearbox: "Manual",
    numberOfSeats: 6,
    price: 80.0,
    onRent: fn,
  },
};

export const Responsive = {
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },

  args: {
    favourit: false,
    onFavourit: () => {},
    name: "CR-V",
    type: "SUV",
    image: "/src/assets/Car.png",
    fuelCapacity: 80,
    gearbox: "Manual",
    numberOfSeats: 6,
    price: 80.0,
    onRent: fn,
  },
};
