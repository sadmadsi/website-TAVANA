import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section4() {
    const cards = [
        {
            title: 'سبد شما به‌نام خودتان به‌صورت اختصاصی و مستقل از دیگر سبدها مدیریت می‌شود'
        },
        {
            title: 'یک کد بورسی مجزا از طرف سازمان بورس برای وست وان شما صادر می‌شود'
        },
        {
            title: 'یک کد بورسی مجزا از طرف سازمان بورس برای وست وان شما صادر می‌شود'
        },
        {
            title: 'به‌صورت روزانه از خرید و فروش‌ها و وضعیت سبدتان گزارش دریافت می‌کنید'
        },
        {
            title: 'کارمزد و شرایط مشارکت توانا در سود کسب‌شده، توافقی تعیین می‌شود'
        }
    ]

    return (
        <div className="bg-black text-white py-10">
            <div className="container">
                <h1>
                    تخصصی و البته اختصاصی انتخاب کنید
                </h1>
                <h2 className="text-justify">
                    وست وان ابزار سرمایه‌گذاری با استفاده از توان و دانش متخصصان است اما می‌تواند متناسب با انتظارات و شرایط شما اختصاصی شود. ویژگی‌های سرمایه‌گذاری از طریق وست وان به شرح ذیل است:
                </h2>
                <div className="sm:grid sm:grid-cols-3 gap-3 mt-24">
                    {cards.map((item: any) => {
                        return (
                            <div key={item.title} className="border-4 border-white py-16 px-10 flex sm:mb-0 mb-4">
                                <ChevronLeftIcon className='h-5 w-5 ml-5' />
                                <h2>{item.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}