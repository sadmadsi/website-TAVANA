import Image from "next/image";
import { useState } from "react";

const Analytic = () => {
    return (<div className="bg-white border-t-2 border-black py-36">
        <div className="container">
            <h2>تحلیل بازار</h2>
            <p className="text-justfiy mt-16">تحلیل‌گران توانا به کمک نرم‌افزارهای اختصاصی و تحلیل داده، به‌صورت روزانه بازار را رصد و سهم‌های ارزشمند را شناسایی می‌کنند. هم‌چنین مشاوران اقتصادی خبره در کنار تیم تحلیل توانا حضور دارند تا روندهای خرد و کلان اقتصادی را بررسی کنند و فرصت‌های بهتری برای سرمایه‌گذاری ارائه دهند.</p>
        </div>
    </div>)
}

const Strategy = () => {
    return (<div className="bg-white  border-t-2 border-black py-36">
        <div className="container">
            <h2>مدیریت استراتژی</h2>
            <p className="text-justfiy mt-16">استراتژی درست لازمه موفقیت در سرمایه‌گذاریست. متناسب با شرایط اقتصادی و انتظارات شما، استراتژی سرمایه‌گذاری در کلاس‌های دارایی، اوراق و صنایع مختلف تنظیم می‌شود و باتوجه به تحولات اقتصادی و شرایط بازار این استراتژی بهینه می‌شود.</p>
        </div>
    </div>)
}

const Managing = () => {
    return (<div className="bg-white  border-t-2 border-black py-36">
        <div className="container">
            <h2>مدیریت سبد</h2>
            <p className="text-justfiy mt-16">معامله‌گران ما دانش خود در زمینه خریدوفروش به‌موقع و فرآیند درست آن را به‌کار می‌گیرند تا سهم مناسب در زمان مناسب برای شما خریداری و به‌منظور کسب بازدهی مطلوب در زمان مناسب با دارایی دیگری مطابق استراتژی سرمایه‌گذاری جایگزین شود.</p>
        </div>
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
            <div className="bg-secondaryTavana pt-28">
                <div className="container pb-0">
                    <div className="flex lg:flex-row flex-col lg:h-auto">
                        <div className="basis-1/2">
                            <h2>
                                همه تخم مرغ‌هایتان را
                                <br />
                                در سبد وست‌وان قرار دهید!
                            </h2>
                            <p className="mt-16">
                                در وست‌وان سبد متنوعی از دارایی‌های ارزشمند را برایتان تشکیل می‌دهیم در نتیجه می‌توانید روی مدیریت ریسک و کسب بازدهی بهینه سبدتان حساب کنید. تلاش می‌کنیم با فرآیندهای درست و نوآوری‌های تکنولوژیک، سرمایه‌گذاری ساده و اثربخشی را به شما ارائه دهیم.                            </p>
                        </div>
                        <div className="basis-1/2">
                            <img src="/photos/eggs.png" className="mr-auto" alt="eggs" />
                        </div>
                    </div>
                    <div className="flex lg:mt-32 space-x-5 space-x-reverse">
                        <button className={`text-center px-10 transition-all font-extrabold border-2 duration-500  ${mode === 'analytic' ? 'bg-white  border-black shadow-[0_1px_0px_0px_white] ' : 'bg-transparent border-transparent'} border-b-0 translate-y-0.5 p-5`} onClick={() => setMode('analytic')}>
                            <div className="h-12 w-12 m-auto mb-5">
                                <Image src={'/icons/market-analytics.svg'} height={48} width={48} alt={''} />
                            </div>
                            <p className="font-black font-[farhang]">
                                تحلیل بازار
                            </p>
                        </button>
                        <button className={`text-center px-10 transition-all font-extrabold border-2 duration-500  ${mode === 'strategy' ? 'bg-white  border-black shadow-[0_1px_0px_0px_white]' : 'bg-transparent border-transparent'}  border-b-0 translate-y-0.5 p-5`} onClick={() => setMode('strategy')}>
                            <div className="h-12 w-12 m-auto mb-5">
                                <Image src={'/icons/strategy.svg'} height={48} width={48} alt={''} />
                            </div>
                            <p className="font-black font-[farhang]">
                                مدیریت استراتژی
                            </p>
                        </button>
                        <button className={`text-center px-10 transition-all font-extrabold  border-2 duration-500 ${mode === 'managing' ? 'bg-white  border-black shadow-[0_1px_0px_0px_white]' : 'bg-transparent border-transparent'}  border-b-0 translate-y-0.5 p-5`} onClick={() => setMode('managing')}>
                            <div className="h-12 w-12 m-auto mb-5">
                                <Image src={'/icons/portfolio-management.svg'} height={48} width={48} alt={''} />
                            </div>
                            <p className="font-black font-[farhang]">
                                مدیریت سبد
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            {components}
        </>
    )
}