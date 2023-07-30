import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { InboxIcon } from "@heroicons/react/24/outline";
import { Button } from "../common/button";

export const Section3 = () => {

    return (
        <div className="bg-black text-white" >
            <div className="container py-[5vw]" >
                <h2 className="mb-32">سوار قیمت بهتری شوید</h2>
                <p>با خرید خودرو در بورس از کارگزاری توانا، واسطه‌ها را حذف کنید و خریدتان را با قیمت بهتری انجام دهید. قیمت خرید خودرو در بورس از کارگزاری توانا با بازار آزاد خودرو در جدول زیر مقایسه شده است.</p>
                <div className="overflow-auto">
                    <table className="w-full mt-12">
                        <thead >
                            <tr className="border-y-4 border-white h-[80px]">
                                <th className="max-w-[100px]">
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        خودرو
                                    </p>
                                </th>
                                <th>
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        قیمت تمام شده
                                    </p>
                                </th>
                                <th>
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        قیمت بازار آزاد
                                    </p>
                                </th>
                                <th>
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        سود یا زیان
                                    </p>
                                </th>
                                <th>
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        تاریخ تحویل
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <td colSpan={12} className="w-full text-center bg-white !py-[60px] text-[#00000040]">
                                <InboxIcon className="h-12 w-12 mx-auto" />
                                <p>داده ای موجود نیست</p>
                            </td>
                        </tbody>
                    </table>
                </div>
                <Button isSecondary className={'mt-5 w-full md:w-fit justify-center'}>
                    درخواست اطلاع از زمان عرضه خودرو
                    <ChevronLeftIcon className="h-5 w-5 mr-5" />
                </Button>
                <div id={'compare'}></div>
            </div>
        </div>
    )
}