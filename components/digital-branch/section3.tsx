import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Modal from "../common/modal/modal";
import { Tab } from "../common/tab/tab";
import { Tabs } from "../common/tab/tab-container";
import { Tab1 } from "./tab1";
import { Tab2 } from "./tab2";
import { Tab3 } from "./tab3";
import { Tab4 } from "./tab4";

export default function Section3() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="bg-primarytavana py-[5vw]">
            <div className="container mb-24">
                <h2>امکانات و مزایای ویژه برای بازاریابان توانا</h2>
            </div>
            <Tabs>
                <Tab className={activeTab === 1 ? 'bg-black text-white' : 'text-black'}
                    key={'item1'}
                    component={<Tab1 />}
                    renderTab={() => <div className="flex items-center">
                        {activeTab === 1 ? <ChevronDownIcon className="block lg:hidden text-white h-5 w-5 ml-5" /> : <ChevronLeftIcon className="block lg:hidden text-black h-5 w-5 ml-5" />}
                        اپلیکیشن شعبه دیجیتال توانا
                    </div>}
                    index={1}
                    isActiveTab={activeTab === 1}
                    setActiveTab={setActiveTab} />
                <Tab className={activeTab === 2 ? 'bg-black text-white' : 'text-black'}
                    key={'item2'}
                    component={<Tab2 />}
                    renderTab={() => <div className="flex items-center">
                        {activeTab === 2 ? <ChevronDownIcon className="block lg:hidden text-white h-5 w-5 ml-5" /> : <ChevronLeftIcon className="block lg:hidden text-black h-5 w-5 ml-5" />}
                        اعتبار و معامله‌گر اختصاصی
                    </div>}
                    index={2}
                    isActiveTab={activeTab === 2}
                    setActiveTab={setActiveTab} />
                <Tab className={activeTab === 3 ? 'bg-black text-white' : 'text-black'}
                    key={'item3'}
                    component={<Tab3 />}
                    renderTab={() => <div className="flex items-center">
                        {activeTab === 3 ? <ChevronDownIcon className="block lg:hidden text-white h-5 w-5 ml-5" /> : <ChevronLeftIcon className="block lg:hidden text-black h-5 w-5 ml-5" />}

                        وکیل مدافع اختصاصی
                    </div>}
                    index={3}
                    isActiveTab={activeTab === 3}
                    setActiveTab={setActiveTab} />
                <Tab className={activeTab === 4 ? 'bg-black text-white' : 'text-black'}
                    key={'item4'}
                    component={<Tab4 />}
                    renderTab={() => <div className="flex items-center">
                        {activeTab === 4 ? <ChevronDownIcon className="block lg:hidden text-white h-5 w-5 ml-5" /> : <ChevronLeftIcon className="block lg:hidden text-black h-5 w-5 ml-5" />}
                        دفتر کار رایگان
                    </div>}
                    index={4}
                    isActiveTab={activeTab === 4}
                    setActiveTab={setActiveTab} />
            </Tabs>
        </div >
    )
}