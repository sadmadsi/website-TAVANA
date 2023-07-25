import Image from "next/image";
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { useEffect, useState } from "react";
import useScrollDirection from '../../hooks/useScrollDirection'
import _ from 'lodash'
import Link from "next/link";

const moamelat = () => {
    return (
        <>
            <div className="justify-start basis-1/4 ">
                <Link href={'https://tavanaco.ir/files/download/rahnama-hamrah.pdf'} className="appbar-item">
                    راهنمای استفاده از همراه‌تریدر
                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'https://tavanase.etadbir.com/login.html'} className="appbar-item">
                    ورود به سامانه سهام عدالت
                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'https://c.onlinetavana.ir/User/Login?ReturnUrl=/'} className="appbar-item">
                    ورود به سامانه معاملات آفلاین
                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
            </div>
            <Link href={'https://sejam.tavanaco.ir/send-otp'} className="grow">
                <div className="relative m-auto h-[250px] bg-[url(/photos/sign-in.png)]  bg-contain bg-no-repeat bg-center w-2/3">
                    {/* <Image alt="signup" src={'/photos/sign-in.png'} fill /> */}
                </div>
                <p className="mt-3 text-center -translate-y-7 font-[farhang] font-bold">
                    ثبت‌ نام در کارگزاری توانا
                </p>
            </Link>
            <Link href={'https://onlinetavana.ir/'} className="grow">
                <div className="relative m-auto h-[250px] bg-[url(/photos/enter-trade.png)]  bg-contain bg-no-repeat bg-center w-2/3">
                    <Image alt="signup" src={'/photos/enter-trade.png'} fill />
                </div>
                <p className="mt-3 text-center -translate-y-7 font-[farhang] font-bold">
                    ورود به سامانه معاملات آنلاین
                </p>
            </Link>

        </>
    )
}

const about = () => {
    return (
        <>
            <div className="space-y-4 grow">
                <Link href={'/banks'} className="appbar-item">
                    شماره حساب‌ها
                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'/digital-branch'} className="appbar-item">
                    ورود به شعبه دیجیتال                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'/branches'} className="appbar-item">
                    آدرس شعب و نمایندگی‌ها                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'/contact-us'} className="appbar-item">
                    تماس با ما
                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link >
            </div>
            <Link href={'/about'} className="grow">
                <div className="relative m-auto h-[250px] w-2/3 bg-[url(/photos/about.png)] bg-contain bg-no-repeat bg-center">
                    {/* <Image alt="signup" src={'/photos/about.png'} fill /> */}
                </div>
                <p className="text-center -translate-y-7 font-bold font-[farhang]">
                    معرفی اجمالی توانا
                </p>
            </Link>
            <Link href={'/digital-branch'} className="grow">
                <div className="relative m-auto h-[250px] bg-[url(/photos/online-branches.png)] bg-contain bg-no-repeat bg-center w-2/3">
                    {/* <Image alt="signup" src={'/photos/online-branches.png'} fill /> */}
                </div>
                <p className="text-center -translate-y-7 font-bold font-[farhang]">
                    درخواست شعبه  دیجیتال
                </p>
            </Link>
        </>
    )
}

const buyBourse = () => {
    return (
        <>
            <div className="relative md:h-[50vh] grow md:basis-2/3 basis-1/3 md:w-3/5">
                <div className="m-auto h-[200px] bg-[url(/photos/car-news.png)] md:h-full bg-contain bg-no-repeat bg-center md:mx-0 mx-5">
                    {/* <Image alt="signup" src={'/photos/car-news.png'} fill /> */}
                </div>
                <p className="absolute w-full text-center -bottom-3">
                    راهنمای خرید خودرو در بورس و اخبار روز
                </p>
            </div>
            <div className="md:basis-1/3 grow md:flex md:flex-col space-y-8 md:h-[50vh] md:mr-10">
                <div className="relative grow h-[200px]">
                    <div className="m-auto bg-[url(/photos/sign-in-for-car.png)] h-full bg-cover bg-no-repeat bg-center md:mx-0 mx-5">
                        {/* <Image alt="signup" src={'/photos/sign-in-for-car.png'} fill /> */}
                    </div>
                    <p className="absolute w-full text-center -bottom-3">
                        ثبت نام در سامانه خرید خودرو در بورس
                    </p>
                </div>
                <div className="relative grow h-[200px]">
                    <div className="m-auto bg-[url(/photos/enter-car-platform.png)] h-full bg-cover bg-no-repeat bg-center md:mx-0 mx-5">
                        {/* <Image alt="signup" src={'/photos/enter-car-platform.png'} fill /> */}
                    </div>
                    <p className="absolute w-full text-center -bottom-3">
                        ورود به سامانه خرید خودرو در بورس
                    </p>
                </div>
            </div>
        </>
    )
}

export default function Appbar() {
    const [open, setOpen] = useState(false)
    const [openMob, setOpenMob] = useState(false)
    const [menu, setMenu] = useState('')
    const [component, setComponent] = useState<any>(null)
    const scrollDir = useScrollDirection();

    const navigation = [
        {
            title: 'سرمایه‌گذاری',
            link: '/vestOne',
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
            link: '/goodsBrokerage',
            dropdown: false
        },
        {
            title: 'بورس انرژی',
            link: '/energyBrokerage',
            dropdown: false
        },
        {
            title: 'درباره توانا',
            dropdown: true
        },
    ]

    const openSub = (menu: any) => {
        setMenu(menu.title)
        document.getElementsByTagName('html')[0].className = 'overflow-hidden';
        if (menu.dropdown) {
            if (menu.title === 'معاملات') {
                setComponent(moamelat)
            } else if (menu.title === 'درباره توانا') {
                setComponent(about)
            } else if (menu.title === 'خرید خودرو در بورس') {
                setComponent(buyBourse)
            }
            setOpen(true)
        }
    }

    useEffect(() => {
        if (!open) {
            document.getElementsByTagName('html')[0].className = '';
        }
    }, [open])

    const contact = [
        {
            icon: '/icons/insta.svg',
            href: '/'
        },
        {
            icon: '/icons/linkedin.svg',
            href: '/'
        },
        {
            icon: '/icons/telegram.svg',
            href: '/'
        },
        {
            icon: '/icons/whatsapp.svg',
            href: '/'
        },
    ]

    return (
        <div className="fixed top-0 w-full text-white z-10">
            <div className={`relative flex items-center bg-black transition-all ${scrollDir === 'down' ? 'py-4' : 'py-4'}`}>
                <button className="absolute md:hidden block right-5" onClick={() => setOpenMob(!openMob)}>
                    <Bars3Icon className="h-6 w-6 text-white" />
                </button>
                <Link href={'/'} className="mx-auto flex flex-col">
                    <span>
                        <Image src={'/tavana/logo.svg'} height={53} width={112} alt={'tavana'} style={{ height: 'auto', width: 'auto' }} />
                    </span>
                    <span className={`mt-2 transition-all duration-1000 ${scrollDir === 'down' ? 'opacity-0 h-0' : 'opacity-1 h-[31px]'}`}>
                        <Image src={'/tavana/tavana-name.svg'} height={100} width={100} alt={'tavana'} style={{ height: 'auto', width: 'auto' }} />
                    </span>
                </Link>
            </div>
            <div className={`relative md:flex hidden justify-center space-x-reverse gap-10 overflow-hidden duration-500 bg-black/95 transition-all ${scrollDir === 'down' ? 'h-0' : 'h-[62px]'}`}>
                {
                    navigation.map((menu: any) => {
                        if (menu?.link) {
                            return (<Link href={menu?.link || '/'} key={menu.title} className={'flex items-center font-bold py-[3px] px-[15px]'}>
                                {menu.title}
                            </Link>)
                        } else {
                            return (
                                <div key={menu.title} className={'flex items-center cursor-pointer font-bold py-[3px] px-[15px]'} onClick={() => openSub(menu)}>
                                    {menu.title}
                                    <span className="mr-2">
                                        {menu.dropdown && <ChevronDownIcon className="h-3 w-3" />}
                                    </span>
                                </div>)
                        }

                    })
                }
            </div>
            <div className={`relative w-full flex flex-col text-center md:hidden space-y-12 overflow-y-auto bg-black/95 transition-all  ${openMob ? 'h-screen pt-10 pb-52 ' : 'h-0'}`}>
                {component ?
                    <>
                        <h2 className="flex justify-center items-center" onClick={() => setComponent(null)}>
                            <ChevronRightIcon className="text-white h-5 w-5" />
                            {menu}
                        </h2>
                        {component}
                    </> : <>
                        {
                            navigation.map((menu: any) => {
                                if (menu?.link) {
                                    return (<Link href={menu?.link || '/'} key={menu.title} className={'flex items-center mx-auto'}>
                                        {menu.title}
                                    </Link>)
                                } else {
                                    return (
                                        <div key={menu.title} className={'flex items-center cursor-pointer mx-auto'} onClick={() => openSub(menu)}>
                                            {menu.title}
                                            <span>
                                                {menu.dropdown && <ChevronDownIcon className="h-4 w-4" />}
                                            </span>
                                        </div>
                                    )
                                }

                            })
                        }
                        <div className="flex">
                            <div className="flex space-x-2 space-x-reverse mx-auto">
                                {contact.map((item: any) => {
                                    return (
                                        <Link href={item.href} key={item.icon}>
                                            <Image src={item.icon} height={30} width={30} alt={item.href} style={{ height: 'auto', width: 'auto' }} />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </>}
            </div>
            <div className={`relative sm:flex hidden bg-black/95 w-full transition-all flex-col sm:flex-row justify-between duration-500 overflow-hidden px-[5vw] ${open ? 'h-screen pt-40' : 'h-0'}`}>
                {component}
                <button className="absolute left-10 top-10" onClick={() => setOpen(false)}>
                    <XMarkIcon className="h-7 w-7 text-white" />
                </button>
            </div>
        </div>
    )
}