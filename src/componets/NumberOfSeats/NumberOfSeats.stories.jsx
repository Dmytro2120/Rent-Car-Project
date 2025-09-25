import { fn } from "storybook/test";

import NumberOfSeats from "./NumberOfSeats";

export default {
  title: "Components/NumberOfSeats",
  component: NumberOfSeats,
  argTypes: { value: { control: "number" } },
};

const Template = (args) => <NumberOfSeats {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 6,
};
