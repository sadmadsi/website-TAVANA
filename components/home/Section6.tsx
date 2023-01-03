import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section6() {
    return (
        <section className="bg-[#F37021] ">
            <div className='container p-10 flex h-full'>
                <div className='grow flex flex-col justify-between  basis-1/2'>
                    <h1>پیشتاز در<br />
                        معاملات بورس انرژی</h1>
                    <h2>رشد سریع و همه آنچه نیاز دارید؛ پیش روی شماست</h2>
                    <button className="bg-black border border-black px-2 py-3 text-white flex w-fit transition-all hover:bg-black/80">
                        خدمات بورس انرژی
                        <span>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </button>
                </div>
                <div className="grow h-full bg-[url('/photos/ship.svg')] bg-no-repeat bg-contain  basis-1/2 bg-center" />
            </div>

        </section>
    )
}