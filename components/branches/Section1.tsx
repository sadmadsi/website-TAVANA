import { Accordion } from "flowbite-react";
import {
    ChevronLeftIcon
} from '@heroicons/react/24/outline'
import { useState } from "react";
import Link from "next/link";
import { Button } from "../common/button";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Tabs } from "../common/tab/tab-container";
import { Tab } from "../common/tab/tab";
import { Detail } from "./detail";
import { spawn } from "child_process";

const Tehran = [
    {
        title: 'دفتر مرکزی',
        address: 'تهران، خیابان میرعماد، نبش کوچه 3 روبروی فرمانداری پلاک 10',
        detail: [
            'تلفن 1: 42906-021',
            'تلفن 2: 88718407'
        ]
    },
    {
        title: 'شعبه بورس کالا',
        address: 'تهران، خیابان میرعماد، نبش کوچه 3 روبروی فرمانداری پلاک 10',
        detail: [
            'تلفن 1: 42906-021',
            'تلفن 2: 88718407'
        ]
    }
]

const otherCities = [
    {
        title: 'دفتر پذیرش ورامین',
        address: 'استان تهران - شهرستان ورامین - خیابان معلم - کوچه مهمان نواز - پلاک78',
        detail: [
            'مسئول پذیرش: خانم نیلوفر سادات اقوامی',
            'کدپستی : 3133614812',
            'تلفن 1: 36246236 - 021',
            'تلفن 2: 36273172 - 021'
        ],
        location: 'https://www.google.com/maps/place/%DA%A9%D8%A7%D8%B1%DA%AF%D8%B2%D8%A7%D8%B1%DB%8C+%D8%AA%D9%88%D8%A7%D9%86%D8%A7(%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D8%A7%D9%86+%D8%B3%D9%87%D8%A7%D9%85+%D8%B3%D8%A7%D8%A8%D9%82+)%E2%80%AD/@35.3269392,51.635612,20z/data=!4m6!3m5!1s0x3f91976f533d71e9:0xe215920ca39177a!8m2!3d35.3269704!4d51.6360023!16s%2Fg%2F11hw2y65ft'
    },
    {
        title: 'دفتر پذیرش کرج',
        address: 'آدرس: میدان مادر، ابتدای بلوار یادگار امام، بین خیابان رودکی و خیام، ساختمان مدرن، طبقه پنجم، واحد 11',
        detail: [
            'کدپستی : 3133614812',
            'تلفن 1: 32760925 - 026',
            'تلفن 2: 32762414 - 026'
        ],
        location: 'https://www.google.com/maps/search/35.816932,+50.959782?shorturl=1'
    },
    {
        title: 'تالار اختصاصی کرج',
        address: 'کرج، چهارراه هفت تیر، ابتدای بلوار دانش آموز، ساختمان صبا پلاک 744، طبقه اول واحد 1',
        detail: [
            'کدپستی : 31366996553',
            'تلفن 1: 32734990  - 026',
            'تلفن 2: 32734993  - 026',
            'تلفن 2: 32734994   - 026'
        ]
    },
    {
        title: 'دفتر پذیرش کرج',
        address: 'آدرس: میدان مادر، ابتدای بلوار یادگار امام، بین خیابان رودکی و خیام، ساختمان مدرن، طبقه پنجم، واحد 11',
        detail: [
            'مسئول پذیرش: حسن عزیزی',
            'کدپستی : 3133614812',
            'تلفن 1: 32760925 - 026',
            'تلفن 2: 32762414 - 026'
        ],
        location: 'https://www.google.com/maps/search/35.812447,+50.985080?shorturl=1'
    },
    {
        title: 'کیش',
        address: 'کیش، میدان امیرکبیر، برج مالی کیش(آنا)، طبقه اول',
        detail: [
            'کدپستی : 7941757182',
            'تلفن 1: 07644480560',
        ],
        location: 'https://www.google.com/maps/search/26.543534,+54.013065?shorturl=1'
    },
    {
        title: 'شیراز',
        address: 'استان فارس، شیراز، خیابان شهید بهشتی ، کوچه 5 ، پلاک 234',
        detail: [
            'کدپستی : 7173643548',
            'تلفن : 07191015008',
        ],
        location: 'https://www.google.com/maps/search/29.621962,+52.515033?shorturl=1'
    },
    {
        title: 'تالار اختصاصی کرج',
        address: 'شیراز، آباده، خیابان 17 شهریور، نبش خیابان پورپاکار، پلاک 10',
        detail: [
            'کدپستی : 7391817877',
            'تلفن : 07144347299',
        ],
        location: 'https://www.google.com/maps/search/31.155691,+52.652491?shorturl=1'
    },
    {
        title: 'ارومیه',
        address: 'ارومیه.خیابان برق.چهاراه آپادانا.جنب اداره تربیت بدنی.سازمان بورس و اوراق بهادار.طبقه اول',
        detail: [
            'کدپستی : 5715794346',
            'تلفن :  33477188-044',
            'فکس: 33477188-044'
        ],
        location: 'https://www.google.com/maps/search/37.546345,+45.043474?shorturl=1'
    },
    {
        title: 'نقده',
        address: 'استان آذربایجان غربی، شهرستان نقده، میدان قلم، خیابان مطهری 2، نرسیده به میدان مادر',
        detail: [
            'کدپستی : 5761643587',
            'تلفن : 35664433 -044',
        ],
        location: 'https://www.google.com/maps/search/36.947421,+45.392852?shorturl=1'
    },
    {
        title: 'یزد',
        address: 'یزد، بلوار امام جعفرصادق، پلاک201، طبقه اول',
        detail: [
            'کدپستی : 8916778206',
            'تلفن : 36297173-035',
        ],
        location: 'https://www.google.com/maps/search/31.897403,+54.359539?shorturl=1'
    },
    {
        title: 'اصفهان',
        address: 'اصفهان، خیابان چهارباغ بالا، روبری مجتمع کوثر، مجتمع باران، طبقه دوم، واحد 07',
        detail: [
            'تلفن : 36672648-031',
        ],
        location: 'https://www.google.com/maps/search/32.640645,+51.668039?shorturl=1'
    },
    {
        title: 'شهرضا',
        address: 'شهرضا، میدان مفتح، ابتدای خیابان حافظ غربی، مجتمع تجاری اداری اشکان، طبقه دوم',
        detail: [
            'کدپستی : 8614968481',
            'تلفن :  53502458-031',
            'فکس: 53502458-031'
        ],
        location: 'https://www.google.com/maps/search/32.006657,+51.852579?shorturl=1'
    },
    {
        title: 'خمین',
        address: 'خمین.میدان سرداران.مجتمع ولیعصر.طبقه1.واحد6',
        detail: [
            'کدپستی : 3881847684',
            'تلفن : 46228801-086',
            'فکس: 46228801-086'
        ],
        location: 'https://www.google.com/maps/search/33.646666,+50.080488?shorturl=1'
    },
    {
        title: 'تبریز',
        address: 'آذربایجان شرقی، تبریز، باغشمال، ارتش جنوبی، تالار منطقه ای تبریز',
        detail: [
            'کدپستی : 5138675977',
            'تلفن : 35427626-041',
        ],
        location: 'https://www.google.com/maps/search/38.059656,+46.297853?shorturl=1'
    },
    {
        title: 'همدان',
        address: 'همدان. خیابان میرزاده عشقی کوچه تالار حافظ جنب ثبت احوال تالار بورس همدان',
        detail: [
            'کدپستی : 6516663685',
            '081-38253633 :تلفن ',
            'فکس: 38253633-081'
        ],
        location: 'https://www.google.com/maps/search/34.791771,+48.506285?shorturl=1'
    },
    {
        title: 'ملایر',
        address: 'ملایر، میدان امام، خیابان شهدا، روبروی شهرداری مرکزی، طبقه سوم بانک قوامین',
        detail: [
            'کدپستی : 6571686458',
            'تلفن : 32224715-081',
        ],
        location: 'https://www.google.com/maps/search/34.295211,+48.821246?shorturl=1'
    },
    {
        title: 'تالار اختصاصی مشهد',
        address: 'خراسان رضوی، مشهد، بلوار جانباز، جانباز 5/1، برج اداری مروارید گوهرشاد، طبقه 5، واحد 1',
        detail: [
            'کدپستی : 9197613297',
            'تلفن : 37628086 -051',
        ],
        location: 'https://www.google.com/maps/search/36.330311,+59.562309?shorturl=1'
    },
    {
        title: 'قوچان',
        address: 'استان خراسان رضوی، شهر قوچان، خیابان امام خمینی ، بین خیابان روشنی و شکری ، پلاک110، طبقه دوم',
        detail: [
            'کدپستی : 9471943931',
            'تلفن : 47234593-051',
        ],
        location: 'https://www.google.com/maps/search/37.108238,+58.511225?shorturl=1'
    },
    {
        title: 'زنجان',
        address: 'زنجان، الهیه، خیابان 35متری عاصم زنجانی، جنب بانک مسکن پلاک 24',
        detail: [
            'کدپستی : 4519868655',
            'تلفن : 33523084-024',
            'فکس: 33527509-024'
        ],
        location: 'https://www.google.com/maps/place/%DA%A9%D8%A7%D8%B1%DA%AF%D8%B2%D8%A7%D8%B1%DB%8C+%D8%AA%D9%88%D8%A7%D9%86%D8%A7%E2%80%AD/@36.6922876,48.4657312,19z/data=!4m5!3m4!1s0x3ff6199c08ba30b7:0xe1fa820607fe830a!8m2!3d36.6922887!4d48.466334?coh=164777&entry=tt&shorturl=1'
    },
    {
        title: 'دهدشت',
        address: 'استان کهگیلویه و بویراحمد -شهرستان دهدشت – میدان مرکزی-خیابان شهید نورالدینی-اولین کوچه سمت راست-جنب کتابفروشی قهرمانی',
        detail: [
            'کدپستی : 7571866534',
            'تلفن : 32265453 -074',
        ],
        location: "https://www.google.com/maps/place/30%C2%B047'40.1%22N+50%C2%B033'47.1%22E/@30.794476,50.563077,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.794476!4d50.563077"
    },
    {
        title: 'مهاباد',
        address: 'آذربایجان غربی، مهاباد، سه راه میدان آرد، خیابان طالقانی شرقی، خیابان امام شافعی، پاساژ میدیا، واحد 407 طبقه 4',
        detail: [
            'کدپستی : 5914615455',
            'تلفن : 42249494-044',
        ],
        location: "https://www.google.com/maps/place/36%C2%B045'58.8%22N+45%C2%B043'27.6%22E/@36.766326,45.724328,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.766326!4d45.724328"
    },
    {
        title: 'شهرکرد',
        address: 'چهارمحال بختیاری، شهرکرد، خیابان 12 محرم جنوبی، جنب کوچه 17، پاساژ ولیعصر، واحد 119',
        detail: [
            'کدپستی : 8816893779',
            'تلفن : 03832279741',
        ],
        location: 'https://www.google.com/maps/search/32.320863,+50.854754?shorturl=1'
    },
    {
        title: 'قانات',
        address: 'استان خراسان جنوبی - شهرستان قائم - خیابان بهشتی - نبش بهشتی سوم - طبقه همکف',
        detail: [
            'کدپستی : 32527390-056',
            'تلفن : 9761956946',
        ],
        location: 'https://www.google.com/maps/search/32.320863,+50.854754?shorturl=1'
    }
]

export default function Section1() {
    const [array, setArray] = useState(Tehran)
    const [location, setLocation] = useState('Tehran')

    return (
        <div className="relative mt-[118px] sm:pt-[120px] flex flex-col text-white">
            <div className="h-[30vh] container bg-[url(/icons/Vector_faded.png)] bg-contain sm:bg-left bg-bottom bg-no-repeat bg-black flex flex-col text-white">
                <div className="sm:py-10 pt-[100px]">
                    <h1>شعب و نمایندگی ها</h1>
                </div>
            </div>
            <div className="bg-transparent flex flex-col py-10">
                <div className="flex space-x-5 space-x-reverse border-b-2 border-b-white sm:px-20 mb-10">
                    <Button className={`sm:px-20 px-10 sm:mr-0 mr-5 py-3 border-b-2 translate-y-0.5 ${location === 'Tehran' ? ' border-white border-2 border-b-black shadow-[0_1px_0px_0px_black]' : 'bg-transparent border-transparent'}`} onClick={() => {
                        setArray(Tehran)
                        setLocation('Tehran')
                    }}>
                        تهران
                    </Button>
                    <Button className={`sm:px-20 px-10 sm:mr-0 mr-5 py-3 border-b-0 translate-y-0.5 ${location === 'Others' ? ' border-white border-2 border-b-black shadow-[0_1px_0px_0px_black]' : 'bg-transparent border-transparent'}`} onClick={() => {
                        setArray(otherCities)
                        setLocation('Others')
                    }}>
                        سایر شهرها
                    </Button>
                </div>
                <div className="container space-y-5">
                    {
                        array.map((item: any) => {
                            return (
                                <div className="collapse border-b-2 border-white font-[Farhang]">
                                    <input type="checkbox" className="peer w-full" />
                                    <div className="collapse-title bg-transparent flex px-2 py-7 peer-checked:hidden">
                                        <ChevronLeftIcon className={'h-7 w-7 '} />
                                        <h4 className="font-[800] text-[23px] mr-5">{item.title}</h4>
                                    </div>
                                    <div className="collapse-title bg-transparent hidden px-2 py-7 peer-checked:flex transition-all ">
                                        <ChevronDownIcon className={'h-7 w-7 '} />
                                        <h4 className="font-[800] text-[23px] mr-5">{item.title}</h4>
                                    </div>
                                    <div className="collapse-content bg-transparent ">
                                        <p>
                                            {item.address}
                                        </p>
                                        <div className="flex sm:flex-row flex-col justify-between mt-5">
                                            <div className="grow space-y-3 ">
                                                {
                                                    item?.detail?.map((sub: string) => {
                                                        return (
                                                            <div key={sub}>
                                                                {sub}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <Link target={'_blank'} href={item?.location || "https://www.google.com/maps/place/Tavana+Brokerage/@35.7257914,51.4256784,15z/data=!4m5!3m4!1s0x0:0xde5f38aa74658635!8m2!3d35.7257934!4d51.4256783?sa=X&ved=2ahUKEwiA4IGN-9P8AhWt_rsIHW9ICyAQ_BJ6BAhXEAM&coh=164777&entry=tt&shorturl=1"}>
                                                <Button className="border w-fit sm:mt-0 mt-5 p-2 border-white flex items-center px-2" >
                                                    مشاهده روی نقشه
                                                    <ChevronLeftIcon className='h-5 w-5' />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div >

    )
}