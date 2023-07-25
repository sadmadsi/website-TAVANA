import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '../button'

export default function Section6() {
    const router = useRouter()
    return (
        <section className="linear">
            <div className='container sm:pb-0 py-[5vw] flex sm:flex-row flex-col h-full'>
                <div className='grow flex flex-col basis-1/2'>
                    <h2>پیشتاز در<br />
                        معاملات بورس انرژی</h2>
                    <p className='mt-24'>رشد سریع و همه آنچه نیاز دارید؛ پیش روی شماست</p>
                    <Link href={'/energy'} className={'w-fit'}>
                        <Button className="mt-12" onClick={() => router.push('/energyBrokerage')}>
                            خدمات بورس انرژی
                            <span className='mr-2'>
                                <ChevronLeftIcon className='h-5 w-5' />
                            </span>
                        </Button>
                    </Link>
                </div>
                <div className="grow h-full relative basis-1/2 bg-center" >
                    <img src={'/photos/ship.jpg'} height={'864px'} width={'864px'} alt={'ship'} style={{ objectFit: 'cover' }} />
                </div>
            </div>
        </section>
    )
}