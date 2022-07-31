import React, { useEffect, useState } from 'react'
import { ASSETS } from '../../assets/path'

export const Home = () => {
    const [toggle, settoggle] = useState(false)
    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 1000) {
                settoggle(true)
            } else {
                settoggle(false)
            }
        }
        window.addEventListener('scroll', changeNavbarColor)
        return () => {
            document.removeEventListener('scroll', changeNavbarColor)
        }
    }, [])
    return (
        <div id="home" className="bg-gray-dashboard flex flex-col">
            <div className="h-screen overflow-hidden">
                <header className="flex items-center justify-center min-h-screen  overflow-hidden">
                    <div className={`${toggle ? 'hidden' : 'fixed'} z-30 px-4 sm:px-8 md:pr-24 text-center md:text-left md:left-28   text-white text-2xl sm:text-3xl md:text-4xl xl:text-6xl Poppins-SemiBold w-full  md:w-1/2 xl:w-7/12 space-y-6`}>
                        <div>
                            I love to create beautiful and efficient websites
                        </div>
                        <div>
                            <div className="space-x-3 lg:space-x-6 flex justify-center md:justify-start text-base lg:text-base xl:text-lg">
                                <a
                                    className="btn-orange-filled"
                                    href="https://www.upwork.com/freelancers/~012804554cc1a6a603"
                                    target="_blank">
                                    Discover
                                </a>
                                <a
                                    className="btn-purple-filled"
                                    href="https://www.upwork.com/freelancers/~012804554cc1a6a603"
                                    target="_blank">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                    <video
                        autoPlay
                        loop
                        muted
                        className="fixed z-10 w-auto min-w-full min-h-full max-w-none">
                        <source src={ASSETS.HEADER_VIDEO} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </header>
            </div>
        </div>
    )
}
