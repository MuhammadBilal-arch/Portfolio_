import React from 'react'
import { ASSETS } from '../../assets/path'
import { Heading } from '../../components/heading'

export const Projects = () => {
    return (
        <div
            id="projects"
            className="bg-gradient-to-b from-purple-standard to-gray-lightmedium page-padding text-center space-y-8 py-24 overflow-hidden  text-white min-h-screen z-30">
            <div className="space-y-4">
                <Heading title="Projects" />
                <div className="Poppins-Regular text-xs sm:text-sm md:text-base lg:text-lg">
                    Listed below are some of the most representative projects
                    I've worked on. They range from basic web design for
                    presentation sites to advanced web development for
                    companies.
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-extralight p-4 text-gray-normal group overflow-hidden space-y-2 cursor-pointer">
                    <img
                        src={ASSETS.PROJECTS.LISTENER_1}
                        alt=""
                        className="w-full max-h-48 h-48 object-cover group-hover:scale-105 duration-1000 "
                    />
                    <div className="text-left">
                        <div className="text-base Poppins-Medium text-purple-primary">
                            The Listener
                        </div>
                        <p className="text-xs  Poppins-Regular text-left h-12">
                            TheListener helped numerous people in functioning
                            better and improving their well-being through
                            therapy.
                        </p>
                        <button className="btn-purple-normal-filled text-xs mt-4">
                            <a href="https://thelistener.pk/" target="_blank">
                                Vist TheListener
                            </a>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-extralight p-4 text-gray-normal group overflow-hidden space-y-2 cursor-pointer">
                    <img
                        src={ASSETS.PROJECTS.QCAST_2}
                        alt=""
                        className="w-full max-h-48 h-48 bg-red-error object-cover group-hover:scale-105 duration-1000"
                    />
                    <div className="text-left">
                        <div className="text-base Poppins-Medium text-purple-primary">
                            Qcast
                        </div>
                        <p className="text-xs  Poppins-Regular text-left h-12">
                            Qcast is a new social network built on visual
                            questions and answers.
                        </p>
                        <button className="btn-purple-normal-filled text-xs mt-4">
                            <a href="https://qcast.io/" target="_blank">
                                Vist Qcast
                            </a>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-extralight p-4 text-gray-normal group overflow-hidden space-y-2 cursor-pointer">
                    <img
                        src={ASSETS.PROJECTS.TAGTEKA}
                        alt=""
                        className="w-full max-h-48 h-48 object-contain group-hover:scale-105 duration-1000 "
                    />
                    <div className="text-left ">
                        <div className="text-base Poppins-Medium text-purple-primary">
                            Tag Teka
                        </div>
                        <p className="text-xs  Poppins-Regular text-left h-12">
                            The best RFID asset tracking software to reduce lost
                            equipment, increase productivity, and eliminate
                            unnecessary asset costs. 
                        </p>
                        <button className="btn-purple-normal-filled text-xs mt-4">
                            <a
                                href="https://rfid-two.vercel.app/"
                                target="_blank">
                                Vist TagTeka
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
