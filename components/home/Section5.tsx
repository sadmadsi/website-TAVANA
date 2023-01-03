import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section5() {
    return (
        <section className="bg-[url('/photos/structure.png')] bg-cover bg-no-repeat">
            <div className='container p-10 flex h-full'>
                <div className="h-full bg-black text-white flex flex-col justify-between mr-auto w-1/3 p-10  basis-1/2" >
                    <h1>مؤسس<br />
                        بورس فلزات ایران</h1>
                    <h2>از مشاوره تا معامله،<br />
                        همه آنچه از بورس کالا نیاز دارید</h2>
                    <button className="bg-black px-2 py-3 border border-white text-white flex w-fit transition-all hover:bg-black/50">
                        خدمات بورس کالا
                        <span>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}