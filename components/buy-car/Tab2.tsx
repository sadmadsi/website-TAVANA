import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"
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
export const Tab2 = () => {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState<queryType>({ name: '', mobile: '', car: '' })

    const updateQuery = (name: string, value: string) => {
        let _query: any = { ...query }
        _query[name] = value
        setQuery(_query)
    }

    return (
        <div className="bg-milky py-24">
            <div className="container">
                <div>
                    <p className="max-w-[880px]">در حال حاضر خودرویی برای خرید، در دسترس نیست. می‌توانید خودروی مدنظرتان را انتخاب کنید تا بلافاصله پس از اعلام سازمان بورس، زمان عرضه آن به اطلاعتان برسد.</p>
                    <Button isSecondary className={'bg-transparent mt-24'} onClick={() => setOpen(!open)}>
                        {open ? <ChevronDownIcon className="h-5 w-5 ml-5" /> : <ChevronLeftIcon className="h-5 w-5 ml-5" />}
                        درخواست اطلاع از زمان عرضه خودرو
                    </Button>
                </div>
                <div className={twMerge("w-full overflow-hidden transition-[max-height] ", open ? 'max-h-[1000px]' : 'max-h-0')}>
                    <div className={twMerge("flex lg:flex-row flex-col gap-16 mt-16")}>
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