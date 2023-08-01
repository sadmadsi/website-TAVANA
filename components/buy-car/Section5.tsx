import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Button } from "../common/button"

export const Section5 = () => {
    return (
        <div className="bg-black py-[5vw] text-white">
            <div className="container flex flex-col md:flex-row">
                <div className="basis-1/2">
                    <h2>مراجعه حضوری
                        <br />
                        برای خرید خودرو
                    </h2>
                    <p className="pl-12 mt-24">
                        به‌منظور ثبت‌نام و خرید خودرو در بورس می‌توانید علاوه بر سامانه ایبیگو به‌صورت حضوری به شعب کارگزاری توانا در سراسر کشور نیز مراجعه کنید. مرکز پشتیبانی مشتریان کارگزاری توانا نیز در رابطه با مراحل مختلف خرید خودرو در بورس و دیگر موارد پاسخ‌گوی شما است.
                    </p>
                    <Link href={'/branches'}>
                        <Button isSecondary className={'mt-24'}>
                            مشاهده شعبه
                            <ChevronLeftIcon className="h-5 w-5 mr-5" />
                        </Button>
                    </Link>
                    <div className="flex justify-between mt-24 mb-5 md:mb-0">
                        <div>
                            مرکز پشیبانی
                        </div>
                        <a href="tel:02142906" className="border-b border-dashed border-white">
                            021-42906
                        </a>
                    </div>
                </div>
                <div className="basis-1/2 flex justify-end">
                    <img src="/photos/in-person.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}