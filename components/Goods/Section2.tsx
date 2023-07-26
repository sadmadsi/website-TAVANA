import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section2() {

    const cards = [
        {
            title: 'مشاوره و انجام تمامی امور اجرایی برای پذیرش شرکت‌ها در بورس کالا'
        },
        {
            title: 'مشاوره و انجام تمامی امور اجرایی برای پذیرش کالاهای منقول و غیرمنقول'
        },
        {
            title: 'عرضه کالاهای منقول و غیرمنقول پذیرش شده در بورس کالا'
        },
        {
            title: 'ارائه گزارش از محصولات عرضه شده در بورس کالا به مشتریان'
        },
        {
            title: 'ارائه گزارش از معاملات بورس کالا و اخبار بازار سرمایه به مشتریان'
        },
        {
            title: 'انجام معاملات تمامی کالاهای قابل معامله در بورس کالای ایران (داخلی و صادراتی)'
        },
    ]
    return (
        <div className="bg-white sm:py-20 py-0">
            <div className="container p-10">
                <h2 className='mb-20'>خدمات توانا در بورس کالا</h2>
                <div className="sm:grid lg:grid-cols-3 grid-cols-1 gap-3">
                    {cards.map((item: any) => {
                        return (
                            <div key={item.title} className="border-4 border-black px-10 py-14 text-black flex w-full mb-4 sm:mb-0">
                                <span className='w-5 ml-5'>
                                    <ChevronLeftIcon className='h-5 w-5 ml-5' />
                                </span>
                                <p className='h-[150px]'>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}