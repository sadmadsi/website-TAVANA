import Image from "next/image"

export default function Section4() {

    const employee = [
        {
            name: 'حمیدرضا طریقی',
            photo: 'tarighi.jpg',
            position: 'مدیرعامل کارگزاری'
        },
        {
            name: 'علی آئین حسینی',
            photo: 'ayin.jpg',
            position: 'مدیرعامل سبدگردان'
        },
        {
            name: 'سعید اسماعیلی',
            photo: 'esmaili.jpg',
            position: 'عضو هیأت مدیره'
        },
        {
            name: 'علی یزدانی',
            photo: 'yazdani.jpg',
            position: 'معاون مالی'
        },
        {
            name: 'علیرضا نوبخت',
            photo: 'nobakht.jpg',
            position: 'مدیر بورس انرژی'
        },
        {
            name: 'محدثه محمدی',
            photo: 'mohammadi.jpg',
            position: 'مدیر بورس کالا'
        },
        {
            name: 'منصور عظیمی',
            photo: 'azimi.jpg',
            position: 'مدیر معاملات'
        },
        {
            name: 'بهروز عباس زاده',
            photo: 'azade.jpg',
            position: 'مدیر سرمایه‌گذاری'
        },
        {
            name: 'حمید خواجه سروی',
            photo: 'ksarvi.jpg',
            position: 'مدیر امور شعب'
        },
        {
            name: 'امین طاهری',
            photo: 'taheri.jpg',
            position: 'مدیر امور مشتریان'
        }, {
            name: 'مجتبی کیانی',
            photo: 'kiani.jpg',
            position: 'مدیر توسعه بازار'
        }
    ]
    return (
        <div className="bg-white container">
            <h1 className="mb-20 pt-12 md:pt-0">مدیران اجرایی</h1>
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-5">

                {employee.map((item: any) => {
                    return (
                        <div key={item.name} className={`sm:min-h-[370px] min-h-[200px] justify-end flex flex-col bg-contain bg-no-repeat bg-top`} style={{ backgroundImage: `url(/employee/${item.photo})` }}>
                            <h3 className="my-2 sm:text-xl text-black">{item.name}</h3>
                            <p className="text-[#6a6a6a] text-xs">{item.position}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}