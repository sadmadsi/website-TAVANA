/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Modal({ open, setOpen, title, children, ModalWidth }: { open: boolean, setOpen: any, title: string, children: any, ModalWidth: string }) {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#00000073] transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="-translate-y-full sm:scale-0"
                            enterTo="translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="translate-y-0 sm:scale-100"
                            leaveTo="-translate-y-[1000px] sm:scale-0"
                        >
                            <Dialog.Panel
                                className={`relative transform rounded-lg shadow-xl transition-all sm:my-8 max-w-xl sm:w-full bg-white`}>
                                <div
                                    className="mx-auto flex h-5 w-5 flex-shrink-0 absolute left-3 top-2 items-center justify-center rounded-full bg-grey-100 sm:mx-0 cursor-pointer" onClick={() => setOpen(false)}>
                                    <XMarkIcon className="h-6 w-6"
                                        aria-hidden="true" />
                                </div>
                                {title ? <div className="px-4 py-2">
                                    <div className="text-center">
                                        <Dialog.Title className="text-md font-medium">
                                            {title}
                                        </Dialog.Title>
                                    </div>
                                </div> : null}
                                <div >
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

Modal.defaultProps = {
    ModalWidth: 'max-w-lg',
};