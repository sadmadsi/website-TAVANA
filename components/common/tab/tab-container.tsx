import { FC, useState } from "react";
import React from "react";
import { twMerge } from 'tailwind-merge'

export const Tabs: FC<{ children: React.ReactElement[]; className?: string, mobileResposive?: boolean, containerBackGround?: string }> = ({ children, className, mobileResposive = true, containerBackGround }) => {
    const [wasActive, setWasActive] = useState(1)

    function tabValidator(tab: React.ReactElement): boolean {
        const type = tab.type as React.FunctionComponent;
        return type.displayName === "Tab";
    }

    return (
        <>
            <div className={twMerge(`${mobileResposive ? 'hidden lg:flex lg:flex-row lg:space-x-5 space-x-0 space-x-reverse flex-col lg:space-y-0 space-y-5 ' : 'flex flex-row lg:space-x-5 space-x-0 space-x-reverse'} container `, className)}>
                {
                    children?.map((item) => {
                        return (
                            <>
                                {tabValidator(item) && (item)}
                            </>
                        );
                    })
                }
            </div>
            <div className={twMerge(`${mobileResposive ? 'hidden lg:block' : 'block'} h-fit border-t-2 border-current`, containerBackGround)}>
                {children.map((item, i) => {
                    if (item.props.isActiveTab && wasActive !== i + 1) {
                        setWasActive(i + 1)
                    }
                    return (
                        <div key={i} className={`${item.props.isActiveTab ? "visible" : "hidden"}`}>
                            {item.props.component}
                        </div>);
                })
                }
            </div>
            {mobileResposive ? <div className={twMerge("container lg:hidden flex flex-col space-y-5 " + className)}>
                {children?.map((item, i) => {
                    return (
                        <div className="border-2 border-black overflow-hidden animation-height  duration-200" key={i}>
                            {tabValidator(item) && (item)}
                            <div key={i} className={`animation-height duration-200 ${item.props.isActiveTab ? "max-h-[1000px]" : "max-h-0"}`}>
                                {item.props.component}
                            </div>
                        </div>
                    );
                })}
            </div> : null}
        </>
    );
};