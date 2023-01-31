import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Section5() {
    return (
        <div className="relative h-[65vh] bg-[url('/photos/structure.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='container py-16 flex sm:flex-row flex-col h-full'>
                <div className="h-full bg-black text-center sm:text-right text-white flex flex-col mr-auto sm:w-1/3 w-full p-16 basis-1/2 z-[9]" >
                    <h1>مؤسس<br />
                        بورس فلزات ایران</h1>
                    <h2 className='mt-auto'>از مشاوره تا معامله،<br />
                        همه آنچه از بورس کالا نیاز دارید</h2>
                    <Link href={'/goodsBrokerage'}>
                        <button className="bg-black mx-auto sm:mx-0 px-2 py-3 mt-9 border-2 border-white text-white flex w-fit transition-all hover:bg-black/50">
                            خدمات بورس کالا
                            <span>
                                <ChevronLeftIcon className='h-5 w-5' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}