import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const footerItem = [
        {
            header: 'درباره توانا',
            children: [
                {
                    title: 'معرفی توانا',
                    href: '/about'
                },
                {
                    title: ' شماره حساب‌ها',
                    href: '/banks'
                },
                {
                    title: 'فرصت‌های شغلی',
                    href: 'https://jobinja.ir/companies/powerful-financial-services/jobs'
                }
            ]
        },
        {
            header: 'خدمات توانا',
            children: [
                {
                    title: 'سرمایه‌گذاری',
                    href: '/vest-one'
                },
                {
                    title: 'ثبت‌نام معاملات آنلاین',
                    href: 'https://sejam.tavanaco.ir/send-otp'
                },
                {
                    title: 'بورس کالا',
                    href: '/kala'
                },
                {
                    title: 'بورس انرژی',
                    href: '/energy'
                },
            ]
        },
        {
            header: 'دسترسی سریع',
            children: [
                {
                    title: 'لیست شعب و نمایندگی‌ها',
                    href: '/branches'
                },
                {
                    title: 'تماس با ما',
                    href: '/contact-us'
                },
                {
                    title: 'ثبت‌ نام شعبه دیجیتال',
                    href: '/digital-branch'
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
    return (
        <div className="bg-[#111111] ">
            <div className="container lg:flex lg:flex-row py-[70px] gap-16">
                <div className={'sm:flex flex-col mb-16 sm:basis-1/5 sm:mb-0 hidden'}>
                    <Image src={'/tavana/tavana-english.svg'} height={40} width={130} alt={'tavana'} />
                    <div className="flex w-fit lg:mt-auto sm:mt-32">
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
                </div>

                <div className="grow lg:flex md:flex-row grid grid-cols-2 gap-5">
                    <div className="sm:hidden text-[#757575] basis-1/4 text-right">
                        <div className="footer-li mt-8">
                            دفتر مرکزی: تهران، خیابان میرعماد، نبش کوچه ۳ روبروی فرمانداری، پلاک ۱۰
                        </div>
                        <div className="footer-li">
                            ۰۲۱-۴۲۹۰۶
                        </div>
                        <a href="mailto:info@tavana.net" className="footer-li">
                            info@tavanaco.ir
                        </a>

                    </div>
                    {
                        footerItem.map((item: any) => {
                            return (
                                <div key={item.header} className={'grow'}>
                                    <div className="footer-header">{item.header}</div>
                                    <ul className="mt-8 text-[#757575]">
                                        {
                                            item.children.map((sub: any) => {
                                                return (
                                                    <li key={sub.title} className={'footer-li'}>
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
                    <div className="lg:hidden sm:block hidden text-[#757575] basis-1/4 sm:mt-0 text-center sm:text-right">
                        <div className="footer-header">ارتباط با توانا</div>
                        <div className="footer-li mt-8">
                            دفتر مرکزی: تهران، خیابان میرعماد، نبش کوچه ۳ روبروی فرمانداری، پلاک ۱۰
                        </div>
                        <div className="footer-li">
                            ۰۲۱-۴۲۹۰۶
                        </div>
                        <a href="mailto:info@tavana.net" className="footer-li">
                            info@tavanaco.ir
                        </a>
                    </div>
                </div>
                <div className="hidden lg:block text-[#757575] basis-1/4 sm:mt-0 text-center sm:text-right">
                    <div className="footer-header">ارتباط با توانا</div>
                    <div className="footer-li mt-8">
                        دفتر مرکزی: تهران، خیابان میرعماد، نبش کوچه ۳ روبروی فرمانداری، پلاک ۱۰
                    </div>
                    <div className="footer-li">
                        ۰۲۱-۴۲۹۰۶
                    </div>
                    <a href="mailto:info@tavana.net" className="footer-li">
                        info@tavanaco.ir
                    </a>
                </div>
                <div className="flex w-fit mt-20 mx-auto sm:hidden">
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
            </div>
        </div >
    )
}