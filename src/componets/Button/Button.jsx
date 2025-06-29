import "./Button.css";
import clsx from "clsx";

const variants = ["primary", "secondary", "minimal"];

export const Button = ({ variant, onClick }) => {
  // console.log(variant, !variant);
  console.log(variant, variants.includes(variant));
  if (!variant || !variants.includes(variant))
    throw new Error("The 'variant' prop is required.");

  return (
    <button
      className={clsx(
        variant === "primary" && "button-primary",
        variant === "secondary" && "button-secondary",
        variant === "minimal" && "button-minimal",
      )}
      onClick={onClick}
    >
      Label
    </button>
  );
};

export default Button;
