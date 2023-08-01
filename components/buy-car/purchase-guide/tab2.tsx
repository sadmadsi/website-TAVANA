import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Button } from "../../common/button"

export const Tab2 = () => {
    return (
        <div className="bg-white md:py-24">
            <div className="container md:p-1 p-5">
                <h3 className="max-w-[880px] mb-28 hidden md:block">افتتاح حساب بانکی وکالتی</h3>
                <p>
                    حساب بانکی وکالتی، حسابی به نام شماست که پیش‌پرداخت خرید خود را به آن حساب واریز می‌کنید و مطابق معرفی‌نامه، کارگزاری توانا می‌تواند برای خرید خودرو از این حساب، وجه لازم را برداشت کند. برای افتتاح حساب وکالتی ابتدا باید فرم معرفی‌نامه را در زمان ثبت‌نام در سامانه ایبیگو دریافت کنید. سپس به ‌همراه این معرفی‌نامه و سایر مدارک مورد نیاز برای افتتاح حساب بانکی، به شعب یکی از بانک‌های معرفی شده در سامانه ایبیگو مراجعه کنید. لازم به ذکر است درصورتی که چک برگشتی داشته باشید نمی‌توانید حساب بانکی وکالتی درخواست کنید.                </p>
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