import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '../common/button'

export default function Section5() {
    const router = useRouter()
    return (
        <div className="relative bg-[url('/photos/structure.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='container py-[5vw] flex sm:flex-row flex-col h-full'>
                <div className="h-full mb-[300px] sm:mb-0 bg-black text-center sm:text-right text-white flex flex-col lg:mr-auto w-full p-16 lg:basis-1/2 z-[9]" >
                    <h2 className='mb-[100px]'>مؤسس<br />
                        بورس فلزات ایران</h2>
                    <p className='mt-auto'>از مشاوره تا معامله،<br />
                        همه آنچه از بورس کالا نیاز دارید</p>
                    <Link href={'/kala'} className={'w-fit mx-auto sm:m-0'}>
                        <Button className="mt-9 border-2 border-white text-white hover:bg-white hover:text-black hover:border-black" onClick={() => router.push('/goodsBrokerage')}>
                            خدمات بورس کالا
                            <span className='mr-2'>
                                <ChevronLeftIcon className='h-5 w-5' />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}