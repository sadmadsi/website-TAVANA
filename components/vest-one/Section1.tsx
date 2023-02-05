export default function Section1() {
    const handleClickScroll = () => {
        const element = document.getElementById('section-4');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="linearBlack text-white h-screen sm:mt-60 mt-24">
            <div className="container flex h-full sm:flex-row flex-col pt-20">
                <div className="basis-1/2">
                    <h1>
                        برای موفقیت،<br />
                        شناسایی سهام خوب<br />
                        کافی نیست!
                    </h1>
                    <h2>
                        ما برای شما مدیریت استراتژی، تحلیل بازار و مدیریت سبد روزانه انجام می‌دهیم.
                    </h2>
                    <button className="bg-white text-black p-3 mt-12" onClick={handleClickScroll}>
                        درخواست مشاوره
                    </button>
                </div>
                <div className="bg-[url(/photos/vest-one.jpg)] bg-contain bg-center bg-no-repeat h-full basis-1/2" />
            </div>
        </div>
    )
}