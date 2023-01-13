import React from "react";
const variantClasses = {
  h1: "font-extrabold md:text-[48px] sm:text-[48px] text-[63px]",
  h2: "font-extrabold sm:text-[41px] md:text-[47px] text-[55px]",
  h3: "sm:text-[39px] md:text-[45px] text-[53px]",
  h4: "font-bold sm:text-[37px] md:text-[43px] text-[51px]",
  h5: "font-bold sm:text-[36px] md:text-[42px] text-[46px]",
  h6: "sm:text-[32px] md:text-[38px] text-[42px]",
  body1: "font-normal sm:text-[33px] md:text-[35px] text-[37px]",
  body2: "sm:text-[28px] md:text-[30px] text-[32px]",
  body3: "font-normal sm:text-[27px] md:text-[29px] text-[31px]",
  body4: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  body5: "font-normal sm:text-[23px] md:text-[25px] text-[27px]",
  body6: "font-normal sm:text-[22px] md:text-[24px] text-[26px]",
  body7: "sm:text-[21px] md:text-[23px] text-[25px]",
  body8: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  body9: "font-normal sm:text-[19px] md:text-[21px] text-[23px]",
  body10: "font-normal sm:text-[18px] md:text-[20px] text-[22px]",
  body11: "text-[20px]",
  body12: "text-[19px]",
  body13: "text-[18px]",
  body14: "font-normal text-[17px]",
  body15: "font-normal text-[16px]",
  body16: "font-normal text-[15px]",
  body17: "font-normal text-[14px]",
  body18: "font-normal text-[13px]",
  body19: "text-[12px]",
  body20: "font-normal text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
