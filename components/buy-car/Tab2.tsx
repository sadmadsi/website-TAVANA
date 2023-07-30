import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { Button } from "../common/button"

export const Tab2 = () => {
    return (
        <div className="bg-milky py-24">
            <div className="container">
                <p className="max-w-[880px]">در حال حاضر خودرویی برای خرید، در دسترس نیست. می‌توانید خودروی مدنظرتان را انتخاب کنید تا بلافاصله پس از اعلام سازمان بورس، زمان عرضه آن به اطلاعتان برسد.</p>
                <Button isSecondary className={'bg-transparent mt-24'}>
                    <ChevronLeftIcon className="h-5 w-5 ml-5" />
                    درخواست اطلاع از زمان عرضه خودرو
                </Button>
            </div>
        </div>
    )
}