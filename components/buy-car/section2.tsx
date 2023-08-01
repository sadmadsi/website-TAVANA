import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Tab } from "../common/tab/tab"
import { Tabs } from "../common/tab/tab-container"
import { Tab1 } from "./Tab1";
import { Tab2 } from "./Tab2";
import { Tab3 } from "./Tab3";

export const Section2 = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="container mb-12" >
                <h2 className="py-32">برنامه عرضه و خرید خودرو در بورس کالا</h2>
                <p>برای مشاهده فهرست عرضه و خرید خودرو در بورس جدول ذیل را مشاهده کنید. این فهرست بلافاصله پس از انتشار اطلاعیه جدید عرضه توسط سازمان بورس، بروزرسانی می‌شود.</p>
            </div>

            <Tabs className="justify-center" mobileResposive={false}>
                <Tab className={twMerge('lg:!px-32 px-3 border-2 border-b-0 font-[600] text-[22px]', activeTab === 1 ? 'bg-milky border-black shadow-[0_2px_0px_0px_#eeecec]' : 'border-transparent')}
                    key={'item1'}
                    component={<Tab1 />}
                    renderTab={() => <div className="text-center">
                        به زودی
                    </div>}
                    index={1}
                    isActiveTab={activeTab === 1}
                    setActiveTab={setActiveTab} />
                <Tab className={twMerge('lg:!px-32 px-3 border-2 border-b-0 font-[600] text-[22px]', activeTab === 2 ? 'bg-milky border-black shadow-[0_2px_0px_0px_#eeecec]' : 'border-transparent')}
                    key={'item2'}
                    component={<Tab2 />}
                    renderTab={() => <div className="text-center">
                        درحال عرضه
                    </div>}
                    index={2}
                    isActiveTab={activeTab === 2}
                    setActiveTab={setActiveTab} />
                <Tab className={twMerge('lg:!px-32 px-3 border-2 border-b-0 font-[600] text-[22px]', activeTab === 3 ? 'bg-milky border-black shadow-[0_2px_0px_0px_#eeecec]' : 'border-transparent')}
                    key={'item3'}
                    component={<Tab3 />}
                    renderTab={() => <div className="text-center">
                        پایان یافته
                    </div>}
                    index={3}
                    isActiveTab={activeTab === 3}
                    setActiveTab={setActiveTab} />
            </Tabs>
            <div id={'arze'}></div>
        </>
    )
}