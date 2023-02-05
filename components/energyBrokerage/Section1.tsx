export default function Section1() {

    const handleClickScroll = () => {
        const element = document.getElementById('section-4');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="flex container sm:flex-row flex-col linearBlack text-white mt-56">
            <div className="sm:basis-1/2 sm:mb-32 mb-0 p-10">
                <h1 >
                    توانا،<br />
                    پیشتاز در معاملات<br />
                    بورس انرژی
                </h1>
                <h2 className="mt-10">
                    شناخت دقیق بازار را از ما بخواهید
                </h2>
                <button className="bg-white border border-black text-black p-3 mt-12" onClick={handleClickScroll}>
                    درخواست مشاوره
                </button>
            </div>
            <div className="bg-[url(/photos/energy.jpg)] bg-cover bg-no-repeat h-full basis-1/2" />
        </section>
    )
}