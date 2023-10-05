import { useMemo, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { TypicalComponent } from '../typical'
import { Link as ScrollLink } from 'react-scroll'
import { MenuList } from './constant'
import { useScroll } from '../../utils/hooks/useScroll'

export const Nav = () => {
    const [loop_no] = useState(Infinity)
    const [menu, setmenu] = useState(false)
    const { status } = useScroll(80)

    const latestNews = useMemo(() => {
        return <TypicalComponent loop_no={loop_no} />
    }, [loop_no])

    return (
        <div className="relative">
            <div
                className={`page-padding py-5  flex items-center justify-between fixed w-full z-50 duration-1000 ${
                    status
                        ? 'bg-purple-primary text-white'
                        : 'bg-transparent text-white'
                } `}>
                <div
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                    className="flex items-center space-x-2">
                    <div className="cursor-pointer Poppins-Bold w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-orange-primary bg-white text-base sm:text-xl md:text-2xl lg:text-3xl">
                        Hi
                    </div>

                    <div className="text-white text-xs sm:text-sm lg:text-base xl:text-base Poppins-Regular">
                        {latestNews}
                    </div>
                </div>
                <FaBars
                    className="text-white cursor-pointer block md:hidden"
                    onClick={() => setmenu(!menu)}
                />
                <div className="hidden md:flex items-center space-x-3 lg:space-x-6 text-xs lg:text-sm xl:text-base">
                    <div className="space-x-3 lg:space-x-6  flex items-center Poppins-Regular">
                        {MenuList.map(({ path, label }, i) => (
                            <ScrollLink
                                activeClass="active text-orange-primary"
                                className="cursor-pointer "
                                to={path}
                                spy={true}
                                smooth={true}
                                // offset={-70}
                                duration={1000}
                                key={i}>
                                {label}
                            </ScrollLink>
                        ))}
                    </div>
                    <div className="space-x-3 lg:space-x-6 flex">
                        <a
                            className="btn-orange-filled"
                            // href="https://www.upwork.com/freelancers/~012804554cc1a6a603"
                            href="https://www.linkedin.com/in/muhammadbilalr/"
                            target="_blank"
                            >
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
                        <div className="flex flex-col items-center text-xl  space-y-8">
                            <div className="space-y-8 text-xl  flex flex-col items-center Poppins-Regular">
                                {MenuList.map(({ path, label }, i) => (
                                    <ScrollLink
                                        activeClass="active text-orange-primary"
                                        className="cursor-pointer "
                                        to={path}
                                        spy={true}
                                        smooth={false}
                                        // offset={-70}
                                        duration={500}
                                        key={i}>
                                        {label}
                                    </ScrollLink>
                                ))}
                            </div>
                            <div className="">
                                <a
                                    className="btn-orange-filled"
                                    // href="https://www.upwork.com/freelancers/~012804554cc1a6a603"
                                    href="https://www.linkedin.com/in/muhammadbilalr/"
                                    target="_blank">
                                    Get Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
