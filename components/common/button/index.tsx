import React from "react";
import { twMerge } from "tailwind-merge";

export const Button = (props: any) => {
  const {
    children,
    theme,
    onClick = () => null,
    className,
    isSecondary,
    isDisabled,
  } = props;
  let secondaryStyle = isSecondary
    ? "bg-white mt-14 border-2 border-black text-black "
    : "";

  const style: any = {
    primary: "bg-[#111111] border-[2px] border-white ",
  };
  return (
    <button
      disabled={isDisabled}
      className={twMerge(
        "bg-black border-2 disabled:text-[#00000040] disabled:cursor-not-allowed leading-[43px] font-black text-[20px] border-black items-center  px-[15px] py-[8px] text-white flex w-fit transition-all hover:opacity-90 ",
        secondaryStyle,
        style[theme],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
