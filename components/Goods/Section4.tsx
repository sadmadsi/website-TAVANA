export default function Section4() {
    return (
        <section className="bg-[#E9E9E9] text-black">
            <div className="container py-10 flex flex-col h-full">
                <h1>کارشناسان توانا پاسخ‌‌گوی شما هستند</h1>
                <h2 className="mt-16">به‌منظور دریافت مشاوره و بهره‌مندی از خدمات توانا در بورس کالا فرم ذیل را تکمیل کنید</h2>
                <div className="sm:grid sm:grid-cols-3 gap-5 mt-auto mb-20">
                    <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="نام و نام خانوادگی" />
                    <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="نام شرکت" />
                    <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="شماره تماس" />
                    <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="درخواست" />
                    <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="توضیحات" />
                </div>
            </div>
        </section>
    )
}