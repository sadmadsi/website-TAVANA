import { Accordion } from "flowbite-react";
import Image from "next/image";

export default function Section1() {
    return (
        <div className="relative mt-11 flex flex-col">
            <div className="h-[50vh] bg-black flex flex-col justify-end text-white">
                <div className="container py-10">
                    <h1>حساب‌های بانکی توانا</h1>
                    <h2 className="mt-10">
                        مشتری گرامی به‌منظور واریز روزانه مبالغ کم‌تر از ۱۰۰ میلیون تومان به حساب <br /> معاملاتی اوراق بهادار، بهتر است از واریز آنی در سامانه آنلاین پلاس استفاده کنید. <br />(سقف واریز برای هر‌کارت بانکی ۵۰ میلیون تومان در روز است.)
                    </h2>
                </div>
            </div>
            <div className="bg-white flex flex-col py-10">
                <div className="container">
                    <Accordion alwaysOpen={true} style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}>
                        <Accordion.Panel>
                            <Accordion.Title style={{ padding: '0.5rem' }}>
                                معاملات اوراق بهادار
                            </Accordion.Title>
                            <Accordion.Content>

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion alwaysOpen={true} style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0, margin: '10px 0' }}>
                        <Accordion.Panel>
                            <Accordion.Title style={{ padding: '0.5rem' }}>
                                بورس کالا
                            </Accordion.Title>
                            <Accordion.Content>
                                <div className="overflow-x-auto relative">
                                    <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-white bg-black text-right">
                                            <tr className="border border-black">
                                                <th scope="col" className="py-3 px-6">
                                                    نام بانک
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    شعبه
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    کدشعبه
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    شماره حساب
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    شماره شبا
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                                <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                    <div>
                                                        <Image src={'/icons/bank_saman.svg'} alt={'saman'} height={24} width={24} />
                                                    </div>
                                                    <span>بانک سامان</span>
                                                </th>
                                                <td className="py-4 px-6">
                                                    بورس
                                                </td>
                                                <td className="py-4 px-6">
                                                    ۲۳۴
                                                </td>
                                                <td className="py-4 px-6">
                                                    ۱۰۰۸۴۳۱۵۳۸۷۴
                                                </td>
                                                <td className="py-4 px-6">
                                                    IR 020610000000۱۰۰۸۴۳۱۵۳۸۷۴
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                                <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                    <div>
                                                        <Image src={'/icons/bank_pasargad.svg'} alt={'pasargad'} height={24} width={24} />
                                                    </div>
                                                    <span>بانک پاسارگاد</span>
                                                </th>
                                                <td className="py-4 px-6">
                                                    بورس
                                                </td>
                                                <td className="py-4 px-6">
                                                    ۲۳۴
                                                </td>
                                                <td className="py-4 px-6">
                                                    ۱۰۰۸۴۳۱۵۳۸۷۴
                                                </td>
                                                <td className="py-4 px-6">
                                                    IR 020610000000۱۰۰۸۴۳۱۵۳۸۷۴
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                                <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                    <div>
                                                        <Image src={'/icons/bank_melli.svg'} alt={'melli'} height={24} width={24} />
                                                    </div>
                                                    <span>بانک ملی</span>
                                                </th>
                                                <td className="py-4 px-6">
                                                    بورس
                                                </td>
                                                <td className="py-4 px-6">
                                                    ۲۳۴
                                                </td>
                                                <td className="py-4 px-6">
                                                    $۱۰۰۸۴۳۱۵۳۸۷۴
                                                </td>
                                                <td className="py-4 px-6">
                                                    IR 020610000000۱۰۰۸۴۳۱۵۳۸۷۴
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border border-black">
                                                <th scope="row" className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                    <div>
                                                        <Image src={'/icons/bank_shahr.svg'} alt={'shahr'} height={24} width={24} />
                                                    </div>
                                                    <span>بانک شهر</span>
                                                </th>
                                                <td className="py-4 px-6">
                                                    بورس
                                                </td>
                                                <td className="py-4 px-6">
                                                    ۲۳۴
                                                </td>
                                                <td className="py-4 px-6">
                                                    $۱۰۰۸۴۳۱۵۳۸۷۴
                                                </td>
                                                <td className="py-4 px-6">
                                                    IR 020610000000۱۰۰۸۴۳۱۵۳۸۷۴
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion alwaysOpen={true} style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}>
                        <Accordion.Panel>
                            <Accordion.Title style={{ padding: '0.5rem' }}>
                                بورس انرژی
                            </Accordion.Title>
                            <Accordion.Content>

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        </div>

    )
}