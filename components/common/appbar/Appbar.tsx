import Image from "next/image";
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { useEffect, useState } from "react";
import useScrollDirection from '../../../hooks/useScrollDirection'
import _ from 'lodash'
import Link from "next/link";
import { Button } from "../button";

const moamelat = () => {
    return (
        <>

            <div className="justify-start basis-1/4 ">
                <Link href={'https://tavanaco.ir/files/download/rahnama-hamrah.pdf'} className="appbar-item">
                    راهنمای استفاده از همراه‌تریدر
                    <span className="lg:block hidden">
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'https://tavanase.etadbir.com/login.html'} className="appbar-item">
                    ورود به سامانه سهام عدالت
                    <span className="lg:block hidden">
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'https://c.onlinetavana.ir/User/Login?ReturnUrl=/'} className="appbar-item">
                    ورود به سامانه معاملات آفلاین
                    <span className="lg:block hidden">
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
            </div>
            <Link href={'https://sejam.tavanaco.ir/send-otp'} className="grow">
                <div className="relative m-auto h-[250px] bg-[url(/photos/sign-in.png)]  bg-contain bg-no-repeat bg-center w-2/3">
                    {/* <Image alt="signup" src={'/photos/sign-in.png'} fill /> */}
                </div>
                <p className="mt-3 text-center -translate-y-7 font-[farhang] font-bold !text-[22px]">
                    ثبت‌ نام در کارگزاری توانا
                </p>
            </Link>
            <Link href={'https://onlinetavana.ir/'} className="grow">
                <div className="relative m-auto h-[250px] bg-[url(/photos/enter-trade.png)]  bg-contain bg-no-repeat bg-center w-2/3">
                    <Image alt="signup" src={'/photos/enter-trade.png'} fill />
                </div>
                <p className="mt-3 text-center -translate-y-7 font-[farhang] font-bold !text-[22px]">
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
                    <span className="lg:block hidden">
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'/digital-branch'} className="appbar-item">
                    ورود به شعبه دیجیتال                    <span className="lg:block hidden">
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'/branches'} className="appbar-item">
                    آدرس شعب و نمایندگی‌ها                    <span className="lg:block hidden">
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link>
                <Link href={'/contact-us'} className="appbar-item">
                    تماس با ما
                    <span className="lg:block hidden">
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </Link >
            </div>
            <Link href={'/about'} className="grow">
                <div className="relative m-auto h-[250px] w-2/3 bg-[url(/photos/about.png)] bg-contain bg-no-repeat bg-center">
                    {/* <Image alt="signup" src={'/photos/about.png'} fill /> */}
                </div>
                <p className="text-center -translate-y-7 font-bold font-[farhang] !text-[22px]">
                    معرفی اجمالی توانا
                </p>
            </Link>
            <Link href={'/digital-branch'} className="grow">
                <div className="relative m-auto h-[250px] bg-[url(/photos/online-branches.png)] bg-contain bg-no-repeat bg-center w-2/3">
                    {/* <Image alt="signup" src={'/photos/online-branches.png'} fill /> */}
                </div>
                <p className="text-center -translate-y-7 font-bold font-[farhang] !text-[22px]">
                    درخواست شعبه  دیجیتال
                </p>
            </Link>
        </>
    )
}

const buyBourse = () => {
    return (
        <>
            <Link href={'/buy-car'} className="relative md:h-[50vh] grow md:basis-2/3 basis-1/3 md:w-3/5 w-full mx-auto font-[farhang]">
                <div className="m-auto h-[220px] bg-[url(/photos/car-news.png)] md:h-full bg-contain bg-no-repeat bg-center md:mx-0 mx-auto w-full">
                    {/* <Image alt="signup" src={'/photos/car-news.png'} fill /> */}
                </div>
                <p className="absolute w-full text-center font-[800] !text-[22px] -bottom-5">
                    راهنمای خرید خودرو در بورس و اخبار روز
                </p>
            </Link>
            <div className="md:basis-1/3 grow md:flex md:flex-col space-y-8 md:h-[50vh] md:mr-10 font-[farhang] ">
                <Link href={'https://tavana.ebgo.ir/GetBourseCode/getInformation?src=harmony'} className="relative block grow h-[200px]" target={'_blank'} rel="noreferrer">
                    <div className="relative m-auto bg-[url(/photos/sign-in-for-car.png)] bg-cover bg-no-repeat bg-center md:bg-left md:mr-auto mx-auto w-[75%] md:h-[80%] h-full">
                        {/* <Image alt="signup" src={'/photos/sign-in-for-car.png'} fill /> */}
                        <p className="absolute w-full text-center -bottom-5 font-[800] !text-[22px]">
                            ثبت نام در سامانه خرید خودرو در بورس
                        </p>
                    </div>

                </Link>
                <Link href={'https://tavana.ebgo.ir/GetBourseCode/getInformation?src=harmony'} className="relative block grow h-[200px]" target={'_blank'} rel="noreferrer">
                    <div className="relative m-auto bg-[url(/photos/enter-car-platform.png)] bg-cover bg-no-repeat bg-center md:bg-left md:mr-auto mx-auto w-[75%] md:h-[80%] h-full">
                        {/* <Image alt="signup" src={'/photos/enter-car-platform.png'} fill /> */}
                        <p className="absolute w-full text-center -bottom-5 font-[800] !text-[22px]">
                            ورود به سامانه خرید خودرو در بورس
                        </p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default function Appbar(props: any) {
    const { buyCar } = props
    const [open, setOpen] = useState(false)
    const [openMob, setOpenMob] = useState(false)
    const [menu, setMenu] = useState('')
    const [component, setComponent] = useState<any>(null)
    const [expand, setExpand] = useState<any>(true)
    const scrollDir = useScrollDirection();

    const navigation = [
        {
            title: 'سرمایه‌گذاری',
            link: '/vest-one',
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
            link: '/kala',
            dropdown: false
        },
        {
            title: 'بورس انرژی',
            link: '/energy',
            dropdown: false
        },
        {
            title: 'درباره توانا',
            dropdown: true
        },
    ]

    const openSub = (target: any) => {
        setMenu(target.title)
        document.getElementsByTagName('html')[0].className = 'overflow-hidden';
        if (target.dropdown) {
            if (target.title === 'معاملات') {
                setComponent(moamelat)
            } else if (target.title === 'درباره توانا') {
                setComponent(about)
            } else if (target.title === 'خرید خودرو در بورس') {
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
            icon: '/icons/telegram.svg',
            href: 'https://t.me/tavanabroker'
        },
        {
            icon: '/icons/whatsapp.svg',
            href: 'https://wa.me/+989197365014'
        },
        {
            icon: '/icons/insta.svg',
            href: 'https://instagram.com/tavana_brokerage?igshid=YmMyMTA2M2Y='
        },
        {
            icon: '/icons/linkedin.svg',
            href: 'https://www.linkedin.com/company/tavana-group/'
        },

    ]

    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth', block: "end", });
        }
    };

    useEffect(() => {
        if (buyCar) {
            if (scrollDir === 'down') {
                setExpand(false)
            } else {
                window.onscroll = () =>
                    window.pageYOffset === 0 && setExpand(true)
            }
        } else {
            if (scrollDir === 'up') {
                setExpand(true)
            } else {
                setExpand(false)
            }
        }
    }, [scrollDir])

    return (
        <div className="fixed top-0 w-full text-white z-[100]">
            <div className={`relative flex items-center bg-black transition-all ${!expand ? 'py-4' : 'py-4'}`}>
                {expand ? <button className="absolute lg:hidden block right-5" onClick={() => {
                    setOpenMob(!openMob)
                    if (openMob) {
                        document.getElementsByTagName('html')[0].className = '';
                    } else {
                        document.getElementsByTagName('html')[0].className = 'overflow-hidden';
                    }
                }}>
                    <Bars3Icon className="h-6 w-6 text-white" />
                </button> : null}
                <Link href={'/'} className="mx-auto flex flex-col">
                    <span className="mr-auto translate-x-0 md:-translate-x-[29px]">
                        <Image src={'/tavana/logo.svg'} height={53} width={53} alt={'tavana'} style={{ height: 'auto', width: 'auto' }} />
                    </span>
                    <span className={`mt-2 md:ml-0 ml-[29px] transition-all duration-1000 ${!expand ? 'opacity-0 h-0' : 'opacity-1 h-[31px]'}`}>
                        <Image src={'/tavana/tavana-name.svg'} height={100} width={100} alt={'tavana'} style={{ height: 'auto', width: 'auto' }} />
                    </span>
                </Link>
            </div>
            <div className={`relative lg:flex hidden justify-center space-x-reverse gap-10 overflow-hidden duration-200 bg-black/95 transition-all ${!expand ? 'h-0' : 'h-[62px]'}`}>
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
            <div className={`relative w-full bg-black/95 transition-all`}>
                <div className={`flex flex-col text-center lg:hidden space-y-12 overflow-y-auto ${openMob ? 'h-screen pt-10 pb-52 ' : 'h-0'}`}>
                    {component ?
                        <>
                            <p className="flex justify-center items-center cursor-pointer" onClick={() => setComponent(null)}>
                                {menu}
                                <ChevronLeftIcon className="text-white h-5 w-5" />
                            </p>
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
                            <div className="flex !mt-[120px]">
                                <div className="flex space-x-5 space-x-reverse mx-auto">
                                    {contact.map((item: any) => {
                                        return (
                                            <Link href={item.href} key={item.icon}>
                                                <Image src={item.icon} height={30} width={30} alt={item.href} style={{ height: 'auto', width: 'auto' }} />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    }

                </div>
            </div>

            <div className={`relative lg:flex hidden bg-black/95 w-full transition-all flex-col lg:flex-row justify-between duration-500 overflow-hidden px-[5vw] ${open ? 'h-screen pt-40' : 'h-0'}`}>
                {component}
                <button className="absolute left-10 top-10" onClick={() => setOpen(false)}>
                    <XMarkIcon className="h-7 w-7 text-white" />
                </button>
            </div>
            {buyCar ? <div className={`relative justify-center lg:gap-40 gap-8 py-4 items-center flex overflow-hidden  bg-black `} suppressHydrationWarning>
                <div className="hidden lg:block font-[900] font-[farhang] text-[16px]">
                    خرید خودرو در بورس
                </div>
                <div className="flex items-center space-x-5 space-x-reverse font-[farhang] text-[16px] font-[600]">
                    <div className="cursor-pointer" onClick={() => handleClickScroll('arze')}>برنامه عرضه </div>
                    <div className="cursor-pointer hidden lg:block" onClick={() => handleClickScroll('compare')}>مقایسه قیمت</div>
                    <div className="cursor-pointer" onClick={() => handleClickScroll('rahnama')}>راهنما</div>
                </div>
                <Link href={'https://tavana.ebgo.ir/GetBourseCode/getInformation?src=harmony'}>
                    <Button className={'border-white leading-8 hover:bg-white hover:text-black'}>
                        دریافت کد بورس کالا
                        <ChevronLeftIcon className="h-5 w-5 mr-5" />
                    </Button>
                </Link>
            </div> : null}
        </div>
    )
}