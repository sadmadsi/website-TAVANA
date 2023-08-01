import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../common/button";
import { Tab } from "../../common/tab/tab"
import { Tabs } from "../../common/tab/tab-container"
import { Tab3 } from "./tab3";
import { Tab1 } from "./tab1";
import { Tab2 } from "./tab2";
import { Tab4 } from "./tab4";
import { Tab5 } from "./tab5";
import Link from "next/link";

export const PurchaseGuide = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="bg-secondaryTavana md:pb-0 pb-10" >
                <div className="container">
                    <h2 className="py-32">
                        مراحل و راهنمای
                        <br />
                        خرید خودرو در بورس کالا</h2>
                    <p>به‌طور خلاصه برای خرید خودرو در بورس کالا ضروری است که کد معاملاتی بورس کالا را دریافت کنید. این کد بورسی با کد بورسی لازم برای خریدوفروش سهام یا معاملات آتی متفاوت است. اما اگر در سجام احراز هویت شده باشید در کم‌تر از ۵ دقیقه می‌توانید کد معاملاتی بورس کالا را دریافت کنید.</p>
                    <div className="flex items-center space-x-5 space-x-reverse mt-10 ">
                        <Link href={'https://tavana.ebgo.ir/GetBourseCode/getInformation?src=harmony'}>
                            <Button>
                                دریافت کد بورس کالا
                                <ChevronLeftIcon className="h-5 w-5 md:mr-5" />
                            </Button>
                        </Link>
                        <Link href={'https://tavana.ebgo.ir/GetBourseCode/getInformation?src=harmony'}>
                            <Button className={'bg-transparent !mt-0'} isSecondary>
                                ثبت نام سجام
                                <ChevronLeftIcon className="h-5 w-5 md:mr-5" />
                            </Button>
                        </Link>
                    </div>
                    <p className="md:my-24 my-12" >مراحل خرید خودرو در بورس کالا به شرح زیر است.</p>
                </div>
                <div id={'rahnama'}></div>
                <Tabs >
                    <Tab className={twMerge('md:!px-12 md:py-8', activeTab === 1 ? 'bg-white border-black md:border-2 !border-b-0 shadow-[0_1px_0px_0px_white]' : '')}
                        key={'item1'}
                        component={<Tab1 />}
                        renderTab={() => <div className={`flex items-center ${activeTab === 1 ? 'bg-[url(/digits/1-active.svg)]' : 'bg-[url(/digits/1-inactive.svg)]'} bg-contain bg-no-repeat md:bg-top bg-right md:pt-8 pt-3`}>
                            ثبت‌ نام و دریافت کد
                            <br className="hidden md:block" />
                            معاملاتی بورس کالا
                        </div>}
                        index={1}
                        isActiveTab={activeTab === 1}
                        setActiveTab={setActiveTab} />
                    <Tab className={twMerge('md:!px-12 md:py-8', activeTab === 2 ? 'bg-white border-black md:border-2 !border-b-0 shadow-[0_1px_0px_0px_white]' : '')}
                        key={'item2'}
                        component={<Tab2 />}
                        renderTab={() => <div className={`flex items-center ${activeTab === 2 ? 'bg-[url(/digits/2-active.svg)]' : 'bg-[url(/digits/2-inactive.svg)]'} bg-contain bg-no-repeat md:bg-top bg-right md:pt-8 pt-3`}>
                            افتتاح حساب بانکی
                            <br className="hidden md:block" />
                            وکالتی
                        </div>}
                        index={2}
                        isActiveTab={activeTab === 2}
                        setActiveTab={setActiveTab} />
                    <Tab className={twMerge('md:!px-12 md:py-8', activeTab === 3 ? 'bg-white border-black md:border-2 !border-b-0 shadow-[0_1px_0px_0px_white]' : '')}
                        key={'item2'}
                        component={<Tab3 />}
                        renderTab={() => <div className={`flex items-center ${activeTab === 3 ? 'bg-[url(/digits/3-active.svg)]' : 'bg-[url(/digits/3-inactive.svg)]'} bg-contain bg-no-repeat md:bg-top bg-right md:pt-8 pt-3`}>
                            واریز پیش‌ پرداخت
                            <br className="hidden md:block" />
                            به حساب وکالتی
                        </div>}
                        index={3}
                        isActiveTab={activeTab === 3}
                        setActiveTab={setActiveTab} />
                    <Tab className={twMerge('md:!px-12 md:py-8', activeTab === 4 ? 'bg-white border-black md:border-2 !border-b-0 shadow-[0_1px_0px_0px_white]' : '')}
                        key={'item2'}
                        component={<Tab4 />}
                        renderTab={() => <div className={`flex items-center ${activeTab === 4 ? 'bg-[url(/digits/4-active.svg)]' : 'bg-[url(/digits/4-inactive.svg)]'} bg-contain bg-no-repeat md:bg-top bg-right md:pt-8 pt-3`}>
                            ثبت سفارش خرید
                            <br className="hidden md:block" />
                            خودرو
                        </div>}
                        index={4}
                        isActiveTab={activeTab === 4}
                        setActiveTab={setActiveTab} />
                    <Tab className={twMerge('md:!px-12 md:py-8', activeTab === 5 ? 'bg-white border-black md:border-2 !border-b-0 shadow-[0_1px_0px_0px_white]' : '')}
                        key={'item5'}
                        component={<Tab5 />}
                        renderTab={() => <div className={`flex items-center ${activeTab === 5 ? 'bg-[url(/digits/5-active.svg)]' : 'bg-[url(/digits/5-inactive.svg)]'} bg-contain bg-no-repeat md:bg-top bg-right md:pt-8 pt-3`}>
                            تسویه حساب و
                            <br className="hidden md:block" />
                            انتخاب محل تحویل
                        </div>}
                        index={5}
                        isActiveTab={activeTab === 5}
                        setActiveTab={setActiveTab} />
                </Tabs>
            </div>
        </>
    )
}