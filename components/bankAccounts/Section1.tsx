import AccordionComponent from "./AccordionComponent"

export default function Section1() {

    const accounts = [
        {
            bank: 'بانک شهر',
            icon: 'bank_shahr.svg',
            branch: 'بورس',
            branchCode: ' 234',
            accountNumber: '100843153874',
            shebaNumber: 'IR 020610000000100843153874'
        },
        {
            bank: 'بانک آینده ',
            icon: 'logo-ayandeh.png',
            branch: 'وصال شیرازی',
            branchCode: '272',
            accountNumber: '100566867003',
            shebaNumber: 'IR 240620000000100566867003'
        },
        {
            bank: 'بانک دی',
            icon: 'logo-dey.png',
            branch: 'وزراء',
            branchCode: '150',
            accountNumber: '105026699006',
            shebaNumber: 'IR 390660000000105026699006'
        },
        {
            bank: 'بانک کارآفرین',
            icon: 'bank_karafarin.png',
            branch: 'مرکزی',
            branchCode: '0028',
            accountNumber: '101109758605',
            shebaNumber: 'IR 560530000000101109758605'
        },
        {
            bank: 'بانک ملی',
            icon: 'bank_melli.svg',
            branch: 'بورس',
            branchCode: '695',
            accountNumber: '101083001002',
            shebaNumber: 'IR 500170000000101083001002'
        },
        {
            bank: 'بانک سامان',
            icon: 'bank_saman.svg',
            branch: 'سی تیر',
            branchCode: '849',
            accountNumber: '849-40-106472-1',
            shebaNumber: 'IR 530560084904000106472001'
        },
        {
            bank: 'بانک اقتصادنوین',
            icon: 'logo-eghtesade-novin.png',
            branch: 'مطهری',
            branchCode: '162',
            accountNumber: '162-2-3263874-1',
            shebaNumber: 'IR 930550016200203263874001'
        },
        {
            bank: 'بانک ملت',
            icon: 'bank_mellat.png',
            branch: 'بورس',
            branchCode: '6205',
            accountNumber: '9663101128',
            shebaNumber: 'IR 740120000000009663101128'
        },
        {
            bank: 'بانک تجارت',
            icon: 'bank_tejarat.png',
            branch: 'تخصصی بورس',
            branchCode: '1043',
            accountNumber: '104323391',
            shebaNumber: 'IR 650180000000000104323391'
        },

        {
            bank: 'بانک پارسیان',
            icon: 'logo-parsian.png',
            branch: 'شیخ بهائی',
            branchCode: '1097',
            accountNumber: '201579276/609',
            shebaNumber: 'IR 920540109720100579276609'
        },
        {
            bank: 'بانک پاسارگاد',
            icon: 'bank_pasargad.svg',
            branch: ' بورس',
            branchCode: '415',
            accountNumber: '415-110-14430936-1',
            shebaNumber: 'IR 840570041511014430936001'
        },
    ]
    const energyAccounts = [
        {
            bank: 'بانک ملت',
            icon: 'bank_mellat.png',
            branch: 'بورس کالا',
            branchCode: '6211',
            accountNumber: '1541814649',
            shebaNumber: 'IR 410120000000001541814649'
        },
        {
            bank: 'بانک ملت',
            icon: 'bank_mellat.png',
            branch: 'بورس کالا',
            branchCode: '6211',
            accountNumber: '1229797.86',
            shebaNumber: 'IR 870120000000000122979786'
        },
        {
            bank: 'بانک سامان',
            icon: 'bank_saman.svg',
            branch: 'سی تیر',
            branchCode: '849',
            accountNumber: '849-40-106472-1',
            shebaNumber: 'IR 260560084904000106472002'
        },
        {
            bank: 'بانک صادرات',
            icon: 'bank_saderat.png',
            branch: 'بورس کالا',
            branchCode: ' 383',
            accountNumber: '112459074009',
            shebaNumber: 'IR 580190000000112459074009'
        },
        {
            bank: 'بانک توسعه تعاون',
            icon: 'logo-tosee.png',
            branch: 'فاطمی',
            branchCode: ' 1700',
            accountNumber: '170031644917351',
            shebaNumber: 'IR 180220170003164491735001'
        },
        {
            bank: 'بانک کشاورزی',
            icon: 'logo-keshavarzi.png',
            branch: 'بورس کالا',
            branchCode: ' 4819',
            accountNumber: '4819',
            shebaNumber: 'IR 910160000000000541342392'
        },
        {
            bank: 'بانک تجارت',
            icon: 'bank_tejarat.png',
            branch: 'تخصصی بورس',
            branchCode: '1043',
            accountNumber: '104323375',
            shebaNumber: 'IR 120180000000000104323375'
        }
    ]

    const goodsAccounts = [
        {
            bank: 'بانک ملت',
            icon: 'bank_mellat.png',
            branch: 'بورس کالا',
            branchCode: '6205',
            accountNumber: '93737305.74',
            shebaNumber: 'IR 610120000000009373730574'
        },
        {
            bank: 'بانک کارآفرین',
            icon: 'bank_karafarin.png',
            branch: 'مرکزی',
            branchCode: '28',
            accountNumber: '101417661603',
            shebaNumber: 'IR 360530000000101417661603'
        },
        {
            bank: 'بانک تجارت',
            icon: 'bank_tejarat.png',
            branch: 'تخصصی بورس کالا',
            branchCode: '1043',
            accountNumber: '104351638',
            shebaNumber: 'IR 100180000000000104351638'
        },
        {
            bank: 'بانک ملی',
            icon: 'bank_melli.svg',
            branch: 'بورس',
            branchCode: '695',
            accountNumber: '105610785004',
            shebaNumber: 'IR 630170000000105610785004'
        },
        {
            bank: 'بانک سامان',
            icon: 'bank_saman.svg',
            branch: 'شعبه سی تیر',
            branchCode: ' 849',
            accountNumber: '849401064723',
            shebaNumber: 'IR 960560084904000106472003'
        }
    ]

    return (
        <div className="relative flex flex-col mt-[118px]">
            <div className="pt-24 pb-20 bg-black flex flex-col justify-end text-white">
                <div className="container sm:py-24 ">
                    <div className="text-right m-0 max-w-[820px]">
                        <h1 className="text-[62px]">حساب‌های بانکی توانا</h1>
                        <p className="sm:mt-16 mt-7">
                            مشتری گرامی به‌منظور واریز روزانه مبالغ کم‌تر از ۱۰۰ میلیون تومان به حساب معاملاتی  اوراق بهادار، بهتر است از واریز آنی در سامانه آنلاین پلاس استفاده کنید.(سقف واریز برای  هر‌کارت بانکی ۵۰ میلیون تومان در روز است.)
                        </p>
                    </div>

                </div>
            </div>
            <div className="bg-[#D9D9D9] flex flex-col py-16">
                <div className="container">

                    <AccordionComponent title="معاملات اوراق بهادار" items={accounts} />
                    <AccordionComponent title="بورس انرژی" items={energyAccounts} />
                    <AccordionComponent title="بورس کالا" items={goodsAccounts} />

                </div>
            </div>
        </div>

    )
}
