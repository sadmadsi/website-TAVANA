import React, { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

export type TabProps = {
    renderTab: ((tabIndex: number) => ReactNode) | ReactNode;
    isActiveTab: boolean;
    index: number;
    setActiveTab: (index: number) => void;
    component: ReactNode;
    className?: string;
};

export function Tab(props: TabProps) {
    const { renderTab, isActiveTab, index, setActiveTab, className } = props;

    return (
        <button
            className={twMerge(
                `lg:text-center text-right focus:outline-0 w-full lg:w-auto lg:px-10 px-5 transition-all duration-200 lg:translate-y-0.5 py-4 font-[farhang] text-[18px] font-[900]`,
                className
            )}
            onClick={() => {
                isActiveTab ? setActiveTab(-1) :
                    setActiveTab(index)
            }}
        >
            {typeof renderTab == "function" ? renderTab(index) : renderTab}
        </button>
    );
}

Tab.displayName = "Tab";