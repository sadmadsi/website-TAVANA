import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Input } from '../common/input';
import { Select } from '../common/select';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}
export default function Section1() {
    const router = useRouter()
    const [selected, setSelected] = useState('')
    const [name, setName] = useState('')
    const Msg = () => (
        <div className='sm:w-[500px] w-full'>
            درخواست مشاوره شما با موفقیت ثبت شد<br />
            <span className='text-sm'>
                کارشناسان ما بزودی با شما تماس می‌گیرند.
            </span>
        </div>
    )
    const requests = [
        'انتقادات و پیشنهادات',
        'درخواست همکاری',
    ]

    return (
        <div className="min-h-screen bg-black mt-[118px] py-20">
            <div className='container'>
                <div className="bg-[url(/photos/map.jpg)] pt-40 bg-top bg-no-repeat sm:bg-[length:80%_80%] bg-cover flex sm:flex-row flex-col">
                    <button className='hidden text-white border-2 border-white sm:flex items-center h-fit w-fit p-3 mt-auto sm:mr-1/2 mx-auto transition-all hover:bg-white hover:text-black' onClick={() => router.push('/branches')}><div> لیست شعب و نمایندگی ها </div><span className='mr-2'><ChevronLeftIcon className='h-6 w-6' /></span></button>
                    <div className="sm:mr-auto sm:basis-1/2 m-5 sm:m-0 bg-white sm:p-20 p-5 sm:py-40">
                        <h1>ارتباط با ما</h1>
                        <div>
                            <div className="space-y-16">
                                <div className="flex sm:flex-row flex-col gap-16 mt-8">
                                    <Input label='نام و نام خانوادگی*' onChange={setName} value={name} />
                                    <Input label='شماره تماس*' onChange={setName} value={name} />
                                </div>
                                <Select label='موضوع' onChange={setSelected} options={requests} selected={selected} />
                                <Input label='پیام' onChange={setName} value={name} />
                            </div>
                            <button className="bg-black text-white p-3 mt-24" onClick={() => toast.success(<Msg />, { delay: 2000 })}>
                                درخواست مشاوره
                            </button>
                        </div>
                    </div>
                    <button className='sm:hidden text-white border-2 border-white flex items-center h-fit w-fit p-3 mt-auto sm:mr-12 mx-auto transition-all hover:bg-white hover:text-black' onClick={() => router.push('/branches')}><div> لیست شعب و نمایندگی ها </div><span className='mr-2'><ChevronLeftIcon className='h-6 w-6' /></span></button>
                </div>
            </div>

        </div>
    )
}