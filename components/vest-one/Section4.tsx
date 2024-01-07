import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Section4() {
  const cards = [
    {
      title:
        "سبد شما به‌نام خودتان به‌صورت اختصاصی و مستقل از دیگر سبدها مدیریت می‌شود",
    },
    {
      title:
        "ترکیب سبد شما متناسب با ریسک‌پذیری و اهدافتان از سرمایه‌گذاری انتخاب و بهینه می‌شود",
    },
    {
      title: "یک کد بورسی مجزا از طرف سازمان بورس برای وست وان شما صادر می‌شود",
    },
    {
      title:
        "شما می‌توانید سهامتان را از هر کدام از کارگزاری‌ها به سبد وست‌وان منتقل کنید",
    },
    {
      title:
        "به‌صورت روزانه از خرید و فروش‌ها و وضعیت سبدتان گزارش دریافت می‌کنید",
    },
    {
      title: "کارمزد و شرایط مشارکت توانا در سود کسب‌شده، توافقی تعیین می‌شود",
    },
  ];

  return (
    <div className="bg-black text-white py-32">
      <div className="container">
        <h2>سرمایه‌گذاری تخصصی و البته اختصاصی را انتخاب کنید</h2>
        <p className="text-justify mt-24">
          وست وان ابزار سرمایه‌گذاری با استفاده از توان و دانش متخصصان است اما
          می‌تواند متناسب با انتظارات و شرایط شما اختصاصی شود. ویژگی‌های
          سرمایه‌گذاری از طریق وست وان به شرح ذیل است:{" "}
        </p>
        <div className="sm:grid lg:grid-cols-3 grid-cols-1 gap-5 mt-24">
          {cards.map((item: any) => {
            return (
              <div
                key={item.title}
                className="border-4 border-white pt-12 pb-20 px-10 flex sm:mb-0 mb-4 "
              >
                <span className="w-5 ml-5">
                  <ChevronLeftIcon className="h-5 w-5 text-xl" />
                </span>
                <p className="font-semibold">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
