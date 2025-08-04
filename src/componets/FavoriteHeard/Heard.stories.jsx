import { fn } from "storybook/test";

import { Heard } from "./Heard";

export default {
  title: "Components/Heard",
  component: Heard,
  args: { onClick: fn(), value: true },
};

export const Default = {
  args: { value: true },
};
