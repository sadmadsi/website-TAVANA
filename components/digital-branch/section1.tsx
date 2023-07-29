import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../common/button";
import { Input } from "../common/input";

export default function Section1() {
    const [mobile, setMobile] = useState<string>('')

    const Msg = () => (
        <div className='sm:w-[500px] w-full'>
            درخواست مشاوره شما با موفقیت ثبت شد<br />
            <span className='text-sm'>
                کارشناسان ما بزودی با شما تماس می‌گیرند.
            </span>
        </div>
    )
    return (
        <>
            <div className="bg-black text-white mt-[118px] md:pt-[140px]">
                <div className="container lg:pt-20 pt-28">
                    <h1 className="bg-black">
                        درخواست شعبه دیجیتال کارگزاری توانا
                    </h1>
                </div>
            </div>
            <div className="linearBlack text-white lg:pt-24 pt-12">
                <div className="container flex h-full lg:flex-row flex-col ">
                    <div className="sm:basis-1/2 mt-16">
                        <p className="lg:w-[81.3%] mb-5">
                            شعبه دیجیتال کارگزاری توانا راهکاری پرسود و بدون هزینه برای کسب درآمد از بورس است. شما با معرفی دوستان و سایر افراد به کارگزاری توانا، شریک ما در کارمزد دریافتی خواهید شد. درصد سهم شما از کارمزد ایجاد شده و خدمات ویژه بازاریابان، به سطح فعالیتتان بستگی دارد.
                        </p>
                    </div>
                    <div className="basis-1/2">
                        <div className="bg-secondaryTavana lg:p-28 p-5 flex flex-col text-black">
                            <p className="mb-16 lg:mb-8">برای کسب اطلاعات بیشتر و درخواست شعبه دیجیتال شماره موبایلتان را وارد کنید.</p>
                            <Input label='لطفا شماره موبایل خود را وارد کنید*' labelClassName="text-disable" inputClassName="border-black" onChange={setMobile} value={mobile} />
                            <Button isDisabled={true} className="mt-16" isSecondary onClick={() => toast.success(<Msg />, { delay: 2000 })}>
                                درخواست شعبه دیجیتال
                                <span className='mr-2'>
                                    <ChevronLeftIcon className='h-5 w-5' />
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}