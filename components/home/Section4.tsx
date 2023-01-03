import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section4() {
    return (
        <section className="bg-mustard">
            <div className='container p-10 flex h-full'>
                <div className='grow flex flex-col justify-between basis-1/2'>
                    <h1>خرید خودرو <br /> در بورس کالا</h1>
                    <h2>به‌صورت غیرحضوری کد معاملاتی فیزیکی بورس کالا را در<br /> کارگزاری توانا دریافت و بدون قرعه‌کشی و پس از انتخاب<br /> قیمت، خودروی مدنظرتان را خریداری کنید.</h2>
                    <div className='flex space-x-2 space-x-reverse'>
                        <button className="bg-black border border-black px-2 py-3 text-white flex w-fit transition-all hover:bg-black/80">
                            دریافت کد معاملاتی بورس کالا
                            <span>
                                <ChevronLeftIcon className='h-5 w-5' />
                            </span>
                        </button>
                        <button className="bg-transparent border border-black px-2 py-3 text-black flex w-fit transition-all hover:bg-white/20">
                            اطلاعات تکمیلی
                            <span>
                                <ChevronLeftIcon className='h-5 w-5' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="grow h-full bg-[url('/photos/tesla.svg')] bg-no-repeat bg-contain bg-center basis-1/2" />
            </div>
        </section>
    )
}