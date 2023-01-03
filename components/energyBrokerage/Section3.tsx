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
                                    LPG
                                </td>
                                <td className="py-4 px-6">
                                    Kerosene
                                </td>
                                <td className="py-4 px-6">
                                    Fuel oil
                                </td>
                                <td className="py-4 px-6">
                                    Gas-oil
                                </td>
                                <td className="py-4 px-6">
                                    Gasoline
                                </td>
                            </tr>
                            <tr className="bg-black border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                <td className="py-4 px-6">
                                    Hydrocarbon
                                </td>
                                <td className="py-4 px-6">
                                    Reformate
                                </td>
                                <td className="py-4 px-6">
                                    Raffinate
                                </td>
                                <td className="py-4 px-6">
                                    Solvent
                                </td>
                                <td className="py-4 px-6">
                                    Naphtha
                                </td>
                            </tr>
                            <tr className="bg-[#292929] border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                <td className="py-4 px-6">
                                    Methanol
                                </td>
                                <td className="py-4 px-6">
                                    Hexane
                                </td>
                                <td className="py-4 px-6">
                                    Pentane
                                </td>
                                <td className="py-4 px-6">
                                    ATK
                                </td>
                                <td className="py-4 px-6">
                                    CSO
                                </td>
                            </tr>
                            <tr className="bg-black border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                <td className="py-4 px-6">
                                    Co
                                </td>
                                <td className="py-4 px-6">
                                    Extract
                                </td>
                                <td className="py-4 px-6">
                                    LCO
                                </td>
                                <td className="py-4 px-6">
                                    Iso Feed
                                </td>
                                <td className="py-4 px-6">
                                    Isore Cycle
                                </td>
                            </tr>
                            <tr className="bg-[#292929] border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                <td className="py-4 px-6">

                                </td>
                                <td className="py-4 px-6">

                                </td>
                                <td className="py-4 px-6">

                                </td>
                                <td className="py-4 px-6">
                                    Atmospheric
                                    Residue
                                </td>
                                <td className="py-4 px-6">
                                    Natural Gas
                                    Condensate
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}