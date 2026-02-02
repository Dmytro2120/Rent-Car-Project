import { fn } from "storybook/test";

import Price from "./Price";

export default {
  title: "Components/Price",
  component: Price,
  argTypes: { value: { control: "number" } },
};

const Template = (args) => <Price {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 80.0,
};
