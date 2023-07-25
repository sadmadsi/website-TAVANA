import React from "react"
export const Button = (props: any) => {
    const { children, onClick = () => null, className, isSecondary } = props
    let secondaryStyle = isSecondary ? 'bg-white mt-14 border-2 border-black text-black ' : '';

    return (
        <button className={"bg-black border-2 font-bold border-black items-center leading-[41px] px-[15px] py-[1px] text-white flex w-fit transition-all hover:opacity-90 " + secondaryStyle + className} onClick={onClick}>
            {children}
        </button>
    )
}