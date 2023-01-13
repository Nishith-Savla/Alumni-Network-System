import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder20: "rounded-radius20" };
const variants = { FillBlue300: "bg-blue_300 text-white_A700" };
const sizes = {
  sm: "sm:p-[4px] md:p-[6px] p-[9px]",
  md: "p-[12px] sm:p-[6px] md:p-[8px]",
  lg: "md:p-[10px] p-[15px] sm:p-[7px]",
  xl: "md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder20"]),
  variant: PropTypes.oneOf(["FillBlue300"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder20",
  variant: "FillBlue300",
  size: "sm",
};

export { Button };
