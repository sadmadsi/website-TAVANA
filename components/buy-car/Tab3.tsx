import { ChevronLeftIcon } from "@heroicons/react/20/solid"
import { InboxIcon } from "@heroicons/react/24/outline"
import { Button } from "../common/button"

export const Tab3 = () => {
    return (
        <div className="bg-milky py-24">
            <div className="container ">
                <div className="overflow-x-auto">
                    <table className="w-full ">
                        <thead >
                            <tr className="border-y-4 border-black h-[80px]">
                                <th className="max-w-[100px]">
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        خودرو
                                    </p>
                                </th>
                                <th>
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12  whitespace-nowrap">
                                        تاریخ عرضه
                                    </p>
                                </th>
                                <th>
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12  whitespace-nowrap">
                                        تاریخ تحویل
                                    </p>
                                </th>
                                <th>
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        قیمت تمام شده
                                    </p>
                                </th>
                                <th>
                                    <p className="md:text-[18px] !text-[13px] font-bold w-fit px-12 whitespace-nowrap">
                                        قیمت پایه
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

                <Button className={'mt-5 w-full md:w-fit justify-center'}>
                    درخواست اطلاع از زمان عرضه خودرو
                    <ChevronLeftIcon className="h-5 w-5 ml-5" />
                </Button>
            </div>
        </div>
    )
}