import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '../common/button';

export default function TimeLine() {
    return (
        <div className="flex flex-col sm:bg-[url('/photos/banner.jpg')] bg-[url('/photos/banner.jpg')] bg-no-repeat bg-right bg-cover sm:bg-center sm:justify-center justify-center h-[794px] sm:mt-[118px] pt-[120px] relative">
            {/* <Image src={'/photos/banner.jpg'} fill alt={'trade'} style={{ objectFit: 'cover' }} /> */}
            <div className='container flex z-[5]'>
                <div className='w-full text-right mr-auto sm:w-full lg:w-1/2'>
                    <h1 >
                        سرمایه‌گذاری مؤثر <br />  در بورس
                    </h1>
                    <p className='py-10 text-2xl'>
                        زندگی دکمه بازگشت ندارد. سرمایه‌گذاری را اثربخش  و ساده کرده‌ایم تا بهتر زندگی کنید.
                    </p>
                    <Link href={'/vestOne'} className={'!w-fit'}>
                        <Button className={'!inline-flex'}>
                            آشنایی با وست‌وان
                            <span>
                                <ChevronLeftIcon className='h-5 w-5' />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}