import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section3() {
    return (
        <section className="bg-milk">
            <div className="container bg-[url('/icons/DigitalTransformation.svg')] bg-center bg-contain bg-no-repeat py-32 flex flex-col h-full">
                <h1>همگام<br />
                    با روندهای جهانی</h1>
                <h2 className='mt-24'>شعبه دیجیتال توانا راهکاری به‌صرفه‌ و شفاف برای کسانی است که به<br /> بازاریابی و اخذ شعبه کارگزاری بورس علاقه‌مند هستند.</h2>
                <button className="bg-white mt-14 px-2 py-3 border border-black text-black flex w-fit transition-all hover:bg-white/20">
                    دریافت شعبه دیجیتال
                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </button>
            </div>
        </section>
    )
}