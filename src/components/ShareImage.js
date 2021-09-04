import React, { useState } from 'react'

const ShareImage = ({ caption, imageUrl, videoUrl, state, active }) => {

    return (
        <div className={`h-screen w-full flex items-center justify-center px-0 pb-0 pt-20 sm:p-10 z-[99999] bg-[rgb(34,34,34)] absolute inset-0 bg-opacity-40 transition-all duration-300 ${state ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className={`max-w-[568px] w-full rounded-xl flex flex-col max-h-full relative bg-white overflow-hidden transition-all delay-100 duration-300 ${state ? 'translateDown' : 'translateUp'}`}>
                <div className="sticky top-0 right-0 left-0 w-full flex items-center px-6 min-h-[64px] bg-white">
                    <button id="shareCloseBtn" className="focus:outline-none border-0 rounded-full relative" onClick={active}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'black', strokeWidth: '3', overflow: 'visible', }}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-scroll">
                    <div className="mb-8">
                        <div className="-mt-4">
                            <div className="text-[22px] leading-[26px] text-[rgb(34,34,34)]">
                                <div className="mb-4">
                                    <h1 className="text-2xl leading-5 text-[rgb(72,72,72)] font-semibold">
                                        Share this image with friends and family
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">

                            {imageUrl !== undefined ? <img src={imageUrl} alt="" className="!h-[60px] !w-[60px] rounded-[8px] mr-5 overflow-hidden filter blur-sm" /> : null}
                            {videoUrl !== undefined ? <video src={videoUrl} className="!h-[60px] !w-[60px] rounded-[8px] mr-5 overflow-hidden filter blur-sm"></video> : null}
                            <div className="text-lg font-semibold leading-6 text-[rgb(72,72,72)] !w-[calc(100%-100px)]">
                                <div className="truncate">{caption}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pb-[5px]">
                        <section className="text-base font-bold text-[rgb(72,72,72)]">
                            <h2>Social Media</h2>
                            <div className="">
                                <div className="p-1 !w-1/2 !inline-block outline-none cursor-pointer hover:bg-[rgb(239,239,239)] rounded-lg">
                                    <button className="w-full focus:outline-none">
                                        <div className="flex items-center flex-row">
                                            <div className="pr-3">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px' }}><path fill="#1877F2" d="M32 0v32H0V0z"></path><path d="M22.938 16H18.5v-3.001c0-1.266.62-2.499 2.607-2.499h2.018V6.562s-1.831-.312-3.582-.312c-3.654 0-6.043 2.215-6.043 6.225V16H9.436v4.625H13.5V32h5V20.625h3.727l.71-4.625z" fill="#FFF"></path></svg>
                                            </div>
                                            <div className="p-4 font-semibold tracking-wide pr-0 text-[rgb(34,34,34)] truncate">Facebook</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="p-1 !w-1/2 !inline-block outline-none cursor-pointer hover:bg-[rgb(239,239,239)] rounded-lg">
                                    <button className="w-full focus:outline-none">
                                        <div className="flex items-center flex-row">
                                            <div className="pr-3">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px' }}><path fill="#1DA1F2" d="M0 0H32V32H0z"></path><path d="M18.664 7.985a4.5 4.5 0 0 0-2.289 4.89c-3.5-.188-6.875-1.813-9.063-4.625a4.25 4.25 0 0 0 1.375 5.875c-.687 0-1.374-.125-2-.438.063 2.063 1.5 3.876 3.5 4.313-.624.188-1.312.188-2 .063.626 1.812 2.313 3.062 4.188 3.125-1.813 1.5-4.25 2.187-6.563 1.812a12.438 12.438 0 0 0 19.313-11.188c.875-.624 1.625-1.374 2.188-2.312-.75.375-1.625.625-2.5.75.937-.563 1.625-1.438 2-2.5-.875.5-1.813.875-2.813 1.063a4.5 4.5 0 0 0-5.336-.828z" fill="#FFF"></path></svg>
                                            </div>
                                            <div className="p-4 font-semibold tracking-wide pr-0 text-[rgb(34,34,34)] truncate">Twitter</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="w-full pb-[5px]">
                        <section className="text-base font-bold text-[rgb(72,72,72)]">
                            <h2>Messaging and Email</h2>
                            <div className="">
                                <div className="p-1 !w-1/2 !inline-block outline-none cursor-pointer hover:bg-[rgb(239,239,239)] rounded-lg">
                                    <button className="w-full focus:outline-none">
                                        <div className="flex items-center flex-row">
                                            <div className="pr-3">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'rgb(0, 0, 0)', height: '32px', width: '32px', stroke: 'rgb(72, 72, 72)', strokeWidth: '2', overflow: 'visible' }}><g fill="none"><rect height="24" rx="4" width="28" x="2" y="4"></rect><path d="m3 6 10.416231 8.813734c1.4913834 1.2619398 3.6761546 1.2619398 5.167538 0l10.416231-8.813734"></path></g></svg>
                                            </div>
                                            <div className="p-4 font-semibold tracking-wide pr-0 text-[rgb(34,34,34)] truncate">Email</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="p-1 !w-1/2 !inline-block outline-none cursor-pointer hover:bg-[rgb(239,239,239)] rounded-lg">
                                    <button className="w-full focus:outline-none">
                                        <div className="flex items-center flex-row">
                                            <div className="pr-3">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px' }}><path d="m32 0v32h-32v-32z" fill="#25d366"></path><path d="m4 28 1.695-6.163a11.824 11.824 0 0 1 -1.595-5.946c.003-6.556 5.364-11.891 11.95-11.891a11.903 11.903 0 0 1 8.453 3.488 11.794 11.794 0 0 1 3.497 8.414c-.003 6.557-5.363 11.892-11.95 11.892-2 0-3.97-.5-5.715-1.448zm6.628-3.807c1.684.995 3.292 1.591 5.418 1.592 5.474 0 9.933-4.434 9.936-9.885.002-5.462-4.436-9.89-9.928-9.892-5.478 0-9.934 4.434-9.936 9.884 0 2.225.654 3.891 1.754 5.634l-1.002 3.648 3.76-.98h-.002zm11.364-5.518c-.074-.123-.272-.196-.57-.344-.296-.148-1.754-.863-2.027-.96-.271-.1-.469-.149-.667.147-.198.295-.767.96-.94 1.157s-.346.222-.643.074c-.296-.148-1.253-.46-2.386-1.466-.881-.783-1.477-1.75-1.65-2.045s-.018-.455.13-.602c.134-.133.296-.345.445-.518.15-.17.2-.294.3-.492.098-.197.05-.37-.025-.518-.075-.147-.668-1.6-.915-2.19-.241-.577-.486-.499-.668-.508l-.569-.01a1.09 1.09 0 0 0 -.79.37c-.272.296-1.039 1.01-1.039 2.463s1.064 2.857 1.211 3.054c.15.197 2.092 3.18 5.068 4.458.708.304 1.26.486 1.69.622.712.224 1.359.193 1.87.117.57-.084 1.755-.714 2.002-1.404.248-.69.248-1.28.173-1.405z" fill="#FFF"></path></svg>
                                            </div>
                                            <div className="p-4 font-semibold tracking-wide pr-0 text-[rgb(34,34,34)] truncate">WhatsApp</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="p-1 !w-1/2 !inline-block outline-none cursor-pointer hover:bg-[rgb(239,239,239)] rounded-lg">
                                    <button className="w-full focus:outline-none">
                                        <div className="flex items-center flex-row">
                                            <div className="pr-3">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32.5px', width: '32.5px' }}><defs><radialGradient cx="19.25%" cy="99.447%" fx="19.25%" fy="99.447%" r="108.96%" gradientTransform="scale(1 .99991)" id="fbmessengera"><stop stopColor="#09F" offset="0%"></stop><stop stopColor="#A033FF" offset="60.98%"></stop><stop stopColor="#FF5280" offset="93.48%"></stop><stop stopColor="#FF7061" offset="100%"></stop></radialGradient></defs><path fill="#FFF" d="M32 0v32H0V0z"></path><path d="M16 4C9.241 4 4 8.953 4 15.64c0 3.498 1.434 6.522 3.768 8.61.195.174.315.42.321.684l.066 2.136a.96.96 0 0 0 1.347.849l2.382-1.05a.964.964 0 0 1 .642-.048c1.095.3 2.259.462 3.474.462 6.759 0 12-4.953 12-11.64S22.759 4 16 4z" fill="url(#fbmessengera)"></path><path d="M8.794 19.045l3.525-5.592a1.8 1.8 0 0 1 2.604-.48l2.805 2.103a.72.72 0 0 0 .867-.003l3.786-2.874c.504-.384 1.164.222.828.759l-3.528 5.589a1.8 1.8 0 0 1-2.604.48l-2.805-2.103a.72.72 0 0 0-.867.003l-3.786 2.874c-.504.384-1.164-.219-.825-.756z" fill="#FFF"></path></svg>
                                            </div>
                                            <div className="p-4 font-semibold tracking-wide pr-0 text-[rgb(34,34,34)] truncate">Messenger</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="p-1 !w-1/2 !inline-block outline-none cursor-pointer hover:bg-[rgb(239,239,239)] rounded-lg">
                                    <button className="w-full focus:outline-none">
                                        <div className="flex items-center flex-row">
                                            <div className="pr-3">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px' }}><defs><linearGradient x1="50.794%" y1="93.362%" x2="50.794%" y2="12.41%" id="imessagegradient"><stop stopColor="#0CBD2A" offset="0%"></stop><stop stopColor="#5BF675" offset="100%"></stop></linearGradient></defs><g><path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="url(#imessagegradient)"></path><path d="M15.796 5.469c-6.404 0-11.595 4.324-11.595 9.658.005 3.39 2.143 6.528 5.633 8.27-.457 1.023-1.142 1.983-2.028 2.838 1.717-.3 3.329-.934 4.71-1.85 1.064.264 2.17.399 3.28.4 6.404 0 11.596-4.324 11.596-9.658S22.2 5.47 15.796 5.47z" fill="#FFF"></path></g></svg>
                                            </div>
                                            <div className="p-4 font-semibold tracking-wide pr-0 text-[rgb(34,34,34)] truncate">SMS (Text)</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="w-full pb-[5px]">
                        <section className="text-base font-bold text-[rgb(72,72,72)]">
                            <h2>Social Media</h2>
                            <div className="">
                                <div className="p-1 !w-1/2 !inline-block outline-none cursor-pointer hover:bg-[rgb(239,239,239)] rounded-lg">
                                    <button className="w-full focus:outline-none">
                                        <div className="flex items-center flex-row">
                                            <div className="pr-3">
                                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true" focusable="false" style={{ height: '32px', width: '32px', display: 'block', fill: 'rgb(72, 72, 72)' }}><path d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm-4.19 14.05c.52.45.58 1.24.14 1.76-.25.29-.6.44-.95.44-.29 0-.58-.1-.81-.3l-3.5-3c-.28-.24-.44-.58-.44-.95s.16-.71.44-.95l3.5-3c .52-.45 1.31-.39 1.76.14.45.52.39 1.31-.14 1.76l-2.39 2.05zm6.88-6.69-3 10c-.16.54-.66.89-1.2.89-.12 0-.24-.02-.36-.05-.66-.2-1.04-.9-.84-1.56l3-10c .2-.66.9-1.04 1.56-.84s1.04.9.84 1.56zm3.12 8.59c-.52.45-1.31.39-1.76-.14s-.39-1.31.14-1.76l2.39-2.05-2.39-2.05c-.52-.45-.58-1.24-.14-1.76s1.24-.58 1.76-.14l3.5 3c .58.5.58 1.4 0 1.9z"></path></svg>
                                            </div>
                                            <div className="p-4 font-semibold tracking-wide pr-0 text-[rgb(34,34,34)] truncate">Embed</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="w-full pb-[5px]">
                        <section className="text-base font-bold text-[rgb(72,72,72)]">
                            <h2></h2>
                            <div className="">
                                <div className="p-1 w-full !inline-block outline-none cursor-pointer hover:bg-[rgb(239,239,239)] rounded-lg">
                                    <button className="w-full focus:outline-none">
                                        <div className="flex items-center flex-row">
                                            <div className="pr-3">
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'rgb(72, 72, 72)' }}><path d="M6 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10-2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10-2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path></svg>
                                            </div>
                                            <div className="p-4 font-semibold tracking-wide pr-0 text-[rgb(34,34,34)] truncate">More Options</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="w-full pb-[5px]">
                        <section className="text-[rgb(72,72,72)] font-bold text-base">
                            <h2>Copy Link</h2>
                            <div className="">
                                <div className="mt-3 mr-5 border border-[rgb(221,221,221)] rounded-lg overflow-hidden">
                                    <div className="relative cursor-text flex h-14 w-full m-0 text-black bg-white">
                                        <label htmlFor="copy_link" className="flex-1 relative">
                                            <div className="">
                                                <div className="flex">
                                                    <input type="text" value={imageUrl || videoUrl} className="w-full outline-none border-0 p-0 mx-3 mt-5 mb-2.5 min-h-[1px] text-[rgb(34,34,34)] text-[15px] font-semibold leading-[18px] appearance-none" />
                                                </div>
                                            </div>
                                        </label>
                                        <div className="flex justify-center items-center max-w-[50%] min-w-[36px] overflow-hidden whitespace-nowrap pl-0 !pr-3">
                                            <div>
                                                <button className="cursor-pointer inline-block m-0 relative text-center w-auto text-sm leading-[18px] font-semibold rounded-lg outline-none focus:outline-none border border-[rgb(34,34,34)] py-[7px] px-[15px] text-[rgb(34,34,34)]">Copy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ShareImage
