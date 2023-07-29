import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Button } from "../common/button"

export const Detail = (props: any) => {
    const { array } = props
    return (
        <div className="container space-y-5 py-[5vw]">
            {
                array.map((item: any) => {
                    return (
                        <div className="collapse border-b-2 border-white font-[Farhang]">
                            <input type="checkbox" className="peer w-full" />
                            <div className="collapse-title bg-transparent flex px-2 py-7 peer-checked:hidden">
                                <ChevronLeftIcon className={'h-7 w-7 '} />
                                <h4 className="font-[800] text-[23px] mr-5">{item.title}</h4>
                            </div>
                            <div className="collapse-title bg-transparent hidden px-2 py-7 peer-checked:flex transition-all ">
                                <ChevronDownIcon className={'h-7 w-7 '} />
                                <h4 className="font-[800] text-[23px] mr-5">{item.title}</h4>
                            </div>
                            <div className="collapse-content bg-transparent ">
                                <p>
                                    {item.address}
                                </p>
                                <div className="flex sm:flex-row flex-col justify-between mt-5">
                                    <div className="grow space-y-3 ">
                                        {
                                            item?.detail?.map((sub: string) => {
                                                return (
                                                    <div key={sub}>
                                                        {sub}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <Link target={'_blank'} href={item?.location || "https://www.google.com/maps/place/Tavana+Brokerage/@35.7257914,51.4256784,15z/data=!4m5!3m4!1s0x0:0xde5f38aa74658635!8m2!3d35.7257934!4d51.4256783?sa=X&ved=2ahUKEwiA4IGN-9P8AhWt_rsIHW9ICyAQ_BJ6BAhXEAM&coh=164777&entry=tt&shorturl=1"}>
                                        <Button className="border w-fit sm:mt-0 mt-5 p-2 border-white flex items-center px-2" >
                                            مشاهده روی نقشه
                                            <ChevronLeftIcon className='h-5 w-5' />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}