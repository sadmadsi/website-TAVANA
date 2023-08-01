import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import { twMerge } from "tailwind-merge"

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

interface SelectProps {
    selected: any,
    onChange: any,
    options: any[],
    label: string,
    className?: string
}
export const Select = (props: SelectProps) => {
    const { selected, onChange, options, label, className } = props
    return (
        <Listbox value={selected} onChange={onChange}>
            {({ open, value }: { open: any, value: any }) => (
                <>
                    <div className="relative w-full min-h-[37px]">
                        <div className={`ml-4 text-[#9a9a9a] font-bold absolute text-sm  
                        duration-300 ${open || value ? '-translate-y-6' : 'translate-y-2'}`}>
                            {label}
                        </div>
                        <Listbox.Button className={twMerge(`relative h-full text-[16px] p-0 leading-6 py-2 bg-transparent border-0 border-b ${open || value ? 'border-black border-b-2' : 'border-[#9a9a9a]'} focus:ring-0 w-full`, className)}>
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{selected}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center pr-2">
                                <ChevronDownIcon className="h-5 w-5 " aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {options.map((item: any) => (
                                    <Listbox.Option
                                        key={item}
                                        className={({ active }: { active: any }) =>
                                            classNames(
                                                active ? ' bg-gray-300' : 'text-gray-900',
                                                'relative cursor-pointer select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }: { selected: any, active: any }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                    >
                                                        {item}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>

    )
}