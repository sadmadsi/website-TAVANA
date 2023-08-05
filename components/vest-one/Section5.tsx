import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { toast } from 'react-toastify';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { Select } from '../common/select';
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Section5() {
    const [selected, setSelected] = useState('')
    const [asset, setAsset] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')

    const Msg = () => (
        <div className='sm:w-[500px] w-full'>
            درخواست مشاوره شما با موفقیت ثبت شد<br />
            <span className='text-sm'>
                کارشناسان ما بزودی با شما تماس می‌گیرند.
            </span>
        </div>
    )
    const requests = [
        'بله',
        'خیر',
    ]

    const assets = [
        'کمتر از یک میلیارد تومان',
        'بین یک میلیارد تا پنج میلیارد تومان',
        'بین پنج میلیارد تا پانزده میلیارد تومان',
        'بیشتر از پانزده میلیارد تومان',
    ]

    return (
        <div className="bg-[#D9D9D9] text-black py-16" id='section-4'>
            <div className="container py-10 flex flex-col h-full">
                <h2>
                    عقب نایستید!
                    <br />
                    قدم به قدم همراهتان هستیم
                </h2>
                <p className="mt-16">برای شروع و درخواست مشاوره فرم ذیل را تکمیل کنید</p>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-16 mt-32 mb-20 ">
                    <Input label='نام و نام خانوادگی*' onChange={(e: any) => setName(e.target.value)} value={name} />
                    <Input label='شماره تماس*' onChange={(e: any) => setMobile(e.target.value)} value={mobile} />
                    <Select label='میزان سرمایه شما برای تشکیل سبد وست وان چقدر است؟' onChange={(e: any) => setAsset(e)} options={assets} selected={asset} />
                    <Select label='آیا تا به‌حال از خدمات سبدگردانی شرکت‌های دیگر استفاده کرده‌اید؟' onChange={(e: any) => setSelected(e)} options={requests} selected={selected} />
                </div >
                <Button isDisabled={true} className="mt-5" isSecondary onClick={() => toast.success(<Msg />, { delay: 2000 })}>
                    درخواست مشاوره
                </Button>
            </div >
        </div >
    )
}