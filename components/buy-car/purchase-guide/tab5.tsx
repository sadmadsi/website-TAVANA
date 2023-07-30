import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { Button } from "../../common/button"

export const Tab5 = () => {
    return (
        <div className="bg-white md:py-24">
            <div className="container md:p-1 p-5">
                <h3 className="max-w-[880px] mb-28 hidden md:block">تسویه حساب و انتخاب محل تحویل</h3>
                <p>
                    پس از کشف قیمت، لازم است در مدت زمان تعیین‌شده، مابقی مبلغ خودرو را با احتساب مالیات و هزینه شماره‌گذاری که اعلام می‌شود به حساب وکالتی واریز کنید. در غیر این‌صورت مشمول جریمه می‌شوید. هم‌چنین در این مرحله از بین نمایندگی‌های مجاز شرکت عرضه‌کننده، محل تحویل خودروی خود را انتخاب می‌کنید.                </p>
                <Button className={'bg-transparent md:mt-24 mt-5 bg-black'}>
                    دریافت کد بورسی کالا
                    <ChevronLeftIcon className="h-5 w-5 mr-5" />
                </Button>
            </div>
        </div>
    )
}