import { fn } from "storybook/test";

import { CarBasicInfo } from "./CarBasicInfo";
import { useArgs } from "storybook/internal/preview-api";

export default {
  title: "Components/CarBasicInfo",
  component: CarBasicInfo,
  args: { name: "CR-V", type: "SUV" },
};

export const Default = {};
