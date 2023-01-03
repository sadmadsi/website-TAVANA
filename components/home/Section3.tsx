import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section3() {
    return (
        <section className="bg-milk">
            <div className='container p-10 flex flex-col justify-between h-full'>
                <h1>همگام<br />
                    با روندهای جهانی</h1>
                <h2>شعبه دیجیتال توانا راهکاری به‌صرفه‌ و شفاف برای کسانی است که به<br /> بازاریابی و اخذ شعبه کارگزاری بورس علاقه‌مند هستند.</h2>
                <button className="bg-white px-2 py-3 border border-black text-black flex w-fit transition-all hover:bg-white/20">
                    دریافت شعبه دیجیتال
                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </button>
            </div>
        </section>
    )
}