import React, { Dispatch, ReactNode,SetStateAction } from "react";
import { twMerge } from 'tailwind-merge'

export type TabProps = {
    renderTab: ((tabIndex: number) => ReactNode) | ReactNode;
    isActiveTab: boolean;
    index: number;
    setActiveTab: Dispatch<SetStateAction<{currentTab: number,direction:number}>>;
    component: ReactNode;
    className?: string;
};

export function Tab(props: TabProps) {
    const { renderTab, isActiveTab, index, setActiveTab, className } = props;

    const setNewValue=(prevState:any):{currentTab:number,direction:number}=>{
        return ({currentTab: index,direction:prevState.currentTab-index})
    }
    return (
        <button
            className={twMerge(
                `lg:text-center text-right focus:outline-0 w-full lg:w-auto lg:px-10 px-5 transition-all duration-100 lg:translate-y-0.5 py-4 font-[farhang] text-[18px] font-[900]`,
                className
            )}
            onClick={() => {
                isActiveTab ? setActiveTab({currentTab: -1,direction:1}) :
                    setActiveTab(setNewValue)
            }}
        >
            {typeof renderTab == "function" ? renderTab(index) : renderTab}
        </button>
    );
}

Tab.displayName = "Tab";