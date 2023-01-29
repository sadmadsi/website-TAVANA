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
        <section className="bg-[#AC8EE8]">
            <div className="container p-10">
                <h1>مهم‌ترین موارد قابل معامله<br />
                    در بورس کالای ایران</h1>
                <div className="relative mt-10">
                    <div className="grid grid-cols-3 gap-8">
                        {cards.map((item: any) => {
                            return (
                                <div key={item.title} className="border-4 shadow-[7px_7px_0_0_black] border-black p-3 text-black flex">
                                    <div>{item.title}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}