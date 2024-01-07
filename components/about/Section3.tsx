export default function Section3() {
  return (
    <section className="flex xl:flex-row flex-col bg-black pt-12 pb-0 md:py-0 ">
      <div className="basis-1/2 grow text-white container xl:p-[80px] pt-10 sm:pb-0 ">
        <h2>
          بهترین‌ها را <br />
          انتخاب می‌کنیم تا <br />
          به تعهدمان عمل کنیم <br />
        </h2>
        <p className="sm:mt-24 mt-12 mb-12 xl:mb-0">
          اعتقاد داریم باید نوآور و متخصص باشیم. باید سرمایه‌گذاری را اثربخش و
          ساده کنیم تا بتوانیم به تعهدمان عمل کنیم. برای موفقیت در این مسیر
          ضروری است متفاوت فکر کنیم و به کمک دانش متخصصان نخبه و استفاده از
          فناوری‌های روز از سختی‌ها عبور کنیم.{" "}
        </p>
      </div>
      <div className="photos basis-1/2 w-full">
        <img
          src="/photos/choose-best.jpg"
          height={"800px"}
          width={"1300px"}
          alt={"mountain"}
        />
      </div>
    </section>
  );
}
