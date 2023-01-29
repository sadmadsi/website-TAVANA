export default function Section1() {
    return (
        <section className="flex flex-col sm:flex-row bg-black text-white mt-11 ">
            <div className="basis-1/2 p-10">
                <h1>
                    از مشـاوره تا معامله<br />
                    در بورس کالا
                </h1>
                <h2>
                    قدم به قدم همراهتان هستیم.
                </h2>
            </div>
            <div className="bg-[url(/photos/kala.jpg)] bg-contain bg-no-repeat h-full basis-1/2" />
        </section>
    )
}