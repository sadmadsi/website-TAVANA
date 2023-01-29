import { Accordion } from "flowbite-react";
import Image from "next/image";

export default function AccordionComponent({ items, title }: { items: any, title: string }) {
    return (
        <Accordion alwaysOpen={true} style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0, margin: '10px 0' }}>
            <Accordion.Panel>
                <Accordion.Title style={{ padding: '0.5rem' }}>
                    {title}
                </Accordion.Title>
                <Accordion.Content>
                    <div className="space-y-3 relative">
                        <div className="sm:flex hidden border-2 border-black bg-black text-white  py-5 px-2 items-center">
                            <div className="flex items-center w-1/5">
                                <span className="mr-2">
                                    نام بانک
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row grow">
                                <div className="w-1/4 text-center">شعبه</div>
                                <div className="w-1/4 text-center">
                                    کدشعبه
                                </div>
                                <div className="w-1/4 text-center">
                                    شماره حساب
                                </div>
                                <div className="w-1/4 text-center">
                                    شماره شبا
                                </div>
                            </div>
                        </div>
                        {
                            items.map((account: any) => {
                                return (
                                    <div key={account.bank + account.accountNumber} className="border-2 border-black bg-white text-black flex sm:flex-row flex-col sm:py-5 sm:px-2 items-center">
                                        <div className="flex text-right items-center sm:w-1/5 w-full border-b-2 border-b-black sm:border-b-0 py-3 sm:px-0 px-5">
                                            <Image src={`/icons/${account.icon}`} alt={'melli'} height={48} width={48} />
                                            <span className="mr-2">{account.bank}</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row grow w-full sm:px-0 px-5 text-xs sm:text-md space-y-3 sm:space-y-0 sm:py-0 py-2">
                                            <div className="flex sm:block text-center sm:w-1/4 w-full justify-between">
                                                <div className="sm:hidden">شعبه:</div>
                                                <div>{account.branch}</div>
                                            </div>
                                            <div className="flex sm:block text-center sm:w-1/4 w-full justify-between">
                                                <div className="sm:hidden">کد شعبه:</div>
                                                <div>{account.branchCode}</div>
                                            </div>
                                            <div className="flex sm:block text-center sm:w-1/4 w-full justify-between">
                                                <div className="sm:hidden">شماره حساب:</div>
                                                <div>{account.accountNumber}</div>
                                            </div>
                                            <div className="flex sm:block text-center sm:w-1/4 w-full justify-between overflow-auto">
                                                <div className="sm:hidden">شماره شبه:</div>
                                                <div>{account.shebaNumber}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>

    )
}