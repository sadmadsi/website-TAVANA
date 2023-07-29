import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { toast } from 'react-toastify';
import { Button } from '../common/button';
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Section5() {
    const [selected, setSelected] = useState('')

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
        <div className="bg-[#D9D9D9] text-black py-20" id='section-4'>
            <div className="container py-10 flex flex-col h-full">
                <h2>
                    عقب نایستید!
                    <br />
                    قدم به قدم همراهتان هستیم
                </h2>
                <p className="mt-16">برای شروع و درخواست مشاوره فرم ذیل را تکمیل کنید</p>
                <div className="lg:grid sm:grid-cols-3 gap-8 mt-32 mb-20 space-y-5 lg:space-y-0">
                    <div className="relative z-0 h-[52px]">
                        <input type="text" id="floating_standard" className="block px-0 w-full h-full text-sm text-[#9a9a9a] bg-transparent border-0 border-b focus:border-black focus:outline-0 focus:ring-0 border-[#9a9a9a] appearance-none focus:outline-none peer" placeholder=" " />
                        <label htmlFor="floating_standard" className="absolute text-[#9a9a9a] font-bold text-sm duration-300 transform -translate-y-6 top-5 -z-10 origin-[0] peer-focus:right-0  peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6">نام و نام خانوادگی*</label>
                    </div>
                    <div className="relative z-0 h-[52px]">
                        <input type="text" id="floating_standard" className="block px-0 w-full h-full text-sm text-[#9a9a9a] bg-transparent border-0 border-b focus:border-black focus:outline-0 focus:ring-0 border-[#9a9a9a] appearance-none focus:outline-none peer" placeholder=" " />
                        <label htmlFor="floating_standard" className="absolute text-[#9a9a9a] font-bold text-sm duration-300 transform -translate-y-6 top-5 -z-10 origin-[0] peer-focus:right-0  peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6">شماره تماس*</label>
                    </div>
                    <Listbox value={selected} onChange={setSelected}>
                        {({ open, value }: { open: any, value: any }) => (
                            <>
                                <div className="relative ">
                                    <div className={`ml-4 text-[#9a9a9a] font-bold absolute text-sm  
                                        duration-300 ${open || value ? '-translate-y-4' : 'translate-y-4'}`}>

                                        میزان سرمایه شما برای تشکیل سبد وست وان چقدر است؟
                                    </div>
                                    <Listbox.Button className={`relative p-0 leading-8 h-[52px] bg-transparent border-0 border-b ${open || value ? 'border-black border-b-2' : 'border-[#9a9a9a]'} focus:ring-0 w-full`}>
                                        <span className="flex items-center">
                                            <span className="ml-3 block truncate">{selected}</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                                            <ChevronDownIcon className="h-5 w-5 " aria-hidden="true" />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {assets.map((item) => (
                                                <Listbox.Option
                                                    key={item}
                                                    className={({ active }: { active: any }) =>
                                                        classNames(
                                                            active ? ' bg-gray-300' : 'text-gray-900',
                                                            'relative cursor-pointer select-none py-2 pl-3 pr-9'
                                                        )
                                                    }
                                                    value={item}
                                                >
                                                    {({ selected, active }: { selected: any, active: any }) => (
                                                        <>
                                                            <div className="flex items-center">
                                                                <span
                                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                >
                                                                    {item}
                                                                </span>
                                                            </div>

                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'text-white' : 'text-indigo-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                    )}
                                                                >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                    <Listbox value={selected} onChange={setSelected}>
                        {({ open, value }: { open: any, value: any }) => (
                            <>
                                <div className="relative ">
                                    <div className={`ml-4 text-[#9a9a9a] font-bold absolute text-sm  
                                        duration-300 ${open || value ? '-translate-y-4' : 'translate-y-4'}`}>
                                        آیا تا به‌حال از خدمات سبدگردانی شرکت‌های دیگر استفاده کرده‌اید؟
                                    </div>
                                    <Listbox.Button className={`relative p-0 leading-8 h-[52px] bg-transparent border-0 border-b ${open || value ? 'border-black border-b-2' : 'border-[#9a9a9a]'} focus:ring-0 w-full`}>
                                        <span className="flex items-center">
                                            <span className="ml-3 block truncate">{selected}</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                                            <ChevronDownIcon className="h-5 w-5 " aria-hidden="true" />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute peer z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {requests.map((item) => (
                                                <Listbox.Option
                                                    key={item}
                                                    className={({ active }: { active: any }) =>
                                                        classNames(
                                                            active ? ' bg-gray-300' : 'text-gray-900',
                                                            'relative cursor-pointer select-none py-2 pl-3 pr-9'
                                                        )
                                                    }
                                                    value={item}
                                                >
                                                    {({ selected, active }: { selected: any, active: any }) => (
                                                        <>
                                                            <div className="flex items-center">
                                                                <span
                                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                >
                                                                    {item}
                                                                </span>
                                                            </div>

                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'text-white' : 'text-indigo-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                    )}
                                                                >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>

                </div >
                <Button isDisabled={true} className="mt-5" isSecondary onClick={() => toast.success(<Msg />, { delay: 2000 })}>
                    درخواست مشاوره
                </Button>
            </div >
        </div >
    )
}