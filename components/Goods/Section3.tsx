import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section3() {

    const cards = [
        {
            title: 'مشاوره و انجام تمامی امور اجرایی برای پذیرش شرکت‌ها در بورس کالا'
        },
        {
            title: 'مشاوره و انجام تمامی امور اجرایی برای پذیرش کالاهای منقول و غیرمنقول'
        },
        {
            title: 'عرضه کالاهای منقول و غیرمنقول پذیرش شده در بورس کالا'
        },
        {
            title: 'ارائه گزارش از محصولات عرضه شده در بورس کالا به مشتریان'
        },
        {
            title: 'ارائه گزارش از معاملات بورس کالا و اخبار بازار سرمایه به مشتریان'
        },
        {
            title: 'انجام معاملات تمامی کالاهای قابل معامله در بورس کالای ایران (داخلی و صادراتی)'
        },
    ]
    return (
        <div className="bg-black text-white">
            <div className="container p-10">
                <h1>مهم‌ترین موارد قابل معامله<br />
                    در بورس کالای ایران</h1>
                <div className="overflow-x-auto relative mt-10">
                    <table className="w-full text-sm">
                        <tbody>
                            <tr className="bg-[#292929] border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                <td className="py-4 px-6">
                                    Bitumen(pure, emulsion and...)
                                </td>
                                <td className="py-4 px-6">
                                    Aluminium
                                </td>
                                <td className="py-4 px-6">
                                    Steel
                                </td>
                            </tr>
                            <tr className="bg-black border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                <td className="py-4 px-6">
                                    Zinc
                                </td>
                                <td className="py-4 px-6">
                                    Polymer products
                                </td>
                                <td className="py-4 px-6">
                                    Oil
                                </td>
                            </tr>
                            <tr className="bg-[#292929] border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                <td className="py-4 px-6">
                                    Chemical products
                                </td>
                                <td className="py-4 px-6">
                                    Gold
                                </td>
                                <td className="py-4 px-6">
                                    Vaccum Bottom
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}