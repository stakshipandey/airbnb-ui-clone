import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShareImage from './ShareImage';

const slideData = [
    { id: 0, imageUrl: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ad.' },
    { id: 1, videoUrl: 'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Vv03xyNwg/videoblocks-holographic-projection-business-infographic-from-the-phone_sbraecgf___76412e2923fc6e4e4d6f8dd4e37b9f1e__P360.mp4', caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ad.' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', caption: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80', caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat fugit fuga repellendus, ullam asperiores eligendi.' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', caption: 'Lorem, ipsum dolor.' },
    { id: 5, imageUrl: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80', caption: 'Lorem, ipsum dolor sit amet consectetur adipisicing.' },
    { id: 6, imageUrl: 'https://images.unsplash.com/photo-1563605990484-8d4c1fa9c3d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80', caption: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur maiores quaerat culpa cum quis aperiam sint illo et quam quo?' },
    { id: 7, imageUrl: 'https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80', caption: 'Lorem ipsum dolor sit amet.' },
    { id: 8, videoUrl: 'https://ak.picdn.net/shutterstock/videos/1023330157/preview/stock-footage-big-data-earth-the-blue-marble-teamwork-digital-clouds-earth-rotating-animation-social-future.webm', caption: 'Lorem, ipsum dolor sit amet consectetur adipisicing.' },
]

export default function Gallery(props) {
    let [isOpen, setIsOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(1)
    const [caption, setCaption] = useState(slideData[0].caption)
    const [isActive, setIsActive] = useState(false)
    const [like, setLike] = useState(false)

    const settings = {
        infinite: false,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (slideCount) => {
            setCurrentSlide(slideCount + 1)
            setCaption(slideData[slideCount].caption)
        },
        arrows: true,
        prevArrow: <div className={props.className}><button className="relative prevBtn" onClick={props.onClick}><ChevronLeftIcon className="h-5 w-5 text-white" /></button></div>,
        nextArrow: <div className={props.className}><button className="relative nextBtn" onClick={props.onClick}><ChevronRightIcon className="h-5 w-5 text-white" /></button></div>
    }

    function closeModal() {
        document.getElementById('closeGalleryButton').classList.add('buttonClick')
        setTimeout(() => {
            document.getElementById('closeGalleryButton').classList.remove('buttonClick')
            document.querySelector('body').classList.remove('overflow-hidden')
            setIsOpen(false)
        }, 100);
    }

    function openModal() {
        document.querySelector('body').classList.add('overflow-hidden')
        setIsOpen(true)
    }

    function handleShareModal() {
        setIsActive(!isActive)
    }

    return (
        <>
            <div className="w-[fit-content] flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="px-4 py-3 text-sm font-medium text-white bg-black rounded-md bg-opacity-30 hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open Gallery
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="none" />
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
                            <div className="relative inline-block w-full h-screen overflow-hidden text-left align-middle transition-all transform bg-black">
                                <div className="mt-10 mx-10 mb-5">
                                    <div className="flex justify-between w-full relative">
                                        <div className="z-10">
                                            <button
                                                id="closeGalleryButton"
                                                type="button"
                                                className="w-[fit-content] inline-flex items-center px-4 py-2 cursor-pointer text-sm leading-[18px] bg-transparent text-white rounded-lg font-medium hover:bg-[rgb(74,74,74)] focus:outline-none"
                                                onClick={closeModal}
                                            >
                                                <span className="h-3 w-3 mr-2">
                                                    <svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false" style={{ height: '12px', width: '12px', display: 'block', fill: 'currentcolor' }}><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg></span>Close
                                            </button>
                                        </div>
                                        <div className="mt-[-2px] z-10">
                                            <button className="bg-transparent rounded-full p-[9px] hover:bg-[rgb(74,74,74)] mr-0.5" onClick={() => setIsActive(true)}>
                                                <span className="h-4 w-4">
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'white', strokeWidth: '2', overflow: 'visible' }}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
                                                </span>
                                            </button>
                                            <button className="bg-transparent rounded-full p-[9px] hover:bg-[rgb(74,74,74)] md:-mr-2" onClick={() => setLike(!like)}>
                                                <span className="h-4 w-4">
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: `${like ? 'rgb(239, 68, 68)' : 'none'}`, height: '16px', width: '16px', stroke: 'white', strokeWidth: '2', overflow: 'visible' }}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="absolute inset-0 flex justify-center items-center leading-5 text-white">
                                            <span>{currentSlide}</span>&nbsp;<span>/&nbsp;{slideData.length}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center h-[calc(100%-224px)] w-[calc(100%-212px)] top-[112px] mx-auto z-10">
                                    <Slider {...settings} >
                                        {
                                            slideData.map(slides => (
                                                <div key={slides.id} className="h-full">
                                                    <div className="h-full w-[60%] flex items-center justify-center mx-auto">
                                                        {slides.imageUrl !== undefined ? <img src={slides.imageUrl} alt="" /> : null}
                                                        {slides.videoUrl !== undefined ? <video src={slides.videoUrl} className="cursor-pointer" autoPlay loop controls></video> : null}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                                <div className={`text-white sticky top-[calc(100%-112px)] mx-auto p-6 leading-6 text-center w-[60%] h-[auto]`}>{caption}</div>
                                <ShareImage active={handleShareModal} state={isActive} imageUrl={slideData[currentSlide - 1].imageUrl} videoUrl={slideData[currentSlide - 1].videoUrl} caption={slideData[currentSlide - 1].caption} />
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
