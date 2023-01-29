import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'

export default function Section3() {

    const cards = [
        {
            title: 'LPG'
        },
        {
            title: 'Kerosene'
        },
        {
            title: 'Fuel oil'
        },
        {
            title: 'Gas-oil'
        },
        {
            title: 'Gasoline'
        },
        {
            title: 'Hydrocarbon'
        },
        {
            title: 'Reformate'
        },
        {
            title: 'Raffinate'
        },
        {
            title: 'Solvent'
        },
        {
            title: 'Naphtha'
        },
        {
            title: 'Methanol'
        },
        {
            title: 'Hexane'
        },
        {
            title: 'Pentane'
        },
        {
            title: 'ATK'
        },
        {
            title: 'CSO'
        },
        {
            title: 'Pentane'
        },
        {
            title: 'Co'
        },
        {
            title: 'Extract'
        },
        {
            title: 'LCO'
        },
        {
            title: 'Iso Feed'
        },

        {
            title: 'Isore Cycle'
        },
        {
            title: 'Atmospheric Residue'
        },
        {
            title: 'Natural Gas Condensate'
        },

    ]
    return (
        <div className="bg-black text-white">
            <div className="container p-10">
                <h1>مهم‌ترین موارد قابل معامله<br />
                    در بورس کالای ایران</h1>
                <div className="relative mt-16">
                    <div className="grid grid-cols-3 gap-8">
                        {cards.map((item: any) => {
                            return (
                                <div key={item.title} className="border-4 shadow-[7px_7px_0_0_white] border-white p-3 flex">
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