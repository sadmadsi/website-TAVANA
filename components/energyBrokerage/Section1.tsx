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
            <div className="flex container lg:flex-row flex-col ">
                <div className="sm:basis-1/2 sm:mb-32 mb-0 p-10">
                    <h2 >
                        توانا،<br />
                        پیشتاز در معاملات<br />
                        بورس انرژی
                    </h2>
                    <p className="mt-10">
                        شناخت دقیق بازار را از ما بخواهید
                    </p>
                    <Button className="mt-12 mb-8 lg:mb-0" isSecondary onClick={handleClickScroll}>
                        درخواست مشاوره
                    </Button>
                </div>
                <div className="basis-1/2">
                    <img src="/photos/energy.jpg" width={'864p×'} height={'947px'} alt="energy" />
                </div>
            </div>

        </section>
    )
}