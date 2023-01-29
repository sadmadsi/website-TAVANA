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
        <div className="bg-mustard py-20">
            <div className="container p-10">
                <h1 className='mb-20'>خدمات توانا در بورس کالا</h1>
                <div className="grid grid-cols-3 gap-3">
                    {cards.map((item: any) => {
                        return (
                            <div key={item.title} className="border-4 border-black p-10 text-black flex">
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