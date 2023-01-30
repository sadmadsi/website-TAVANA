export default function Section1() {
    return (
        <div className="container min-h-screen sm:mt-56 mt-24">
            <div className="bg-[url(/photos/map.jpg)] py-24 bg-center bg-no-repeat sm:bg-contain bg-cover flex ">
                <div className="sm:mr-auto sm:basis-1/2 m-5 sm:m-0 bg-white sm:p-20 p-5 py-32">
                    <h1>ارتباط با ما</h1>
                    <div>
                        <div className="space-y-5">
                            <div className="flex sm:flex-row flex-col sm:space-x-4 space-x-reverse">
                                <input className="grow bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="نام و نام خانوادگی" />
                                <input className="grow bg-transparent mt-5 sm:mt-0 border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="شماره تماس" />
                            </div>
                            <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="موضوع" />
                            <input className="bg-transparent border-0 border-b border-black py-5 focus:ring-0 w-full" type="text" placeholder="پیام" />
                        </div>
                        <button className="bg-black text-white p-3 mt-24">
                            درخواست مشاوره
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}