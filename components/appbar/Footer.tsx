import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const footerItem = [
        {
            header: 'درباره توانا',
            children: [
                {
                    title: 'معرفی توانا',
                    href: '/'
                },
                {
                    title: ' شماره حساب‌ها',
                    href: '/bankAccounts'
                },
                {
                    title: 'فرصت‌های شغلی',
                    href: '/'
                },
                {
                    title: 'سوالات متداول',
                    href: '/'
                },
            ]
        },
        {
            header: 'خدمات توانا',
            children: [
                {
                    title: 'سرمایه‌گذاری',
                    href: '/'
                },
                {
                    title: 'ثبت‌نام معاملات آنلاین',
                    href: '/'
                },
                {
                    title: 'بورس کالا',
                    href: '/goodsBrokerage'
                },
                {
                    title: 'بورس انرژی',
                    href: '/energyBrokerage'
                },
            ]
        },
        {
            header: 'ارتباط با توانا',
            children: [
                {
                    title: 'لیست شعب و نمایندگی‌ها',
                    href: '/branches'
                },
                {
                    title: 'تماس با ما',
                    href: '/'
                },
                {
                    title: 'ثبت‌ نام شعبه دیجیتال',
                    href: '/'
                },
                {
                    title: 'ورود به شعبه دیجیتال',
                    href: '/'
                },
            ]
        }
    ]

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
        <div className="bg-black flex py-20 px-10">
            <div className={'grow'}>
                <Image src={'/photos/Frame.svg'} height={50} width={180} alt={'tavana'} style={{ height: 'auto', width: 'auto' }} />
            </div>
            {
                footerItem.map((item: any) => {
                    return (
                        <div key={item.header} className={'grow'}>
                            <h3 className="text-white">{item.header}</h3>
                            <ul className="space-y-3 mt-5 text-[#757575]">
                                {
                                    item.children.map((sub: any) => {
                                        return (
                                            <li key={sub.title} className={'hover:text-white transition-all'}>
                                                <Link href={sub?.href}>
                                                    {sub.title}
                                                </Link>
                                            </li>

                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
            <div className="text-[#757575] basis-1/4 space-y-4">
                <p>
                    دفتر مرکزی: تهران، خیابان میرعماد، نبش کوچه ۳ روبروی فرمانداری، پلاک ۱۰، طبقه دوم شرقی
                </p>
                <p>
                    ۰۲۱-۴۲۹۰۶
                </p>
                <a href="mailto:info@tavana.net">
                    info@tavana.net
                </a>
                <div className="flex space-x-2 space-x-reverse">
                    {contact.map((item: any) => {
                        return (
                            <Link href={item.href} key={item.icon}>
                                <Image src={item.icon} height={30} width={30} alt={item.href} style={{ height: 'auto', width: 'auto' }} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}