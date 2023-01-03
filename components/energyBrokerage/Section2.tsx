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
        <div className="bg-jolbaki">
            <div className="container p-10">
                <h1>خدمات توانا در بورس انرژی</h1>
                <div className="grid grid-cols-3 gap-3">
                    {cards.map((item: any) => {
                        return (
                            <div key={item.title} className="border-2 border-black p-10 text-black flex">
                                <ChevronLeftIcon className='h-5 w-5 ml-5' />
                                <div>{item.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}