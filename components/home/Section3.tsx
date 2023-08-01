import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from '../common/button'

export default function Section3() {
    return (
        <div className="bg-charcoal">
            <div className="container py-[5vw] bg-[url(/photos/digital.png)] bg-no-repeat bg-left-bottom bg-auto">
                <div className='relative flex flex-col h-full'>
                    <h2 className='z-10'>همگام<br />
                        با روندهای جهانی</h2>
                    <p className='mt-24 z-10'>شعبه دیجیتال توانا راهکاری به‌صرفه‌ و شفاف برای کسانی است که به بازاریابی و اخذ شعبه<br />  کارگزاری بورس علاقه‌مند هستند.</p>
                    <Link href={'/digital-branch'} className={'z-10 w-fit h-fit'}>
                        <Button className="font-bold" isSecondary>
                            دریافت شعبه دیجیتال
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