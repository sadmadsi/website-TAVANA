import { useState } from "react"
import { Button } from "../common/button"
import Modal from "../common/modal/modal"

export const Tab1 = () => {
    const [modal, setModal] = useState(false)

    const modalHandler = (state: boolean) => {
        document.getElementsByTagName('html')[0].className = '';
        setModal(state)
    }
    return (
        <>
            <div className="container md:pt-[8vw] p-5  flex flex-col lg:flex-row md:bg-transparent bg-black text-white md:text-black">
                <div className="basis-1/2">
                    <h2 className="text-[45px] hidden md:block">اپلیکیشن شعبه دیجیتال توانا</h2>
                    <p className="my-12 pl-10">بستری برای شفافیت، مشاهده عملکرد و ارتباط ساده با کارگزاری توانا برای شما ایجاد کرده‌ایم.</p>
                    <Button className={'md:bg-black text-white md:border-black border-white md:leading-[41px] leading-[24px] mb-5 md:mb-0'} onClick={() => setModal(true)}>
                        مشاهده دمو اپلیکیشن
                    </Button>
                </div>
                <div className="basis-1/2 flex justify-center">
                    <img src="/photos/marketer.png" alt="" />
                </div>
            </div>
            <Modal open={modal} setOpen={modalHandler} title="">
                <video width="750" height="500" controls >
                    <source src={''} type="video/mp4" />
                </video>
            </Modal>
        </>
    )
}