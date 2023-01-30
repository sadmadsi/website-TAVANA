import Image from "next/image";
import { useState } from "react";

const Analytic = () => {
    return (<div className="bg-white container border-t-2 border-black py-20">
        <h1>تحلیل بازار</h1>
        <h2 className="text-justfiy mt-16">تحلیل‌گران توانا به کمک نرم‌افزارهای اختصاصی و تحلیل داده، به‌صورت روزانه بازار را رصد و سهم‌های ارزشمند را شناسایی می‌کنند. هم‌چنین مشاوران اقتصادی خبره در کنار تیم تحلیل توانا حضور دارند تا روندهای خرد و کلان اقتصادی را بررسی کنند و فرصت‌های بهتری برای سرمایه‌گذاری ارائه دهند.</h2>
    </div>)
}

const Strategy = () => {
    return (<div className="bg-white container border-t-2 border-black py-20">
        <h1>مدیریت استراتژی</h1>
        <h2 className="text-justfiy mt-16">استراتژی درست لازمه موفقیت در سرمایه‌گذاریست. متناسب با شرایط اقتصادی و انتظارات شما، استراتژی سرمایه‌گذاری در کلاس‌های دارایی، اوراق و صنایع مختلف تنظیم می‌شود و باتوجه به تحولات اقتصادی و شرایط بازار این استراتژی بهینه می‌شود.</h2>
    </div>)
}

const Managing = () => {
    return (<div className="bg-white container border-t-2 border-black py-20">
        <h1>مدیریت سبد</h1>
        <h2 className="text-justfiy mt-16">معامله‌گران ما دانش خود در زمینه خریدوفروش به‌موقع و فرآیند درست آن را به‌کار می‌گیرند تا سهم مناسب در زمان مناسب برای شما خریداری و به‌منظور کسب بازدهی مطلوب در زمان مناسب با دارایی دیگری مطابق استراتژی سرمایه‌گذاری جایگزین شود.</h2>
    </div>)
}

export default function Section3() {
    const [mode, setMode] = useState('analytic')

    const components = {
        'analytic': <Analytic />,
        'strategy': <Strategy />,
        'managing': <Managing />
    }[mode]

    return (
        <>
            <div className="bg-[#70c1d2] pt-12">
                <div className="container pb-0">
                    <div className="flex sm:flex-row flex-col sm:h-auto h-[50vh]">
                        <div className="basis-1/2">
                            <h1>
                                ویژگی‌های اختصاصی <br />
                                وست وان
                            </h1>
                            <h2 className="text-justify mt-16">
                                وست وان ابزار سرمایه‌گذاری با استفاده از توان و دانش متخصصان است اما می‌تواند متناسب با انتظارات و شرایط شما اختصاصی شود.
                            </h2>
                        </div>
                        <div className="basis-1/2 bg-[url(/photos/eggs.png)] bg-contain bg-no-repeat sm:bg-left bg-center">

                        </div>
                    </div>
                    <div className="flex mt-20 space-x-5 space-x-reverse">
                        <button className={`text-center font-extrabold ${mode === 'analytic' ? 'bg-white border-2  border-black' : 'bg-transparent'} p-5  border-b-0 translate-y-0.5 z-10`} onClick={() => setMode('analytic')}>
                            <div className="h-12 w-12 m-auto mb-5">
                                <Image src={'/icons/market-analytics.svg'} height={48} width={48} alt={''} />
                            </div>
                            <h2>
                                تحلیل بازار
                            </h2>
                        </button>
                        <button className={`text-center font-extrabold ${mode === 'strategy' ? 'bg-white border-2  border-black' : 'bg-transparent'} p-5  border-b-0 translate-y-0.5 z-10`} onClick={() => setMode('strategy')}>
                            <div className="h-12 w-12 m-auto mb-5">
                                <Image src={'/icons/strategy.svg'} height={48} width={48} alt={''} />
                            </div>
                            <h2>
                                مدیریت استراتژی
                            </h2>
                        </button>
                        <button className={`text-center font-extrabold ${mode === 'managing' ? 'bg-white  border-2 border-black' : 'bg-transparent'}  p-5  border-b-0 translate-y-0.5 z-10`} onClick={() => setMode('managing')}>
                            <div className="h-12 w-12 m-auto mb-5">
                                <Image src={'/icons/portfolio-management.svg'} height={48} width={48} alt={''} />
                            </div>
                            <h2>
                                مدیریت سبد
                            </h2>
                        </button>
                    </div>
                </div>
            </div>
            {components}
        </>
    )
}