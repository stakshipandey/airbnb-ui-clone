import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const tabData = {
    languages: [
        { id: 1, lang: "English", country: "United States" },
        { id: 2, lang: "English", country: "United States" },
        { id: 3, lang: "English", country: "United States" },
        { id: 4, lang: "English", country: "United States" },
        { id: 5, lang: "English", country: "United States" },
        { id: 6, lang: "English", country: "United States" },
        { id: 7, lang: "English", country: "United States" },
        { id: 8, lang: "English", country: "United States" },
        { id: 9, lang: "English", country: "United States" },
        { id: 10, lang: "English", country: "United States" },
        { id: 11, lang: "English", country: "United States" },
        { id: 12, lang: "English", country: "United States" },
        { id: 13, lang: "English", country: "United States" },
        { id: 14, lang: "English", country: "United States" },
        { id: 15, lang: "English", country: "United States" },
        { id: 16, lang: "English", country: "United States" },
        { id: 17, lang: "English", country: "United States" },
        { id: 18, lang: "English", country: "United States" },
        { id: 19, lang: "English", country: "United States" },
        { id: 20, lang: "English", country: "United States" },
        { id: 21, lang: "English", country: "United States" },
        { id: 22, lang: "English", country: "United States" },
        { id: 23, lang: "English", country: "United States" },
        { id: 24, lang: "English", country: "United States" },
    ],
    currency: [
        { id: 1, currency: "Indian rupee", name: "INR - ₹" },
        { id: 2, currency: "Indian rupee", name: "INR - ₹" },
        { id: 3, currency: "Indian rupee", name: "INR - ₹" },
        { id: 4, currency: "Indian rupee", name: "INR - ₹" },
        { id: 5, currency: "Indian rupee", name: "INR - ₹" },
        { id: 6, currency: "Indian rupee", name: "INR - ₹" },
        { id: 7, currency: "Indian rupee", name: "INR - ₹" },
        { id: 8, currency: "Indian rupee", name: "INR - ₹" },
        { id: 9, currency: "Indian rupee", name: "INR - ₹" },
        { id: 10, currency: "Indian rupee", name: "INR - ₹" },
        { id: 11, currency: "Indian rupee", name: "INR - ₹" },
        { id: 12, currency: "Indian rupee", name: "INR - ₹" },
        { id: 13, currency: "Indian rupee", name: "INR - ₹" },
        { id: 14, currency: "Indian rupee", name: "INR - ₹" },
        { id: 15, currency: "Indian rupee", name: "INR - ₹" },
        { id: 16, currency: "Indian rupee", name: "INR - ₹" },
        { id: 17, currency: "Indian rupee", name: "INR - ₹" },
        { id: 18, currency: "Indian rupee", name: "INR - ₹" },
        { id: 19, currency: "Indian rupee", name: "INR - ₹" },
        { id: 20, currency: "Indian rupee", name: "INR - ₹" },
        { id: 21, currency: "Indian rupee", name: "INR - ₹" },
        { id: 22, currency: "Indian rupee", name: "INR - ₹" },
        { id: 23, currency: "Indian rupee", name: "INR - ₹" },
        { id: 24, currency: "Indian rupee", name: "INR - ₹" },
    ]
}

export default function Modal() {
    const [selected, setSelected] = useState(0)
    const [selectedCurrency, setSelectedCurrency] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [tab, setTab] = useState('languages')

    function closeModal() {
        setIsOpen(false)
        document.querySelector('body').classList.remove('overflow-hidden')
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleSelectedLang = (id) => e => {
        e.preventDefault();
        setSelected(id)
    }
    const handleSelectedCurrency = (id) => e => {
        e.preventDefault();
        setSelectedCurrency(id)
    }

    return (
        <>
            <div className="w-[fit-content] flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => {
                        openModal()
                        document.querySelector('body').classList.add("overflow-hidden")
                    }}
                    className="px-4 py-3 text-sm font-medium text-white bg-black rounded-md bg-opacity-30 hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open Modal
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="relative inline-flex flex-col w-full max-w-5xl max-h-[calc(100vh-30vh)] md:max-h-[calc(100vh-15vh)] p-6 my-8 pb-8 text-left align-middle overflow-hidden transition-all transform bg-white shadow-xl rounded-lg">
                                <div className="absolute top-0 left-0 right-0 py-3 px-3 bg-white z-40">
                                    <button
                                        type="button"
                                        className="bg-transparent relative ml-2 mt-2 rounded-full hover:bg-gray-100 focus:outline-none p-1.5"
                                        onClick={closeModal}
                                    >
                                        <XIcon className="h-4 w-4" />
                                    </button>
                                </div>
                                <div id="modal_content" className="px-2 mt-9 overflow-y-scroll flex-grow sm:px-5">
                                    <div className="pt-2 pb-1 border-b-2 border-gray-200">
                                        <ul className="flex h-full">
                                            <div className="relative mr-4">
                                                <li id="languageBtn" className={`group ml-[-10px] text-sm hover:bg-gray-100 p-2.5 align-middle rounded-md relative h-full font-semibold ${tab === "languages" ? 'text-[rgb(34,34,34)]' : 'text-[rgb(113,113,113)] hover:text-text-[rgb(34,34,34)]'} cursor-pointer`} onClick={() => {
                                                    document.getElementById('languageBtn').classList.add('buttonClick')
                                                    setTimeout(() => {
                                                        document.getElementById('languageBtn').classList.remove('buttonClick')
                                                        setTab("languages")
                                                    }, 100);
                                                }}>Language and region
                                                </li>
                                                <span className={`absolute transition duration-300 right-2.5 ${tab === "currency" ? 'left-[100%]' : 'left-0'} bottom-[-6px] ${tab === 'languages' ? 'border-b-2 border-text-[rgb(34,34,34)]' : ''}`}></span>
                                            </div>
                                            <div className="relative">
                                                <li id="currencyBtn" className={`group text-sm hover:bg-gray-100 p-2.5 align-middle rounded-md relative h-full font-semibold ${tab === "currency" ? 'text-[rgb(34,34,34)]' : 'text-[rgb(113,113,113)] hover:text-text-[rgb(34,34,34)]'} cursor-pointer`} onClick={() => {
                                                    document.getElementById('currencyBtn').classList.add('buttonClick')
                                                    setTimeout(() => {
                                                        document.getElementById('currencyBtn').classList.remove('buttonClick')
                                                        setTab("currency")
                                                    }, 100);
                                                }}>Currency
                                                </li>
                                                <span className={`absolute transition duration-300 left-2.5 ${tab === "languages" ? 'right-[100%]' : 'right-2.5'}  bottom-[-6px] ${tab === 'currency' ? 'border-b-2 border-text-[rgb(34,34,34)]' : ''}`}></span>
                                            </div>
                                        </ul>
                                    </div>
                                    {tab === 'languages' && <div className={`pt-7 ${tab === 'languages' ? '' : 'hidden'}`}>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-xl font-semibold leading-6 text-gray-900"
                                        >
                                            Choose a language and region
                                        </Dialog.Title>
                                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-2.5">
                                            {
                                                tabData.languages.map(cards => (
                                                    <div key={cards.id} className="min-h-[72px] flex items-center px-[8px]">
                                                        <div className={`rounded-[8px] leading-[18px] shadow-sm px-3 py-[9px] w-full hover:bg-gray-100 cursor-pointer ${selected === cards.id ? 'border-[1.5px] border-[rgb(34,34,34)]' : ''}`} onClick={handleSelectedLang(cards.id)}>
                                                            <h2 className="text-sm font-medium text-[rgb(34,34,34)]">{cards.lang}</h2>
                                                            <p className="text-[rgb(113,113,113)] text-sm">{cards.country}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>}
                                    {tab === 'currency' && <div className={`pt-7 ${tab === 'currency' ? '' : 'hidden'}`}>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-xl font-semibold leading-6 text-gray-900"
                                        >
                                            Choose a Currency
                                        </Dialog.Title>
                                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-2.5">
                                            {
                                                tabData.currency.map(cards => (
                                                    <div key={cards.id} className="min-h-[72px] flex items-center px-[8px]">
                                                        <div className={`rounded-[8px] leading-[18px] shadow-sm px-3 py-[9px] w-full hover:bg-gray-100 cursor-pointer ${selectedCurrency === cards.id ? 'border-[1.5px] border-[rgb(34,34,34)]' : ''}`} onClick={handleSelectedCurrency(cards.id)}>
                                                            <h2 className="text-sm font-medium text-[rgb(34,34,34)]">{cards.currency}</h2>
                                                            <p className="text-[rgb(113,113,113)] text-sm">{cards.name}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
