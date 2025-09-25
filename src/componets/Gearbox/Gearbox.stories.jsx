import { fn } from "storybook/test";

import Gearbox from "./Gearbox";

export default {
  title: "Components/Gearbox",
  component: Gearbox,
  argTypes: { value: { control: "text" } },
};

const Template = (args) => <Gearbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Manual",
};
