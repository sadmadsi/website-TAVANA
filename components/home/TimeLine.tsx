import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../common/button";

export default function TimeLine() {
  return (
    <div className="flex flex-col sm:bg-[url('/photos/hero-fall.jpg')] bg-[url('/photos/hero-fall.jpg')] bg-no-repeat bg-right bg-cover sm:bg-center h-[794px] sm:mt-[118px] pt-[120px] relative">
      {/* <Image src={'/photos/banner.jpg'} fill alt={'trade'} style={{ objectFit: 'cover' }} /> */}
      <div className="container flex z-[5]">
        <div className="w-full text-white text-right mr-auto ">
          <h1>
            سرمایه‌گذاری مؤثر <br /> در بورس
          </h1>
          <p className="py-10 ">
            زندگی دکمه بازگشت ندارد. سرمایه‌گذاری را اثربخش و ساده کرده‌ایم تا
            بهتر زندگی کنید.
          </p>
          <Link href={"/vest-one"} className={"!w-fit"}>
            <Button theme={"primary"} className={"!inline-flex"}>
              آشنایی با وست‌وان
              <span>
                <ChevronLeftIcon className="h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
