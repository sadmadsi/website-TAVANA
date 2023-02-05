import AccordionComponent from "./AccordionComponent"

export default function Section1() {

    const accounts = [
        {
            bank: 'بانک شهر',
            icon: 'bank_shahr.svg',
            branch: 'بورس',
            branchCode: ' 234',
            accountNumber: '100843153874',
            shebaNumber: 'IR IR020610000000100843153874'
        },
        {
            bank: 'بانک آینده ',
            icon: 'logo-ayandeh.png',
            branch: 'وصال شیرازی',
            branchCode: '272',
            accountNumber: '100566867003',
            shebaNumber: 'IR IR240620000000100566867003'
        },
        {
            bank: 'بانک ایران زمین ',
            icon: 'logo-iranzamin.png',
            branch: 'وزراء',
            branchCode: '106',
            accountNumber: '106-13-1365385-1',
            shebaNumber: 'IR IR290690010601301365385001'
        },
        {
            bank: 'بانک دی',
            icon: 'logo-dey.png',
            branch: 'وزراء',
            branchCode: '150',
            accountNumber: '105026699006',
            shebaNumber: 'IR IR390660000000105026699006'
        },
        {
            bank: 'بانک کارآفرین',
            icon: 'bank_karafarin.png',
            branch: 'مرکزی',
            branchCode: '0028',
            accountNumber: '101109758605',
            shebaNumber: 'IR IR560530000000101109758605'
        },
        {
            bank: 'بانک ملی',
            icon: 'bank_melli.svg',
            branch: 'بورس',
            branchCode: '695',
            accountNumber: '101083001002',
            shebaNumber: 'IR IR500170000000101083001002'
        },
        {
            bank: 'بانک سامان',
            icon: 'bank_saman.svg',
            branch: 'سی تیر',
            branchCode: '849',
            accountNumber: '849-40-106472-1',
            shebaNumber: 'IR IR530560084904000106472001'
        },
        {
            bank: 'بانک اقتصادنوین',
            icon: 'logo-eghtesade-novin.png',
            branch: 'مطهری',
            branchCode: '162',
            accountNumber: '-',
            shebaNumber: 'IR IR930550016200203263874001'
        },
        {
            bank: 'بانک ملت',
            icon: 'bank_mellat.png',
            branch: 'بورس',
            branchCode: '6205',
            accountNumber: '33950207.62',
            shebaNumber: 'IR IR590120000000003395020762'
        },
        {
            bank: 'بانک تجارت',
            icon: 'bank_tejarat.png',
            branch: 'تخصصی بورس',
            branchCode: '1043',
            accountNumber: '104323383',
            shebaNumber: 'IR IR650180000000000104323391'
        },
        {
            bank: 'بانک تجارت',
            icon: 'bank_tejarat.png',
            branch: 'تخصصی بورس',
            branchCode: '1043',
            accountNumber: '104323391',
            shebaNumber: 'IR IR650180000000000104323391'
        },
        {
            bank: 'بانک پارسیان',
            icon: 'logo-parsian.png',
            branch: 'شیخ بهائی',
            branchCode: '1097',
            accountNumber: '20100579276609',
            shebaNumber: 'IR IR920540109720100579276609'
        },
        {
            bank: 'بانک پارسیان',
            icon: 'logo-parsian.png',
            branch: 'کیش',
            branchCode: '2008',
            accountNumber: '30100940155604',
            shebaNumber: 'IR IR870540200830100940155604'
        },
        {
            bank: 'بانک پاسارگاد',
            icon: 'bank_pasargad.svg',
            branch: ' بورس',
            branchCode: '415',
            accountNumber: '415-110-14430936-1',
            shebaNumber: 'IR IR840570041511014430936001'
        }
    ]
    const energyAccounts = [
        {
            bank: 'بانک ملت',
            icon: 'bank_mellat.png',
            branch: 'بورس کالا',
            branchCode: '6211',
            accountNumber: '1541814649',
            shebaNumber: 'IR IR410120000000001541814649'
        },
        {
            bank: 'بانک ملت',
            icon: 'bank_mellat.png',
            branch: 'بورس کالا',
            branchCode: '6211',
            accountNumber: '1229797.86',
            shebaNumber: 'IR IR870120000000000122979786'
        },
        {
            bank: 'بانک سامان',
            icon: 'bank_saman.svg',
            branch: 'سی تیر',
            branchCode: '849',
            accountNumber: '849-40-106472-1',
            shebaNumber: 'IR IR260560084904000106472002'
        },
        {
            bank: 'بانک صادرات',
            icon: 'bank_saderat.png',
            branch: 'بورس کالا',
            branchCode: ' 383',
            accountNumber: '112459074009',
            shebaNumber: 'IR IR580190000000112459074009'
        },
        {
            bank: 'بانک توسعه تعاون',
            icon: 'logo-tosee.png',
            branch: 'فاطمی',
            branchCode: ' 1700',
            accountNumber: '170031644917351',
            shebaNumber: 'IR IR180220170003164491735001'
        },
        {
            bank: 'بانک کشاورزی',
            icon: 'logo-keshavarzi.png',
            branch: 'بورس کالا',
            branchCode: ' 4819',
            accountNumber: '4819',
            shebaNumber: 'IR IR910160000000000541342392'
        },
        {
            bank: 'بانک تجارت',
            icon: 'bank_tejarat.png',
            branch: 'تخصصی بورس',
            branchCode: '1043',
            accountNumber: '104323375',
            shebaNumber: 'IR IR120180000000000104323375'
        }
    ]

    const goodsAccounts = [
        {
            bank: 'بانک ملت',
            icon: 'bank_mellat.png',
            branch: 'بورس کالا',
            branchCode: '6205',
            accountNumber: '93737305.74',
            shebaNumber: 'IR IR610120000000009373730574'
        },
        {
            bank: 'بانک کارآفرین',
            icon: 'bank_karafarin.png',
            branch: '-',
            branchCode: '-',
            accountNumber: '101417661603',
            shebaNumber: 'IR IR360530000000101417661603'
        },
        {
            bank: 'بانک تجارت',
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
            branchCode: ' -',
            accountNumber: '849401064723',
            shebaNumber: 'IR IR960560084904000106472003'
        }
    ]

    return (
        <div className="relative flex flex-col sm:mt-48 mt-24">
            <div className="h-[50vh] pb-20 bg-black flex flex-col justify-end text-white">
                <div className="container sm:py-10">
                    <h1 className="text-[62px]">حساب‌های بانکی توانا</h1>
                    <h2 className="sm:mt-16 mt-7 text-justify sm:leading-10 tracking-wide">
                        مشتری گرامی به‌منظور واریز روزانه مبالغ کم‌تر از ۱۰۰ میلیون تومان به حساب معاملاتی<br className="sm:block hidden" />  اوراق بهادار، بهتر است از واریز آنی در سامانه آنلاین پلاس استفاده کنید.(سقف واریز برای <br className="sm:block hidden" /> هر‌کارت بانکی ۵۰ میلیون تومان در روز است.)
                    </h2>
                </div>
            </div>
            <div className="bg-[#D9D9D9] flex flex-col py-10">
                <div className="container">

                    <AccordionComponent title="معاملات اوراق بهادار" items={accounts} />
                    <AccordionComponent title="بورس انرژی" items={energyAccounts} />
                    <AccordionComponent title="بورس کالا" items={goodsAccounts} />

                </div>
            </div>
        </div>

    )
}
