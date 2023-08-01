import { Button } from "../common/button";

export default function Section1() {
    const handleClickScroll = () => {
        const element = document.getElementById('section-4');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="linearBlack text-white mt-[118px] pt-[190px]">
            <div className="container flex flex-col lg:flex-row ">
                <div className="sm:basis-1/2 mb-16 sm:mb-0">
                    <h1>
                        از مشـاوره تا معامله<br />
                        در بورس کالا
                    </h1>
                    <p className="mt-12">
                        قدم به قدم همراهتان هستیم.
                    </p>
                    <Button className="mt-12 mb-8 lg:mb-0" isSecondary onClick={handleClickScroll}>
                        درخواست مشاوره
                    </Button>
                </div>
                <div className="basis-1/2">
                    <img src="/photos/kala.jpg" height={'950px'} width={'864px'} alt="kala" />
                </div>
            </div>
        </section>
    )
}