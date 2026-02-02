import "./Button.css";
import clsx from "clsx";

const variants = ["primary", "secondary", "minimal"];
const size = ["small", "medium", "large"];
const defaultChildren = "Lable";

export const Button = ({
  variant,
  onClick,
  size,
  disabled,
  children,
  icon,
  className,
}) => {
  // console.log(variant, !variant);
  // console.log(variant, variants.includes(variant));
  if (!variant || !variants.includes(variant))
    throw new Error("The 'variant' prop is required.");

  return (
    <button
      className={clsx(
        "button",
        variant === "primary" && "button-primary",
        variant === "secondary" && "button-secondary",
        variant === "minimal" && "button-minimal",
        size === "small" && "button-size-small",
        size === "medium" && "button-size-medium",
        size === "large" && "button-size-large",
        icon && !children && "button-icon-only",
        className
      )}
      onClick={onClick}
      disabled={disabled}

    >
      {icon} {children}
    </button>
  );
};
