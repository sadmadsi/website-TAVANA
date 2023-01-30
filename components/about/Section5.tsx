import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section5() {
    return (
        <section className="linearSky container pb-0 flex md:flex-row flex-col">
            <div className="grow basis-1/2 py-12 md:py-0">
                <h1>
                    آینده را پیش‌بینی نکنید! <br />
                    در خلق آن مشارکت کنید
                </h1>
                <h2 className='mt-32 mb-10'>
                    برای ادامه مسیر روی تخصص شما حساب می‌کنیم. خودتان باشید تا در نوآوری موفق شویم.
                </h2>
                <button className="border-2 border-black bg-white p-3 flex items-center">
                    <span>
                        مشاهده فرصت های همکاری
                    </span>
                    <span>
                        <ChevronLeftIcon className='h-5 w-5' />
                    </span>
                </button>
            </div>
            <div className='grow basis-1/2 bg-[url(/photos/jobs.jpg)] bg-no-repeat bg-contain bg-center'>

            </div>
        </section>
    )
}