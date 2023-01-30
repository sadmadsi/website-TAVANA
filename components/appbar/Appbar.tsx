import Image from "next/image";
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    Bars3Icon
} from '@heroicons/react/24/outline'
import { useState } from "react";
import useScrollDirection from '../../hooks/useScrollDirection'
import _ from 'lodash'

export default function Appbar() {
    const [open, setOpen] = useState(false)
    const [openMob, setOpenMob] = useState(false)
    const scrollDir = useScrollDirection();

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
        <div className="fixed top-0 w-full text-white z-10">
            <div className={`relative flex items-center bg-black transition-all ${scrollDir === 'down' ? 'py-2' : 'py-7'}`}>
                <button className="absolute md:hidden block right-5" onClick={() => setOpen(!open)}>
                    <Bars3Icon className="h-6 w-6 text-white" />
                </button>
                <div className="mx-auto">
                    {scrollDir === 'down' ? <Image src={'/icons/Vector.svg'} height={50} width={50} alt={'tavana'} style={{ height: 'auto', width: 'auto' }} /> : <Image src={'/icons/tavana_logo.svg'} height={100} width={100} alt={'tavana'} style={{ height: 'auto', width: 'auto' }} />}
                </div>
            </div>
            <div className={`relative md:flex hidden justify-center space-x-7 overflow-hidden bg-black/30 transition-all ${scrollDir === 'down' ? 'h-0' : 'h-10'} ${open ? 'backdrop-blur-md' : 'backdrop-blur-sm'}`}>
                {
                    navigation.map((menu: any) => {
                        return (
                            <div key={menu.title} className={'flex items-center'} onMouseEnter={() => menu.dropdown && setOpen(true)} onMouseLeave={() => menu.dropdown && setOpen(false)}>
                                {menu.title}
                                <span>
                                    {menu.dropdown && <ChevronDownIcon className="h-4 w-4" />}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`backdrop-blur-md bg-black/30 w-full transition-all flex flex-col sm:flex-row items-center justify-around overflow-hidden ${open ? 'h-[70vh]' : 'h-0'}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
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
            {/* <div className={` transition-all backdrop-blur-md bg-black/30 ${openMob ? 'h-screen' : 'h-0'}`}>

            </div> */}
        </div>
    )
}