export default function Section1() {
    return (
        <section className="bg-black text-white ">
            <div className="container  flex flex-col justify-between h-full pt-30 pb-24">
                <div className="bg-[url('/icons/orderOde.svg')] bg-no-repeat bg-contain bg-right h-[140px] flex flex-col"><h1 className="mt-auto leading-[35px]">بهتر از همه معامله کنید</h1></div>
                <h2 className="mt-[70px]">
                    با کمک فناوری‌های روز و بلاکچین، محصول قدرتمندی طراحی کرده‌ایم تا معامله‌گران بورس،<br /> سطح بالاتری از معامله‌گری را تجربه کنند و مطابق استانداردهای جهانی، از فرصت‌های بیشتری<br /> برای کسب سود در بازار سرمایه ایران بهره‌مند شوند.

                    <span className="text-[#757575] block mt-10">
                        این محصول به زودی معرفی خواهد شد.
                    </span>
                </h2>
                <form className="flex pt-44">
                    <input type="text" placeholder="نام و نام خانوادگی" className="bg-transparent border-0 border-b border-white p-3 focus:shadow-none focus:ring-0" />
                    <input type="text" placeholder="نام و نام خانوادگی" className="bg-transparent border-0 border-b border-white p-3 focus:shadow-none focus:ring-0 mx-10" />
                    <button type="submit" className="bg-white text-black p-3 px-5 transition-all hover:bg-white/70" >درخواست دمو</button>
                </form>
            </div>
        </section>
    )
}