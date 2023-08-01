import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { Button } from "../common/button"

export const Section1 = () => {
    return (
        <div className="linearBlack mt-[118px] lg:pt-[250px] pt-[120px]">
            <div className="container flex flex-col lg:flex-row">
                <div className="basis-1/2 text-white pl-12">
                    <section className="wrapper">
                        <h1 >
                            خرید خودرو در بورس
                            <br />
                            <div className="slidingVertical">
                                <span className="item">
                                    <h1>
                                        به قیمت بهتر از بازار
                                    </h1>
                                    <h1>
                                        بدون واسطه
                                    </h1>
                                    <h1>
                                        بدون قرعه‌کشی
                                    </h1>
                                </span>
                            </div>
                        </h1>
                    </section>
                    <p className="mt-20">
                        با دریافت کد معاملاتی بورس کالا در کارگزاری توانا می‌توانید خودروهای قابل عرضه را با قیمت بهتر از دیگران خریداری کنید. اگر در سجام احراز هویت کرده‌اید در کم‌تر از ۵ دقیقه می‌توانید کد معاملاتی بورس کالا را دریافت کنید.
                    </p>
                    <a href="https://tavana.ebgo.ir/GetBourseCode/getInformation?src=harmony" target={'_blank'}>
                        <Button isSecondary className={'mb-5 md:mb-0'}>
                            دریافت کد بورس کالا
                            <span>
                                <ChevronLeftIcon className="h-5 w-5 mr-5" />
                            </span>
                        </Button>
                    </a>
                </div>
                <div className="basis-1/2">
                    <img src="/photos/car.jpg" width={864} height={949} alt="car" />
                </div>
            </div>
        </div>
    )
}