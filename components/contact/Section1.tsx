import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}
export default function Section1() {
    const router = useRouter()
    const [selected, setSelected] = useState('موضوع')
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
        <div className="container min-h-screen sm:mt-56 my-24">
            <div className="bg-[url(/photos/map.jpg)] pt-40 h-screen bg-top bg-no-repeat sm:bg-contain bg-cover flex sm:flex-row flex-col">
                <button className='hidden text-white border-2 border-white sm:flex items-center h-fit w-fit p-3 mt-auto sm:mr-12 mx-auto transition-all hover:bg-white hover:text-black' onClick={() => router.push('/branches')}><div> لیست شعب و نمایندگی ها </div><span className='mr-2'><ChevronLeftIcon className='h-6 w-6' /></span></button>
                <div className="sm:mr-auto sm:basis-1/2 m-5 sm:m-0 bg-white sm:p-20 p-5 py-32">
                    <h1>ارتباط با ما</h1>
                    <div>
                        <div className="space-y-5">
                            <div className="flex sm:flex-row flex-col sm:space-x-4 space-x-reverse">
                                <input className="grow bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="نام و نام خانوادگی*" />
                                <input className="grow bg-transparent mt-5 sm:mt-0 border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="شماره تماس*" />
                            </div>
                            <Listbox value={selected} onChange={setSelected}>
                                {({ open }: { open: any }) => (
                                    <>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full">
                                                <span className="flex items-center">
                                                    <span className="ml-3 block truncate pr-3">{selected}</span>
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

                            <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="پیام" />
                        </div>
                        <button className="bg-black text-white p-3 mt-24" onClick={() => toast.success(<Msg />, { delay: 2000 })}>
                            درخواست مشاوره
                        </button>
                    </div>
                </div>
                <button className='sm:hidden text-white border-2 border-white flex items-center h-fit w-fit p-3 mt-auto sm:mr-12 mx-auto transition-all hover:bg-white hover:text-black' onClick={() => router.push('/branches')}><div> لیست شعب و نمایندگی ها </div><span className='mr-2'><ChevronLeftIcon className='h-6 w-6' /></span></button>
            </div>

        </div>
    )
}