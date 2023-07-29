import React from "react"
import { twMerge } from 'tailwind-merge';

export const Button = (props: any) => {
    const { children, onClick = () => null, className, isSecondary, isDisabled } = props
    let secondaryStyle = isSecondary ? 'bg-white mt-14 border-2 border-black text-black ' : '';

    return (
        <button disabled={isDisabled} className={twMerge("bg-black border-2 disabled:text-[#00000040] disabled:cursor-not-allowed font-bold border-black items-center leading-[41px] px-[15px] py-[1px] text-white flex w-fit transition-all hover:opacity-90 ", secondaryStyle, className)} onClick={onClick}>
            {children}
        </button>
    )
}