import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function TimeLine() {
    return (
        <div className="flex flex-col sm:bg-[url('/photos/banner.jpg')] bg-[url('/photos/mobile_banner.jpg')] bg-no-repeat bg-center bg-cover sm:bg-center sm:justify-end justify-center h-screen relative">
            {/* <Image src={'/photos/banner.jpg'} fill alt={'trade'} style={{ objectFit: 'cover' }} /> */}
            <div className='container flex py-16 sm:mt-56 z-[5]'>
                <div className='w-full mr-auto sm:w-full lg:w-1/2'>
                    <h1>
                        سرمایه‌گذاری <br /> تخصصی در بورس
                    </h1>
                    <h2 className='py-10'>
                        زندگی دکمه بازگشت ندارد. سرمایه‌گذاری را اثربخش  و ساده کرده‌ایم تا بهتر زندگی کنید.
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