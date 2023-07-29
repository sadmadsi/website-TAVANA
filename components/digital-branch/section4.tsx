import React, { useState } from 'react'
import { Button } from '../common/button';
import { Input } from '../common/input';

export default function Section4() {
    const [mobile, setMobile] = useState<string>('')

    return (
        <div className="bg-[#D9D9D9] text-black py-[5vw]" id='section-4'>
            <div className="container py-10 flex flex-col h-full">
                <div className='max-w-[500px] '>
                    <p className='mb-16'>
                        برای کسب اطلاعات بیشتر و درخواست شعبه دیجیتال
                        شماره موبایلتان را وارد کنید.
                    </p>
                    <Input label='لطفا شماره موبایل خود را وارد کنید*' onChange={setMobile} value={mobile} />
                    <Button isDisabled={true} className="mt-16" isSecondary onClick={() => null}>
                        درخواست شعبه دیجیتال
                    </Button>
                </div>
            </div >
        </div >
    )
}