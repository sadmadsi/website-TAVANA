import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Button } from "../../common/button"

export const Tab4 = () => {
    return (
        <div className="bg-white md:py-24">
            <div className="container md:p-1 p-5">
                <h3 className="max-w-[880px] mb-28 hidden md:block">ثبت سفارش خرید خودرو</h3>
                <p>
                    به‌منظور سفارش می‌بایست در تاریخ مجاز سفارش‌گیری که به اطلاعتان می‌رسد، از طریق سامانه ایبیگو که پیش‌تر در آن ثبت‌نام کرده‌اید، اقدام کنید. در صورتی که تعداد تقاضا بالاتر از عرضه باشد، خودرو به کسانی تعلق می‌گیرد که قیمت بالاتری ثبت کرده باشند.                </p>
                <Link href={'https://tavana.ebgo.ir/GetBourseCode/getInformation?src=harmony'}>
                    <Button className={'bg-transparent md:mt-24 mt-5 bg-black'}>
                        دریافت کد بورسی کالا
                        <ChevronLeftIcon className="h-5 w-5 mr-5" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}