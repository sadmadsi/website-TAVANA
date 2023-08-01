import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Button } from "../../common/button"

export const Tab3 = () => {
    return (
        <div className="bg-white md:py-24">
            <div className="container md:p-1 p-5">
                <h3 className="max-w-[880px] mb-28 hidden md:block">واریز پیش‌پرداخت به حساب وکالتی</h3>
                <p>
                    تسویه قیمت خودرو در دو مرحله انجام می‌شود. در قدم اول پیش از ثبت سفارش می‌بایست مطابق با دستورالعمل سازمان بورس و اطلاع‌رسانی انجام شده در همین صفحه، مبلغ مشخصی را به‌عنوان پیش‌پرداخت به حساب وکالتی معرفی شده واریز کنید تا بتوانید سفارش خریدتان را ثبت کنید.                </p>
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