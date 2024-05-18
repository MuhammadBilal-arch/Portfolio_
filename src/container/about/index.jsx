import React from 'react'
import { ASSETS } from '../../assets/path'

import { Heading } from '../../components/heading'

export const About = () => {

    return (
        <div
            id="about"
            className="bg-gray-extralight page-padding space-y-4 py-24 overflow-hidden  text-purple-primary min-h-screen z-30">
            <Heading title="About" />
            <div className="flex">
                <div className="space-y-2 Poppins-Regular text-xs text-left sm:text-sm xl:text-base">
                    <img
                        data-aos="fade-down"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        className="float-right sm:mb-2 pl-2 md:pl-4 pb-4 w-32 h-32 sm:w-24 sm:h-24 md:w-80 md:h-full lg:w-1/2 
                        duration-1000 object-cover"
                        src={ASSETS.PROFILE_IMG}
                        alt=""
                    />
                    I’m a Professional ReactJs ReactJS Developer having 3 years
                    of experience. I worked on JSX, react-hooks, node.js,
                    MongoDB, Firebase Redux, redux-thunk, API integrations,
                    formik, Typescript, ResetAPI, TailwindCss.
                    <br />
                    <br />I build High-End Lucrative, Professional, Responsive,
                    and Eye-Catching websites from scratch Revamp any current
                    website AND can fix bugs in any website. I aim to give my
                    clients exactly what they need and guide them all through
                    the procedure. My client's Success is my Success. Let's
                    connect and begin taking a shot at your fantasy site!
                    <div className="space-y-4">
                        <div className="text-xl Poppins-SemiBold">
                            Expeirence
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="">
                                <div className="text-sm md:text-base Poppins-SemiBold">
                                    Fiction Developers
                                </div>
                                <div className="text-xs sm:text-sm">
                                    Nov 2023 - Present
                                </div>
                            </div>
                            <div className="">
                                <div className="text-sm md:text-base Poppins-SemiBold">
                                    The First Sol
                                </div>
                                <div className="text-xs sm:text-sm">
                                    March 2021 - August 2023
                                </div>
                            </div>
                            <div className="">
                                <div className="text-xs  md:text-base Poppins-SemiBold">
                                    Manasoft
                                </div>
                                <div className="text-xs sm:text-sm">
                                    Feb 2021 - March
                                </div>
                            </div>
                            <div className="">
                                <div className="text-xs  md:text-base Poppins-SemiBold">
                                    HashCraft
                                </div>
                                <div className="text-xs sm:text-sm">
                                    Oct 2020 - Dec 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
