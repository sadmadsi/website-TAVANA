import { Button } from "../button";

export default function Section1() {
    const handleClickScroll = () => {
        const element = document.getElementById('section-4');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="linearBlack text-white pt-[180px] mt-[118px]">
            <div className="container flex h-full lg:flex-row flex-col">
                <div className="basis-1/2">
                    <h1>
                        برای موفقیت،<br />
                        شناسایی سهام خوب<br />
                        کافی نیست!
                    </h1>
                    <p>
                        ما برای شما مدیریت استراتژی، تحلیل بازار و مدیریت سبد روزانه انجام می‌دهیم.
                    </p>
                    <Button className="mt-12 mb-8 lg:mb-0" isSecondary onClick={handleClickScroll}>
                        درخواست مشاوره
                    </Button>
                </div>
                <div className="basis-1/2">
                    <img src="/photos/vest-one.jpg" height={'955px'} width={'864p×'} />
                </div>
            </div>
        </div>
    )
}