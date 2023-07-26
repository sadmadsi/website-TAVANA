import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from '../button'

export default function Section4() {
    return (
        <section className="bg-secondaryTavana">
            <div className='container py-[5vw] flex lg:flex-row flex-col h-full'>
                <div className='grow flex flex-col basis-1/2 ml-5'>
                    <h2>خرید خودرو <br /> در بورس کالا</h2>
                    <p className='text-justify mt-24 mb-10'>به‌صورت غیرحضوری کد معاملاتی فیزیکی بورس کالا را در کارگزاری توانا دریافت و <br className="sm:block hidden" />بدون قرعه‌کشی و پس از انتخاب قیمت، خودروی مدنظرتان را خریداری کنید.</p>
                    <div className='flex md:flex-row flex-col md:space-x-2 md:items-end space-y-2 mb-5 md:space-x-reverse'>
                        <Link href={'https://tavana.ebgo.ir/GetBourseCode/getInformation?src=harmony'} className={'w-fit'}>
                            <Button >
                                دریافت کد معاملاتی بورس کالا
                                <span className='mr-2'>
                                    <ChevronLeftIcon className='h-5 w-5' />
                                </span>
                            </Button>
                        </Link>
                        <Link href={'/buy-car'} className={'w-fit'}>
                            <Button className="bg-transparent border-2 font-bold border-black text-black hover:bg-white/90">
                                اطلاعات تکمیلی
                                <span className='mr-2'>
                                    <ChevronLeftIcon className='h-5 w-5' />
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="grow h-full relative basis-1/2" >
                    <img src={'/photos/tesla.jpg'} height={'864px'} width={'864px'} alt={'trade'} />
                </div>
            </div>
        </section>
    )
}