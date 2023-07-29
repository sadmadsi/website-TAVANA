import { useState } from "react";
import Modal from "../common/modal/modal";

export default function Section2() {
    const [modal, setModal] = useState(false)

    const closeModalHandler = (state: boolean) => {
        document.getElementsByTagName('html')[0].className = '';
        setModal(state)
    }
    return (
        <div className="container py-[10vw]">
            <h2>شفافیت و درآمدی فراتر از همه</h2>
            <div className="lg:pt-24 ">
                <div className="flex h-full lg:flex-row flex-col ">
                    <div className="sm:basis-1/2 lg:mt-16 mb-5 lg:mb-0">
                        <p className="lg:w-[81.3%]">
                            در اپلیکیشن شعبه دیجیتال توانا کارمزد مشتریان و سهم شما از این کارمزد شفاف و دقیق است. درصد بازگشت کارمزد در توانا نیز بسته به سطح فعالیت شما، فراتر از پرداختی سایر کارگزاری‌هاست.
                        </p>
                        <p className="lg:w-[81.3%] mt-8" >می‌توانید به سادگی و از داخل اپلیکیشن شعبه دیجیتال، برای دریافت درآمدتان از کارمزد ایجاد شده اقدام کنید.</p>
                    </div>
                    <div className="basis-1/2">
                        <div className="bg-tertiaryTavana relative cursor-pointer lg:p-24 p-5 flex flex-col text-black" onClick={() => {
                            setModal(true);
                            document.getElementsByTagName('html')[0].className = 'overflow-hidden';
                        }}>
                            <h2 className="text-[40px] lg:w-2/3 pb-20 lg:pb-0 leading-[50px]"> آشنایی سریع با مزایای توانا و امکانات شعبه دیجیتال برای بازاریابان</h2 >
                            <div className="absolute left-5 bottom-5 mt-5">
                                <img src="/icons/Capture.PNG" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={modal} setOpen={closeModalHandler} title="">
                <video width="750" height="500" controls >
                    <source src={'/video/intro.mp4'} type="video/mp4" />
                </video>
            </Modal>
        </div>
    )
}