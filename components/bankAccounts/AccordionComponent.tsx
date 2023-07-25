import { ChevronLeftIcon, ChevronDownIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import Image from "next/image";

export default function AccordionComponent({ items, title }: { items: any, title: string }) {
    return (
        <div className="collapse border-b-2 first:border-t-2 border-black font-[Farhang]">
            <input type="checkbox" className="peer w-full" />
            <div className="collapse-title bg-transparent flex px-2 py-7 peer-checked:hidden">
                <ChevronLeftIcon className={'h-7 w-7 '} />
                <h4 className="font-[800] text-[23px] mr-5">{title}</h4>
            </div>
            <div className="collapse-title bg-transparent hidden px-2 py-7 peer-checked:flex transition-all ">
                <ChevronDownIcon className={'h-7 w-7 '} />
                <h4 className="font-[800] text-[23px] mr-5">{title}</h4>
            </div>
            <div className="collapse-content bg-transparent ">
                <div className="space-y-3 relative">
                    <div className="sm:flex hidden border-2 border-black bg-black text-white sm:text-[18px] text-sm font-[600]  py-5 px-2 items-center">
                        <div className="flex items-center w-1/5 ">
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
                                <div key={account.bank + account.accountNumber} className="border border-black bg-white text-black sm:text-[18px] text-sm font-[600] flex sm:flex-row flex-col sm:py-5 sm:px-2 items-center">
                                    <div className="flex text-right items-center sm:w-1/5 w-full border-b border-b-black sm:border-b-0 py-3 sm:px-0 px-5">
                                        <Image src={`/icons/${account.icon}`} alt={'melli'} height={48} width={48} />
                                        <span className="mr-2">{account.bank}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row grow w-full sm:px-0 px-5  space-y-3 sm:space-y-0 sm:py-0 py-2">
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
                                            <div className="flex items-center">
                                                <span>
                                                    {account.accountNumber}
                                                </span>
                                                <span className="h-4 mr-2 cursor-pointer" onClick={() => { navigator.clipboard.writeText(account.accountNumber), toast.success('با موفقیت در کلیپبورد ذخیره شد', { position: 'top-center' }) }}>
                                                    <DocumentDuplicateIcon className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex sm:block text-center sm:w-1/4 w-full justify-between overflow-hidden">
                                            <div className="sm:hidden">شماره شبه:</div>
                                            <div className="flex items-center">
                                                {account.shebaNumber}
                                                <span className="h-4 mr-2 cursor-pointer" onClick={() => { navigator.clipboard.writeText(account.shebaNumber), toast.success('با موفقیت در کلیپبورد ذخیره شد', { position: 'top-center' }) }}>
                                                    <DocumentDuplicateIcon className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}