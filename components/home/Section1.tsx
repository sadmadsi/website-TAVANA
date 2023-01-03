export default function Section1() {
    return (
        <section className="bg-black text-white ">
            <div className="container flex flex-col justify-between h-full py-10">
                <h1>بهتر از همه معامله کنید</h1>
                <h2>
                    با کمک فناوری‌های روز و بلاکچین، محصول قدرتمندی طراحی کرده‌ایم تا معامله‌گران بورس،<br /> سطح بالاتری از معامله‌گری را تجربه کنند و مطابق استانداردهای جهانی، از فرصت‌های بیشتری<br /> برای کسب سود در بازار سرمایه ایران بهره‌مند شوند.

                    <span className="text-[#757575] block mt-10">
                        این محصول به زودی معرفی خواهد شد.
                    </span>
                </h2>
                <form className="flex">
                    <input type="text" placeholder="نام و نام خانوادگی" className="bg-transparent border-b border-white p-3 focus:outline-none" />
                    <input type="text" placeholder="نام و نام خانوادگی" className="bg-transparent border-b border-white p-3 focus:outline-none mx-10" />
                    <button type="submit" className="bg-white text-black p-3 transition-all hover:bg-white/70" >درخواست دمو</button>
                </form>
            </div>
        </section>
    )
}