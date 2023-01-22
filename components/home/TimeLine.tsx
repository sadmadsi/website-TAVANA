import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function TimeLine() {
    return (
        <div className="flex flex-col justify-end h-screen relative">
            <Image src={'/photos/ski_bg.png'} fill alt={'trade'} style={{ objectFit: 'cover' }} />
            <div className='container py-16 mt-56 z-[5]'>
                <div className='w-full sm:w-full lg:w-1/2'>
                    <h1>
                        سرمایه‌گذاری <br /> تخصصی در بورس
                    </h1>
                    <h2 className='pb-10 pt-20'>
                        زندگی دکمه بازگشت ندارد. سرمایه‌گذاری را اثربخش <br /> و ساده کرده‌ایم تا بهتر زندگی کنید.
                    </h2>
                    <button className="bg-black px-2 py-3 text-white flex w-fit transition-all hover:bg-black/80">
                        آشنایی با وست‌وان
                        <span>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}