import { HEADER } from './component/header'
import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaPhone,
    FaAddressCard,
} from 'react-icons/fa'
export const Footer = () => {
    const SOCIAL_MEDIA_ = (time, content, link) => (
        <a
            target="_blank"
            href={link}
            // data-aos="fade-up"
            // data-aos-delay={time}
            // data-aos-duration="2000"
            className="cursor-pointer text-white text-xl ">
            {content}
        </a>
    )

    return (
        <div className="bg-no-repeat z-20 text-center flex flex-col items-center justify-center space-y-3 text-white page-padding bg-purple-primary py-4 Poppins-Regular text-xs">
            <div>Copyright © 2022 @MuhammadBilal-Arch. All Rights Reserved</div>

            <div className="space-x-3 md:space-x-4 lg:space-x-6 flex items-center">
                {SOCIAL_MEDIA_(200, <FaFacebook />, '')}
                {SOCIAL_MEDIA_(
                    400,
                    <FaLinkedin />,
                    'https://www.linkedin.com/in/muhammadbilalr/'
                )}
                {SOCIAL_MEDIA_(
                    600,
                    <FaGithub />,
                    'https://github.com/MuhammadBilal-arch'
                )}
                {SOCIAL_MEDIA_(800, <FaTwitter />, '')}
            </div>
        </div>
    )
}
