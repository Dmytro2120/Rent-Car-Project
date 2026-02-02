import { fn } from "storybook/test";
import { useArgs } from "storybook/internal/preview-api";
import { Card_02 } from "./Card_02";

export default {
  title: "Components/Card_02",
  component: Card_02,
  render: (args) => {
    const [, setArgs] = useArgs();

    const handleChange = (value) => {
      args.onFavourit(value);
      setArgs({ favourit: value });
    };

    return <Card_02 {...args} onFavourit={handleChange} />;
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
