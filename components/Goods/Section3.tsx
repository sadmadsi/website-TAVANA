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
                <h1 className='sm:text-right text-center'>مهم‌ترین موارد قابل معامله<br className='sm:block hidden' />
                    در بورس کالای ایران</h1>
                <div className="relative mt-10">
                    <div className="sm:grid xl:grid-cols-3 sm:grid-cols-2 gap-8">
                        {cards.map((item: any) => {
                            return (
                                <div key={item.title} className="border-4 shadow-[7px_7px_0_0_black] border-black p-3 text-black flex sm:mb-0 mb-4">
                                    <div>{item.title}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}