import {
  ChevronLeftIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import Image from "next/image";

export default function AccordionComponent({
  items,
  title,
  isOpen,
  onChange,
  index,
}: {
  items: any;
  title: string;
  isOpen: number;
  onChange: any;
  index: number;
}) {
  return (
    <div className="collapse border-b-2 first:border-t-2 border-black ">
      <input
        type="checkbox"
        checked={isOpen === index + 1}
        className="peer w-full"
        onChange={(e) => {
          console.log(e.target.checked);
          onChange(e.target.checked ? index + 1 : -1);
        }}
      />
      <div className="collapse-title bg-transparent flex px-2 py-7 peer-checked:hidden">
        <ChevronLeftIcon className={"h-7 w-7 "} />
        <h4 className="font-[800] text-[23px] mr-5">{title}</h4>
      </div>
      <div className="collapse-title bg-transparent hidden px-2 py-7 peer-checked:flex transition-all ">
        <ChevronDownIcon className={"h-7 w-7 "} />
        <h4 className="font-[800] text-[23px] mr-5">{title}</h4>
      </div>
      <div className="collapse-content bg-transparent ">
        <div className="space-y-3 relative">
          <div className="sm:flex hidden border-2 border-black bg-black text-white sm:text-[18px] text-sm font-[600]  py-5 px-2 items-center justify-evenly">
            <div className="text-center w-[19%]">نام بانک</div>
            <div className="text-center w-[14%]">شعبه</div>
            <div className="text-center w-[14%]">کدشعبه</div>
            <div className="text-center w-1/5">شماره حساب</div>
            <div className="text-center w-1/3">شماره شبا</div>
            {/* <div className="flex flex-col sm:flex-row ">
                            
                        </div> */}
          </div>
          {items.map((account: any) => {
            return (
              <div
                key={account.bank + account.accountNumber}
                className="border border-black bg-white text-black sm:text-[18px] text-sm  flex sm:flex-row flex-col sm:py-5 sm:px-2 items-center justify-evenly"
              >
                <div className="flex text-right items-center sm:w-[19%] w-full border-b border-b-black sm:border-b-0 py-3 sm:pr-20 px-5">
                  <div className="flex items-center">
                    <Image
                      src={`/icons/${account.icon}`}
                      alt={"melli"}
                      height={30}
                      width={30}
                    />
                    <span className="mr-2">{account.bank}</span>
                  </div>
                </div>
                <div className="flex sm:block text-center sm:w-[14%] w-full justify-between px-5 py-2">
                  <div className="sm:hidden">شعبه:</div>
                  <div>{account.branch}</div>
                </div>
                <div className="flex sm:block text-center sm:w-[14%] w-full justify-between px-5 py-2">
                  <div className="sm:hidden">کد شعبه:</div>
                  <div>{account.branchCode}</div>
                </div>
                <div
                  className="flex sm:block text-center sm:w-1/5 w-full cursor-pointer justify-between px-5 py-2 tooltip"
                  data-tip="کپی در کلیپبورد"
                  onClick={() => {
                    navigator.clipboard.writeText(account.accountNumber),
                      toast.success("با موفقیت در کلیپبورد ذخیره شد", {
                        position: "top-center",
                      });
                  }}
                >
                  <div className="sm:hidden">شماره حساب:</div>
                  <div className="flex w-fit sm:mx-auto items-center ">
                    <span>{account.accountNumber}</span>
                    <span className="h-4 mr-2 ">
                      <DocumentDuplicateIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div
                  className="flex sm:block text-center cursor-pointer sm:w-1/3 w-full justify-between px-5 py-2 tooltip"
                  data-tip="کپی در کلیپبورد"
                  onClick={() => {
                    navigator.clipboard.writeText(account.shebaNumber),
                      toast.success("با موفقیت در کلیپبورد ذخیره شد", {
                        position: "top-center",
                      });
                  }}
                >
                  <div className="sm:hidden">شماره شبه:</div>
                  <div className="flex w-fit items-center sm:mx-auto ">
                    {account.shebaNumber}
                    <span className="h-4 mr-2">
                      <DocumentDuplicateIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
