import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import { Button } from '../button'

export default function Section5() {
    return (
        <section className="linearSky ">
            <div className='container lg:pt-[5vw] lg:pb-0 py-[40px] flex lg:flex-row flex-col'>
                <div className="grow basis-1/2 ">
                    <h2>
                        آینده را پیش‌بینی نکنید! <br />
                        در خلق آن مشارکت کنید
                    </h2>
                    <p className='sm:mt-32 mt-12 mb-10 pl-[40px]'>
                        برای ادامه مسیر روی تخصص شما حساب می‌کنیم. خودتان باشید تا در نوآوری موفق شویم.
                    </p>
                    <Button isSecondary className={'mb-16 !mt-8'}>
                        <span>
                            مشاهده فرصت های همکاری
                        </span>
                        <span className='mr-2'>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </span>
                    </Button>
                </div>
                <div className="grow basis-1/2">
                    <img src='/photos/jobs.jpg' width={'864px'} height={'886px'} />
                </div>
            </div>
        </section>
    )
}