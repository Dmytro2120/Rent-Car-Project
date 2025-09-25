import { fn } from "storybook/test";

import { Heard } from "./Heard";
import { useArgs } from "storybook/internal/preview-api";

export default {
  title: "Components/Heard",
  component: Heard,
  args: { onClick: fn(), value: true },
};

export const Default = {
  args: { value: true },
  render: (args) => {
    const [, setArgs] = useArgs();

    const handleChange = (value) => {
      args.onClick(value);
      setArgs({ value });
    };

    return <Heard {...args} onClick={handleChange} />;
  },
};
