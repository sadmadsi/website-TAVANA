import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Section6() {
    return (
        <section className="linear">
            <div className='container pb-0 pt-16 flex h-full'>
                <div className='grow flex flex-col basis-1/2'>
                    <h1>پیشتاز در<br />
                        معاملات بورس انرژی</h1>
                    <h2 className='mt-24'>رشد سریع و همه آنچه نیاز دارید؛ پیش روی شماست</h2>
                    <button className="bg-black border border-black px-2 py-3 text-white flex w-fit transition-all mt-12 hover:bg-black/80">
                        خدمات بورس انرژی
                        <span>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </button>
                </div>
                <div className="grow h-full relative basis-1/2 bg-center" >
                    <Image src={'/photos/ship.svg'} fill alt={'ship'} style={{ objectFit: 'cover' }} />
                </div>
            </div>

        </section>
    )
}