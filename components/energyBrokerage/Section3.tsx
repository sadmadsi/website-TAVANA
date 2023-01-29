import {
    ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

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
        <section className="bg-jolbaki ">
            <div className="container flex flex-col h-full p-10">
                <h1>مهم‌ترین موارد قابل معامله<br />
                    در بورس انرژی ایران</h1>
                <div className="relative grow mt-16 text-center">
                    <span className="sm:hidden block bg-[url(/photos/energy-table-mob.png)] bg-center bg-no-repeat bg-contain h-full w-full">
                        {/* <Image src={'/photos/energy-table-mob.png'} fill alt={'table'} /> */}
                    </span>
                    <span className='hidden sm:block bg-[url(/photos/energy-table.png)] bg-center bg-no-repeat bg-contain h-full'>
                        {/* <Image src={'/photos/energy-table.png'} fill alt={'table'} /> */}
                    </span>
                </div>

            </div>
        </section>
    )
}