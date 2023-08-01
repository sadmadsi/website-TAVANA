import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Button } from "../../common/button"

export const Tab1 = () => {
    return (
        <div className="bg-white md:py-24">
            <div className="container md:p-1 p-5">
                <h3 className="max-w-[880px] mb-28 hidden md:block">ثبت‌نام و دریافت کد معاملاتی بورس کالا</h3>
                <p>
                    اگر در سجام ثبت‌نام و احراز هویت شده‌اید می‌توانید به‌صورت آنلاین و غیرحضوری از طریق ثبت‌نام در سامانه ایبیگو، کد معاملاتی بورس کالا را دریافت کنید. در صورتی که در سجام احراز هویت نکرده‌اید، ابتدا باید احراز هویت خود را تکمیل کنید. یادآور می‌شود اگر در ۲ سال گذشته وارد بورس شده‌اید حتما احراز هویت سجام را تکمیل کرده‌اید.
                </p>
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