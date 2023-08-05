import { useState } from 'react'
import { toast } from 'react-toastify';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { Select } from '../common/select';

export default function Section4() {
    const [selected, setSelected] = useState('')
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [mobile, setMobile] = useState('')
    const [explanation, setExplanation] = useState('')

    const Msg = () => (
        <div className='sm:w-[500px] w-full'>
            درخواست مشاوره شما با موفقیت ثبت شد<br />
            <span className='text-sm'>
                کارشناسان ما بزودی با شما تماس می‌گیرند.
            </span>
        </div>
    )
    const requests = [
        'مشاوره تخصصی و پذیرش انواع کالا و اوراق بهادار قابل معامله در بورس انرژی',
        'دریافت کد معاملاتی شرکت‌های ایرانی و خارجی',
        'مشاوره تخصصی در خصوص ماهیت و قیمت انواع فرآورده نفتی',
        'مشاوره تخصصی در خصوص سازوکار بورس انرژی و فرآیند‌های معاملاتی',
        'انجام معاملات تمامی موارد قابل معامله در بورس انرژی'
    ]


    return (
        <div className="bg-[#D9D9D9] text-black py-20" id='section-4'>
            <div className="container py-10 flex flex-col h-full">
                <h2>
                    کارشناسان توانا پاسخ‌‌گوی شما هستند
                </h2>
                <p className="mt-16">به‌منظور دریافت مشاوره و بهره‌مندی از خدمات توانا در بورس انرژی فرم ذیل را تکمیل کنید                </p>
                <div className="grid sm:grid-cols-3 gap-16 mt-32 mb-20">
                    <Input label='نام و نام خانوادگی*' onChange={setName} value={name} />
                    <Input label='نام شرکت' onChange={setCompany} value={company} />
                    <Input label='شماره تماس*' onChange={setMobile} value={mobile} />
                    <Select label='درخواست' onChange={setSelected} options={requests} selected={selected} />
                    <Input label='توضیحات' onChange={setExplanation} value={explanation} />
                </div >
                <Button isDisabled={true} className="mt-5" isSecondary onClick={() => toast.success(<Msg />, { delay: 2000 })}>
                    درخواست مشاوره
                </Button>
            </div >
        </div >
    )
}