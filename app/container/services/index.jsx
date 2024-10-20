'use client'
import React from 'react' 
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css' 
import { ASSETS } from '@/public/assets/path'
import { Heading } from '@/app/components/heading'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
const Services = () => {
    const data = [
        {
            logo: 'fa fa-code fa-4x',
            heading: 'HTML5 & CSS',
            paragraph:
                "I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability",
        },
        {
            logo: 'fab fa-js fa-4x',
            heading: 'JavaScript',
            paragraph:
                'I can create unique features using JavaScript and implement client demanded logic.',
        },
        {
            logo: 'fab fa-react fa-4x',
            heading: 'React.js',
            paragraph:
                "I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability",
        },
    ]
    const LANGUAGES = [
        {
            IMG: ASSETS.LANGUAGES.REACT,
        },
        {
            IMG: ASSETS.LANGUAGES.REDUX,
        },
        {
            IMG: ASSETS.LANGUAGES.TAILWIND,
        },
        {
            IMG: ASSETS.LANGUAGES.FORMIK,
        },
        {
            IMG: ASSETS.LANGUAGES.FIREBASE,
        },
        {
            IMG: ASSETS.LANGUAGES.NODEJS,
        },
        {
            IMG: ASSETS.LANGUAGES.STRAPI,
        },
        {
            IMG: ASSETS.LANGUAGES.NEXT,
        },
        {
            IMG: ASSETS.LANGUAGES.POSTGRES,
        },
        {
            IMG: ASSETS.LANGUAGES.PRISMA,
        },

    ]

    const responsive = {
        0: {
            items: 3,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
        1300: {
            items: 6,
        },
    }

    return (
        <div
            id="services"
            className="bg-gray-extralight page-padding text-center py-24 overflow-hidden  text-purple-primary z-30">
            <div className="space-y-10 max-w-[1440px] mx-auto">
                <div>
                    <Heading title="Services" />
                    <div className="Poppins-Regular text-xs sm:text-sm md:text-base lg:text-lg">
                        Offered services Web design and development have been my
                        bread and butter for more than 3.5 years. During that time
                        I've discovered that I can help startups and companies
                        with the following services
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-sm py-10 px-4 space-y-2 cursor-pointer group hover:shadow-xl duration-1000">
                            <i className={`${item.logo} group-hover:scale-105 duration-1000`} ></i>
                            <h1 className="Poppins-SemiBold">{item.heading}</h1>
                            <p className="Poppins-Regular text-xs sm:text-sm text-center">
                                {item.paragraph.length > 110 ?item.paragraph.substring(0,90).concat('...') : item.paragraph} 
                            </p>
                        </div>
                    ))}
                    <div  className="bg-white rounded-sm py-10 px-4 space-y-2 flex flex-col items-center  cursor-pointer group hover:shadow-xl duration-1000">
                        <img src={ASSETS.SERVICES.REDUX_.src} alt="" className='w-16 h-16 group-hover:scale-105 duration-1000`'/>
                        <h1 className="Poppins-SemiBold">Redux</h1>
                        <p className="Poppins-Regular text-xs sm:text-sm text-center">
                            I can manage state using redux and redux thunk & Saga also with toolkit.
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <OwlCarousel
                        className="owl-theme "
                        items={4}
                        loop
                        margin={12}
                        autoplay={true}
                        autoplaySpeed={250}
                        navSpeed={250}
                        responsive={responsive}
                        dots={false}>
                        {LANGUAGES.map((items, index) => {
                            return (
                                <div className="flex justify-center items-center h-20 w-full" key={index}>
                                <img
                                    src={items.IMG.src}
                                    alt=""
                                    className="rounded h-full w-full object-cover cursor-pointer"
                                />
                            </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Services
