import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "../common/button";
import React from "react";
import Link from "next/link";
export default function Section2() {
  return (
    <section className="bg-primarytavana">
      <div className="container flex lg:flex-row flex-col justify-between h-full py-[5vw]">
        <div className="grow flex flex-col basis-1/2">
          <h2>
            معامله
            <br />
            با پلتفرم برتر بازار
          </h2>
          <p className="mt-20 mb-10">
            سامانه آنلاین پلاس را بر بستر اپلیکیشن موبایل <br /> و‌ نسخه تحت وب
            به شما ارائه می‌دهیم.
          </p>
          <Link
            href={"https://sejam.tavanaco.ir/send-otp"}
            target={"_blank"}
            className={"w-fit lg:mb-0 mb-8"}
            rel="noreferrer"
          >
            <Button theme={"primary"} className={"border-0"}>
              ثبت‌ نام آنلاین و معامله سهام
              <span className="mr-3">
                <ChevronLeftIcon className="h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
        <div className="relative grow h-full basis-1/2">
          <img
            src={"/photos/online-plus.jpg"}
            height={"856px"}
            width={"856px"}
            alt={"trade"}
          />
        </div>
      </div>
    </section>
  );
}
