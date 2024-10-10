'use client'
import { useScroll } from '@/app/utils/hooks/useScroll'
import { ASSETS } from '@/public/assets/path'
import React from 'react' 
export const Home = () => {
    const { status } = useScroll(1000)

    return (
        <div id="home" className="bg-gray-dashboard flex flex-col">
            <div className="h-screen overflow-hidden">
                <header className="flex items-center justify-center md:justify-start min-h-screen  overflow-hidden">
                    <div
                        className={`${
                            status ? 'hidden' : 'fixed'
                        } max-w-[1440px] mx-auto  page-padding z-30 mt-20  text-center md:text-left  text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl Poppins-SemiBold sm:w-full md:w-7/12 xl:w-7/12 space-y-6`}>
                        <div>
                            I love to create beautiful and efficient websites
                        </div>
                        <div>
                            <div className="space-x-3 lg:space-x-6 flex justify-center md:justify-start text-base lg:text-base xl:text-lg">
                                <a
                                    className="btn-orange-filled"
                                    href="https://www.upwork.com/freelancers/muhammadbilalchughtai"
                                    target="_blank">
                                    Discover
                                </a>
                                <a
                                    className="btn-purple-filled"
                                    href="https://www.upwork.com/freelancers/muhammadbilalchughtai"
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
