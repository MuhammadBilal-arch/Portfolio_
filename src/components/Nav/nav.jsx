import { useEffect, useState } from 'react'
// import {ASSETS} from '../../assets/path'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Typical from 'react-typical'

export const Nav = () => {
    const navigate = useNavigate()

    const [colorChange, setColorchange] = useState(false)
    const [str, setstr] = useState()

    const [menu, setmenu] = useState(false)

    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 80) {
                setColorchange(true)
            } else {
                setColorchange(false)
            }
        }
        window.addEventListener('scroll', changeNavbarColor)
        return () => {
            document.removeEventListener('scroll', changeNavbarColor)
        }
    }, [])

    return (
        <div className="relative">
            <div
                className={`page-padding py-5  flex items-center justify-between fixed w-full z-50 duration-1000 ${
                    colorChange
                        ? 'bg-purple-primary text-white'
                        : 'bg-transparent text-white'
                } `}>
                <a href="#home" className="flex jus items-center space-x-2 ">
                    <div className="cursor-pointer Poppins-Bold w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-orange-primary bg-white text-base sm:text-xl md:text-2xl lg:text-3xl">
                        Hi
                    </div>

                    <div className="text-white text-xs sm:text-sm lg:text-base xl:text-base Poppins-Regular">
                        <Typical
                            steps={[
                                "I'm Muhammad Bilal",
                                5000,
                                "I'm Professional React.js Developer",
                                7000,
                            ]}
                            loop={3}
                            wrapper="p"
                        />
                    </div>
                </a>
                <FaBars
                    className="text-white cursor-pointer block md:hidden"
                    onClick={() => setmenu(!menu)}
                />
                <div className="hidden md:flex items-center space-x-3 lg:space-x-6 text-xs lg:text-sm xl:text-base">
                    <div className="space-x-3 lg:space-x-6  flex items-center Poppins-Regular">
                        <a href="#about" className="cursor-pointer">
                            About
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Projects
                        </a>
                        <a href="#services" className="cursor-pointer">
                            Services
                        </a>
                        <a href="#contact" className="cursor-pointer">
                            Contacts
                        </a>
                    </div>
                    <div className="space-x-3 lg:space-x-6 flex">
                        <a
                            className="btn-orange-filled"
                            href="https://www.upwork.com/freelancers/~012804554cc1a6a603"
                            target="_blank">
                            Get Quote
                        </a>
                    </div>
                </div>
            </div>
            {menu && (
                <div className="md:hidden fixed  min-h-screen z-50 text-white flex flex-col items-center w-full bg-purple-standard text-lg">
                    <div className="flex items-start justify-end w-full p-10">
                        <FaTimes
                            className="text-white cursor-pointer"
                            onClick={() => setmenu(!menu)}
                        />
                    </div>
                    <div className="space-y-10 text-center Poppins-Regular">
                        <div
                            onClick={() => navigate('/about-us')}
                            className="cursor-pointer">
                            About Us
                        </div>
                        {/* <div
                            onClick={() => navigate('/pricing')}
                            className="cursor-pointer">
                            Pricing
                        </div> */}
                        <div
                            onClick={() => navigate('/custom-solution')}
                            className="cursor-pointer">
                            Custom Solutions
                        </div>
                        <div>Industries</div>
                        <div>Resources</div>
                        <div className="space-x-6 flex">
                            <button
                                className="btn-orange-outline"
                                onClick={() => navigate('login')}>
                                Login
                            </button>
                            <button className="btn-orange-filled">
                                Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
