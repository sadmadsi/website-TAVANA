import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Section2() {
    return (
        <section className="bg-navy">
            <div className='container flex sm:flex-row flex-col justify-between h-full py-16'>
                <div className='grow flex flex-col basis-1/2'>
                    <h1>معامله<br />
                        با پلتفرم برتر بازار</h1>
                    <h2 className='mt-20 mb-10'>سامانه آنلاین پلاس را بر بستر اپلیکیشن موبایل و‌<br /> نسخه تحت وب به شما ارائه می‌دهیم.</h2>
                    <button className="bg-black px-2 py-3 text-white flex w-fit transition-all hover:bg-black/80">
                        ثبت‌ نام آنلاین
                        <span>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </button>
                </div>
                <div className="relative grow h-full basis-1/2">
                    <Image src={'/photos/online-plus.jpg'} fill alt={'trade'} style={{ objectFit: 'cover' }} />
                </div>
            </div>
        </section>
    )
}