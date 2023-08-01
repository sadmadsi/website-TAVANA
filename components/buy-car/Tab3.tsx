import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"
import { InboxIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { Button } from "../common/button"
import { Input } from "../common/input"
import { Select } from "../common/select"
interface queryType {
    name: string,
    mobile: string,
    car: string
}

export const Tab3 = () => {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState<queryType>({ name: '', mobile: '', car: '' })

    const updateQuery = (name: string, value: string) => {
        let _query: any = { ...query }
        _query[name] = value
        setQuery(_query)
    }

    return (
        <div className="bg-milky py-24">
            <div className="container ">
                <div className="overflow-x-auto">
                    <table className="w-full ">
                        <thead >
                            <tr className="border-y-4 border-black h-[80px]">
                                <th className="max-w-[100px]">
                                    <p className="md:!text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        خودرو
                                    </p>
                                </th>
                                <th>
                                    <p className="md:!text-[18px] !text-[13px] font-bold w-fit px-12  whitespace-nowrap">
                                        تاریخ عرضه
                                    </p>
                                </th>
                                <th>
                                    <p className="md:!text-[18px] !text-[13px] font-bold w-fit px-12  whitespace-nowrap">
                                        تاریخ تحویل
                                    </p>
                                </th>
                                <th>
                                    <p className="md:!text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        قیمت تمام شده
                                    </p>
                                </th>
                                <th>
                                    <p className="md:!text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        قیمت پایه
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={12} className="w-full text-center bg-white !py-[60px] text-[#00000040]">
                                    <InboxIcon className="h-12 w-12 mx-auto" />
                                    <p>داده ای موجود نیست</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Button className={twMerge('mt-2', open ? 'bg-transparent' : '')} isSecondary={open} onClick={() => setOpen(!open)}>
                        درخواست اطلاع از زمان عرضه خودرو
                        {open ? <ChevronDownIcon className="h-5 w-5 ml-5" /> : <ChevronLeftIcon className="h-5 w-5 ml-5" />}
                    </Button>
                </div>
                <div className={twMerge("w-full overflow-hidden transition-[max-height] ", open ? 'max-h-[1000px]' : 'max-h-0')}>
                    <div className={twMerge("flex lg:flex-row flex-col gap-4 mt-16")}>
                        <Input label="نام و نام خانوداگی" onChange={(e: any) => updateQuery('name', e.target.value)} value={query.name} />
                        <Input label="شماره تماس*" onChange={(e: any) => updateQuery('mobile', e.target.value)} value={query.mobile} />
                        <Select label="انتخاب خودرو" onChange={(e: any) => updateQuery('car', e.value)} options={[]} selected={query.car} />
                    </div>
                    <Button isSecondary isDisabled>
                        از زمان عرضه خودرو آگاه شوم
                    </Button>
                </div>

            </div>
        </div>
    )
}