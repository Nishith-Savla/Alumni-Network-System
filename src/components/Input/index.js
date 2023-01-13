import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillBlue50: "bg-blue_50",
  FillWhiteA702: "bg-white_A702",
};
const shapes = {
  srcRoundedBorder20: "rounded-radius20",
  CircleBorder22: "rounded-radius22",
};
const sizes = {
  smSrc:
    "md:pb-[12px] pb-[18px] sm:pb-[9px] pt-[12px] sm:pt-[6px] md:pt-[8px] px-[12px] sm:px-[6px] md:px-[8px]",
  mdSrc:
    "pb-[13px] sm:pb-[6px] md:pb-[8px] md:pt-[11px] pt-[17px] sm:pt-[9px] px-[13px] sm:px-[6px] md:px-[8px]",
  sm: "md:pb-[10px] pb-[15px] sm:pb-[7px] pt-[10px] sm:pt-[5px] md:pt-[6px] px-[10px] sm:px-[5px] md:px-[6px]",
  md: "pb-[10px] sm:pb-[5px] md:pb-[6px] md:pt-[10px] pt-[15px] sm:pt-[7px] px-[10px] sm:px-[5px] md:px-[6px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder20", "CircleBorder22"]),
  variant: PropTypes.oneOf(["srcFillBlue50", "FillWhiteA702"]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "srcRoundedBorder20",
  variant: "srcFillBlue50",
  size: "smSrc",
};

export { Input };
