import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section3() {

    const cards = [
        {
            title: 'Bitumen(pure, emulsion and...)'
        },
        {
            title: 'Aluminium'
        },
        {
            title: 'Steel'
        },
        {
            title: 'Zinc'
        },
        {
            title: 'Polymer products'
        },
        {
            title: 'Oil'
        },
        {
            title: 'Chemical products'
        },
        {
            title: 'Gold'
        },
        {
            title: 'Vaccum Bottom'
        },
    ]
    return (
        <div className="bg-[#AC8EE8]">
            <div className="container p-10">
                <h1 className='text-center'>
                    {' مهم‌ترین موارد قابل معامله'}
                    < br className='sm:block hidden' />
                    {" " + 'در بورس کالای ایران'}
                </h1>
                <div className="relative mt-10 sm:w-2/3 w-full text-center mx-auto">
                    <div className="sm:grid xl:grid-cols-3 sm:grid-cols-2 gap-8">
                        {cards.map((item: any) => {
                            return (
                                <div key={item.title} className="border-4 shadow-[7px_7px_0_0_black] border-black p-5 text-black flex sm:mb-0 mb-4">
                                    <h2 className='text-center mx-auto text-black'>{item.title}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}