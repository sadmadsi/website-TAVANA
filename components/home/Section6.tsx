import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Section6() {
    return (
        <section className="linear">
            <div className='container sm:pb-0 pb-16 pt-16 flex sm:flex-row flex-col h-full'>
                <div className='grow flex flex-col basis-1/2'>
                    <h1>پیشتاز در<br />
                        معاملات بورس انرژی</h1>
                    <h2 className='mt-24'>رشد سریع و همه آنچه نیاز دارید؛ پیش روی شماست</h2>
                    <Link href={'energyBrokerage'}>
                        <button className="bg-black border border-black px-2 py-3 text-white flex w-fit transition-all mt-12 hover:bg-black/80">
                            خدمات بورس انرژی
                            <span>
                                <ChevronLeftIcon className='h-5 w-5' />
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="grow h-full relative basis-1/2 bg-center" >
                    <Image src={'/photos/ship.jpg'} fill alt={'ship'} style={{ objectFit: 'cover' }} />
                </div>
            </div>
        </section>
    )
}