export default function Section4() {
  const employee = [
    {
      name: "حمیدرضا طریقی",
      photo: "tarighi.jpg",
      position: "مدیرعامل کارگزاری",
    },
    {
      name: "علی آئین حسینی",
      photo: "ayin.jpg",
      position: "مدیرعامل سبدگردان",
    },
    {
      name: "بهروز عباس زاده",
      photo: "azade.jpg",
      position: "مدیر سرمایه‌گذاری",
    },
    {
      name: "سعید اسماعیلی",
      photo: "esmaili.jpg",
      position: "عضو هیأت مدیره",
    },
    {
      name: "علی یزدانی",
      photo: "yazdani.jpg",
      position: "معاون مالی",
    },
    {
      name: "علیرضا نوبخت",
      photo: "nobakht.jpg",
      position: "مدیر بورس انرژی",
    },
    {
      name: "محدثه محمدی",
      photo: "mohammadi.jpg",
      position: "مدیر بورس کالا",
    },
    {
      name: "منصور عظیمی",
      photo: "azimi.jpg",
      position: "مدیر معاملات",
    },

    {
      name: "حمید خواجه سروی",
      photo: "ksarvi.jpg",
      position: "مدیر امور شعب",
    },
    {
      name: "امین طاهری",
      photo: "taheri.jpg",
      position: "مدیر امور مشتریان",
    },
    {
      name: "غزاله دیان",
      photo: "dian.jpg",
      position: "مدیر سرمایه انسانی",
    },
    {
      name: "مجتبی کیانی",
      photo: "kiani.jpg",
      position: "مدیر توسعه بازار",
    },
  ];
  return (
    <div className="bg-white ">
      <div className="container sm:pt-[120px] pt-20">
        <h2 className="sm:mb-[75px] !mb-2">مدیران اجرایی توانا</h2>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-5">
          {employee.map((item: any) => {
            return (
              <div
                key={item.name}
                className={`sm:py-[25px] py-[12px] px-[10px]`}
              >
                <img
                  src={`/employee/${item.photo}`}
                  height={"289px"}
                  width={"330px"}
                  alt="manager"
                />
                <div className="manager-name">{item.name}</div>
                <div className="manager-position">{item.position}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
