import React,{ FC } from "react";
import { twMerge } from 'tailwind-merge'

export const Tabs: FC<{ children: React.ReactElement[]; className?: string, mobileResposive?: boolean, containerBackGround?: string ,currentTab:any}> = ({ children, className, mobileResposive = true, containerBackGround,currentTab }) => {

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
            <div className={twMerge(`${mobileResposive ? 'hidden lg:flex' : 'flex'} border-t-2 border-current`, containerBackGround)}>
                <div className="relative min-w-[100vw]">
                    {children.map((item, i) => {
                        return (
                            <div key={i} className={twMerge(currentTab.direction<0 ? `${item.props.isActiveTab ? "relative animate-[slideInFromLeft_0.5s_ease-in-out_1_forwards] z-10": "top-0 animate-[slideOutToRight_0.5s_ease-in-out_1_forwards]"}`:`${item.props.isActiveTab ? "relative animate-[slideInFromRight_0.5s_ease-in-out_1_forwards] z-10" : "top-0 animate-[slideOutToLeft_0.5s_ease-in-out_1_forwards]"}`)}>
                                {item.props.component}
                            </div>);
                        })
                    }
                </div>
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