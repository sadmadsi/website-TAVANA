import { Accordion } from "flowbite-react";
import {
    ChevronLeftIcon
} from '@heroicons/react/24/outline'
import { useState } from "react";

const Tehran = [
    {
        title: 'دفتر مرکزی',
    },
    {
        title: 'شعبه بورس کالا',
        address: 'میدان آرژانتین، خیابان خالد استامبولی، نبش خیابان بیست و یکم، ساختمان شیراز، پلاک 137، طبقه دوم، واحد جنوبی',
        detail: [
            'تلفن 1: 88723382',
            'تلفن 2: 88723383'
        ]
    },
    {
        title: 'دفتر پذیرش ورامین'
    }
]

const otherCities = [
    {
        title: 'شعبه کیش'
    },
    {
        title: 'دفتر پذیرش کرج',
        address: 'آدرس: میدان مادر، ابتدای بلوار یادگار امام، بین خیابان رودکی و خیام، ساختمان مدرن، طبقه پنجم، واحد 11',
        detail: [
            'مسئول پذیرش: حسن عزیزی',
            'کدپستی : 3133614812',
            'تلفن 1: 32760925 - 026',
            'تلفن 2: 32762414 - 026'
        ]
    },
    {
        title: 'تالار اختصاصی کرج'
    }
]

export default function Section1() {
    const [array, setArray] = useState(Tehran)
    const [location, setLocation] = useState('Tehran')

    return (
        <div className="relative sm:mt-48 mt-32 flex flex-col text-white ">
            <div className="sm:h-[30vh] h-[50vh] container bg-[url(/icons/Vector_faded.svg)] bg-contain sm:bg-left bg-bottom bg-no-repeat bg-black flex flex-col text-white">
                <div className="py-10">
                    <h1>شعب و نمایندگی ها</h1>
                </div>
            </div>
            <div className="bg-transparent flex flex-col py-10">
                <div className="flex space-x-5 space-x-reverse border-b border-b-white sm:px-20 mb-10">
                    <button className={`sm:px-20 px-10 sm:mr-0 mr-5 py-3 translate-y-0.5 ${location === 'Tehran' ? 'border-b-black border-white border-2' : ''}`} onClick={() => {
                        setArray(Tehran)
                        setLocation('Tehran')
                    }}>
                        تهران
                    </button>
                    <button className={`sm:px-20 px-10 sm:mr-0 mr-5 py-3 translate-y-0.5 ${location === 'Others' ? 'border-b-black border-white border-2' : ''}`} onClick={() => {
                        setArray(otherCities)
                        setLocation('Others')
                    }}>
                        سایر شهرها
                    </button>
                </div>
                <div className="container space-y-5">
                    {
                        array.map((item: any) => {
                            return (
                                <Accordion key={item.title} alwaysOpen={true} style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}>
                                    <Accordion.Panel>
                                        <Accordion.Title style={{ padding: '1rem', color: 'white' }}>
                                            {item.title}
                                        </Accordion.Title>
                                        <Accordion.Content style={{ padding: '1rem' }}>
                                            <h2>
                                                {item.address}
                                            </h2>
                                            <div className="flex sm:flex-row flex-col justify-between mt-5">
                                                <div className="grow flex flex-wrap space-x-5 space-x-reverse">
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
                                                <a href="https://www.google.com/maps/place/Tavana+Brokerage/@35.7257914,51.4256784,15z/data=!4m5!3m4!1s0x0:0xde5f38aa74658635!8m2!3d35.7257934!4d51.4256783?sa=X&ved=2ahUKEwiA4IGN-9P8AhWt_rsIHW9ICyAQ_BJ6BAhXEAM&coh=164777&entry=tt&shorturl=1">
                                                    <button className="border w-fit sm:mt-0 mt-5 p-2 border-white flex items-center px-2" >
                                                        مشاهده روی نقشه
                                                        <ChevronLeftIcon className='h-5 w-5' />
                                                    </button>
                                                </a>
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                </Accordion>
                            )
                        })
                    }

                </div>
            </div>
        </div >

    )
}