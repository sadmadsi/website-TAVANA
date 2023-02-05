import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { toast } from 'react-toastify';
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Section4() {
    const [selected, setSelected] = useState('درخواست')

    const Msg = () => (
        <div className='sm:w-[500px] w-full'>
            درخواست مشاوره شما با موفقیت ثبت شد<br />
            <span className='text-sm'>
                کارشناسان ما بزودی با شما تماس می‌گیرند.
            </span>
        </div>
    )
    const requests = [
        'مشاوره تخصصی و پذیرش انواع کالا و اوراق بهادار قابل معامله در بورس انرژی',
        'دریافت کد معاملاتی شرکت‌های ایرانی و خارجی',
        'مشاوره تخصصی در خصوص ماهیت و قیمت انواع فرآورده نفتی',
        'مشاوره تخصصی در خصوص سازوکار بورس انرژی و فرآیند‌های معاملاتی',
        'انجام معاملات تمامی موارد قابل معامله در بورس انرژی'
    ]
    return (
        <div className="bg-[#D9D9D9] text-black py-24" id='section-4'>
            <div className="container py-10 flex flex-col h-full">
                <h1>کارشناسان توانا پاسخ‌‌گوی شما هستند</h1>
                <h2 className="mt-16">به‌منظور دریافت مشاوره و بهره‌مندی از خدمات توانا در بورس کالا فرم ذیل را تکمیل کنید</h2>
                <div className="sm:grid sm:grid-cols-3 gap-5 space-y-5 mt-32 mb-20">
                    <input className="bg-transparent border-0 border-b border-black py-3 focus:ring-0 w-full" type="text" placeholder="نام و نام خانوادگی*" />
                    <input className="bg-transparent border-0 border-b border-black py-3 focus:ring-0 w-full" type="text" placeholder="نام شرکت" />
                    <input className="bg-transparent border-0 border-b border-black py-3 focus:ring-0 w-full" type="text" placeholder="شماره تماس*" />
                    <Listbox value={selected} onChange={setSelected}>
                        {({ open }: { open: any }) => (
                            <>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full">
                                        <span className="flex items-center">
                                            <span className="ml-3 block truncate">{selected}</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                    <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="توضیحات" />
                </div>
                <button className="bg-black w-fit text-white p-3 mt-5" onClick={() => toast.success(<Msg />, { delay: 2000 })}>
                    درخواست مشاوره
                </button>
            </div>
        </div>
    )
}