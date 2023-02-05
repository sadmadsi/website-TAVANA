export default function Section1() {
    const handleClickScroll = () => {
        const element = document.getElementById('section-4');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="flex flex-col sm:flex-row sm:h-screen container linearBlack text-white mt-56">
            <div className="sm:basis-1/2 mb-16 sm:mb-0">
                <h1>
                    از مشـاوره تا معامله<br />
                    در بورس کالا
                </h1>
                <h2>
                    قدم به قدم همراهتان هستیم.
                </h2>
                <button className="bg-white text-black p-3 mt-12" onClick={handleClickScroll}>
                    درخواست مشاوره
                </button>
            </div>
            <div className="bg-[url(/photos/kala.jpg)] bg-cover bg-no-repeat h-full basis-1/2" />
        </section>
    )
}