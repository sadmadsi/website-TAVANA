import AccordionComponent from "./AccordionComponent"

export default function Section1() {

    const accounts = [
        {
            bank: 'بانک ملت ',
            icon: 'bank_mellat.png',
            branch: 'بورس',
            branchCode: ' 6205',
            accountNumber: ' 93737305.74',
            shebaNumber: 'IR IR610120000000009373730574'
        },
        {
            bank: 'بانک کارآفرین ',
            icon: 'bank_karafarin.png',
            branch: '-',
            branchCode: '-',
            accountNumber: '101417661603',
            shebaNumber: 'IR IR360530000000101417661603'
        },
        {
            bank: 'بانک تجارت ',
            icon: 'bank_tejarat.png',
            branch: '-',
            branchCode: '-',
            accountNumber: '104351638',
            shebaNumber: 'IR IR100180000000000104351638'
        },
        {
            bank: 'بانک ملی',
            icon: 'bank_melli.svg',
            branch: '-',
            branchCode: '-',
            accountNumber: '105610785004',
            shebaNumber: 'IR IR630170000000105610785004'
        },
        {
            bank: 'بانک صادرات',
            icon: 'bank_saderat.png',
            branch: '-',
            branchCode: '-',
            accountNumber: '112459074009',
            shebaNumber: 'IR IR580190000000112459074009'
        },
        {
            bank: 'بانک سامان',
            icon: 'bank_saman.svg',
            branch: '-',
            branchCode: '-',
            accountNumber: '849401064723',
            shebaNumber: 'IR IR960560084904000106472003'
        }
    ]
    return (
        <div className="relative mt-11 flex flex-col">
            <div className="h-[50vh] bg-black flex flex-col justify-end text-white">
                <div className="container py-10">
                    <h1>حساب‌های بانکی توانا</h1>
                    <h2 className="mt-10 text-justify">
                        مشتری گرامی به‌منظور واریز روزانه مبالغ کم‌تر از ۱۰۰ میلیون تومان به حساب <br className="sm:block hidden" /> معاملاتی اوراق بهادار، بهتر است از واریز آنی در سامانه آنلاین پلاس استفاده کنید. <br className="sm:block hidden" />(سقف واریز برای هر‌کارت بانکی ۵۰ میلیون تومان در روز است.)
                    </h2>
                </div>
            </div>
            <div className="bg-[#D9D9D9] flex flex-col py-10">
                <div className="container">

                    <AccordionComponent title="معاملات اوراق بهادار" items={accounts} />
                    <AccordionComponent title="بورس کالا" items={accounts} />
                    <AccordionComponent title="بورس انرژی" items={accounts} />

                </div>
            </div>
        </div>

    )
}
