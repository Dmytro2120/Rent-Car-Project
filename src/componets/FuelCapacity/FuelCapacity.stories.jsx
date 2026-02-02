import { fn } from "storybook/test";

import FuelCapacity from "./FuelCapacity";

export default {
  title: "Components/FuelCapacity",
  component: FuelCapacity,
  argTypes: { value: { control: "number" } },
};

const Template = (args) => <FuelCapacity {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 80,
};
