import Image from "next/image";
import {
    ChevronDownIcon,
    ChevronLeftIcon
} from '@heroicons/react/24/outline'
import { useState } from "react";
import Link from "next/link";

export default function AppbarV2() {
    const [open, setOpen] = useState(false)

    const navigation = [
        {
            title: 'سرمایه‌گذاری',
            dropdown: false
        },
        {
            title: 'معاملات',
            dropdown: true
        },
        {
            title: 'خرید خودرو در بورس',
            dropdown: true
        },
        {
            title: 'بورس کالا',
            dropdown: false
        },
        {
            title: 'بورس انرژی',
            dropdown: false
        },
        {
            title: 'درباره توانا',
            dropdown: true
        },
    ]

    return (
        <>
            <div className="fixed flex top-0 px-10 w-full text-white bg-black py-2 items-center z-10">
                <div className="flex space-x-10 space-x-reverse">
                    <Link href={'/'}>
                        <Image src={'/icons/vector.svg'} height={35} width={35} alt={'tavana'} />
                    </Link>
                    {
                        navigation.map((menu: any) => {
                            return (
                                <div key={menu.title} className={'flex items-center min-w-fit'} onMouseEnter={() => menu.dropdown && setOpen(true)} onMouseLeave={() => menu.dropdown && setOpen(false)}>
                                    {menu.title}
                                    <span>
                                        {menu.dropdown && <ChevronDownIcon className="h-4 w-4" />}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="mr-auto bg-transparent min-w-fit">
                    ثبت‌ نام
                </button>
            </div>
            <div className={`fixed top-11 backdrop-blur-md bg-black/30 w-full transition-all flex items-center justify-around overflow-hidden z-10 text-white ${open ? 'h-[50vh]' : 'h-0'}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <div className="space-y-4">
                    <div className="flex">
                        راهنمای استفاده از همراه‌تریدر
                        <span>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </div>
                    <div className="flex">
                        ورود به سامانه سهام عدالت
                        <span>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </div>
                    <div className="flex">
                        وورد به سامانه معاملات آفلاین
                        <span>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </div>
                </div>
                <div>
                    <Image alt="signup" src={'/photos/signup.png'} height={80} width={200} />
                    <p className="mt-3">
                        ثبت‌ نام در کارگزاری توانا
                    </p>
                </div>
                <div>
                    <Image alt="login" src={'/photos/login.png'} height={80} width={200} />
                    <p className="mt-3">
                        وورد به سامانه معاملات آنلاین
                    </p>
                </div>
            </div>
        </>
    )
}