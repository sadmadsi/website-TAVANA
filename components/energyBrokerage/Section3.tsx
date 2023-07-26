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
        <section className="bg-secondaryTavana py-24">
            <div className="container flex flex-col h-full p-10">
                <h1>مهم‌ترین موارد قابل معامله<br />
                    در بورس انرژی ایران</h1>
                <div className="relative grow mt-16 ">
                    <img src="/photos/energy-table-mob.png" className="sm:hidden block" />
                    {/* <Image src={'/photos/energy-table-mob.png'} fill alt={'table'} /> */}
                    <img src="/photos/energy-table.png" className="hidden sm:block w-3/4 mx-auto" />
                    {/* <Image src={'/photos/energy-table.png'} fill alt={'table'} /> */}
                </div>

            </div>
        </section>
    )
}