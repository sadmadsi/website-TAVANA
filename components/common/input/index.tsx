import React, { ChangeEvent, ChangeEventHandler, Dispatch } from 'react';
import { twMerge } from 'tailwind-merge';

export interface inputPropsType {
    type?: string,
    label: string,
    onChange: Function,
    value: string,
    labelClassName?: string,
    inputClassName?: string
}

export const Input = (props: inputPropsType) => {
    const { type = "text", label, onChange, value, labelClassName, inputClassName } = props

    return (
        <div className="relative z-0 h-[52px]">
            <input type={type}
                onChange={onChange as ChangeEventHandler<HTMLInputElement>}
                value={value}
                id="floating_standard"
                placeholder=" "
                className={twMerge("block px-0 w-full h-full text-sm text-mute bg-transparent border-0 border-b focus:border-black focus:outline-0 focus:ring-0 border-mute appearance-none focus:outline-none peer ", inputClassName)}
            />
            <label htmlFor="floating_standard"
                className={twMerge("absolute text-mute font-bold text-sm duration-300 transform -translate-y-8 top-7 right-0 -z-10 origin-[0] peer-placeholder-shown:translate-y-0  peer-focus:scale-90 peer-focus:translate-x-4 peer-focus:-translate-y-8", labelClassName)}>
                {label}
            </label>
        </div>
    )
}