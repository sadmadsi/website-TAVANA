import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { InboxIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../common/button";
import { Input } from "../common/input";
import { Select } from "../common/select";
interface queryType {
    name: string,
    mobile: string,
    car: string
}
export default function Section3() {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState<queryType>({ name: '', mobile: '', car: '' })

    const updateQuery = (name: string, value: string) => {
        let _query: any = { ...query }
        _query[name] = value
        setQuery(_query)
    }


    return (
        <div className="bg-black text-white">
            <div className="container py-[5vw]">
                <h2 className="mb-32">سوار قیمت بهتری شوید</h2>
                <p>با خرید خودرو در بورس از کارگزاری توانا، واسطه‌ها را حذف کنید و خریدتان را با قیمت بهتری انجام دهید. قیمت خرید خودرو در بورس از کارگزاری توانا با بازار آزاد خودرو در جدول زیر مقایسه شده است.</p>
                <div className="overflow-auto">
                    <table className="w-full mt-12">
                        <thead>
                            <tr className="border-y-4 border-white h-[80px]">
                                <th className={"max-w-[100px] md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap"}>
                                    خودرو
                                </th>
                                <th className={"md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap"}>
                                    قیمت تمام شده
                                </th>
                                <th className={"md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap"}>
                                    قیمت بازار آزاد
                                </th>
                                <th className={"md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap"}>
                                    سود یا زیان
                                </th>
                                <th className={"md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap"}>
                                    تاریخ تحویل
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={12} className="w-full text-center bg-white !py-[60px] text-[#00000040]">
                                    <InboxIcon className="h-12 w-12 mx-auto" />
                                    داده ای موجود نیست
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Button isSecondary className={'mt-5 w-full md:w-fit justify-center'} onClick={() => setOpen(!open)}>
                        درخواست اطلاع از زمان عرضه خودرو
                        {open ? <ChevronDownIcon className="h-5 w-5 ml-5" /> : <ChevronLeftIcon className="h-5 w-5 ml-5" />}
                    </Button>
                    <div className={twMerge("w-full overflow-hidden transition-[max-height] ", open ? 'max-h-[1000px]' : 'max-h-0')}>
                        <div className={twMerge("flex lg:flex-row flex-col gap-4 mt-16")}>
                            <Input label="نام و نام خانوداگی" inputClassName="!border-white" onChange={(e: any) => updateQuery('name', e.target.value)} value={query.name} />
                            <Input label="شماره تماس*" inputClassName="!border-white" onChange={(e: any) => updateQuery('mobile', e.target.value)} value={query.mobile} />
                            <Select label="انتخاب خودرو" className="!border-white" onChange={(e: any) => updateQuery('car', e.value)} options={[]} selected={query.car} />
                        </div>
                        <Button isSecondary isDisabled>
                            از زمان عرضه خودرو آگاه شوم
                        </Button>
                    </div>
                </div>
                <div id={'compare'}></div>
            </div>
        </div>
    )
}