import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section2() {

    const cards = [
        {
            title: 'مشاوره تخصصی و پذیرش انواع کالا و اوراق بهادار قابل معامله در بورس انرژی'
        },
        {
            title: 'دریافت کد معاملاتی شرکت‌های ایرانی و خارجی'
        },
        {
            title: 'مشاوره تخصصی در خصوص ماهیت و قیمت انواع فرآورده نفتی'
        },
        {
            title: 'مشاوره تخصصی در خصوص سازوکار بورس انرژی و فرآیند‌های معاملاتی'
        },
        {
            title: 'انجام معاملات تمامی موارد قابل معامله در بورس انرژی'
        }
    ]
    return (
        <div className="bg-white">
            <div className="container p-10">
                <h1 className='mb-20'>خدمات توانا در بورس انرژی</h1>
                <div className="sm:grid xl:grid-cols-3 sm:grid-cols-2 gap-3">
                    {cards.map((item: any) => {
                        return (
                            <div key={item.title} className="border-4 border-black px-10 py-14 text-black flex sm:mb-0 mb-4">
                                <span className='w-5 ml-5'>
                                    <ChevronLeftIcon className='h-5 w-5 ml-5' />
                                </span>
                                <h2 className='h-[150px]'>{item.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}