import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
export const Footer = () => {
    const SOCIAL_MEDIA_ = (content, link) => (
        <a
            target="_blank"
            href={link}
            className="cursor-pointer text-white text-xl ">
            {content}
        </a>
    )

    return (
        <div className="bg-no-repeat z-20 text-center flex flex-col items-center justify-center space-y-3 text-white page-padding bg-purple-primary py-4 Poppins-Regular text-xs">
            <div>
                Copyright © 2022
                <a
                    target="_blank"
                    href={'https://www.upwork.com/freelancers/muhammadbilalchughtai'}
                    className="cursor-pointer text-white px-1">
                    @MuhammadBilal-Arch.
                </a>
                All Rights Reserved
            </div>

            <div className="space-x-3 md:space-x-4 lg:space-x-6 flex items-center">
                {SOCIAL_MEDIA_(
                    <div className="text-xs py-0.5 bg-white text-purple-primary Poppins-Bold px-1.5">
                        Dev
                    </div>,
                    'https://dev.to/muhammadbilalarch'
                )}
                {SOCIAL_MEDIA_(
                    <FaLinkedin />,
                    'https://www.linkedin.com/in/muhammadbilalr/'
                )}
                {SOCIAL_MEDIA_(
                    <FaGithub />,
                    'https://github.com/MuhammadBilal-arch'
                )}
                {SOCIAL_MEDIA_(
                    <FaTwitter />,
                    'https://twitter.com/BilalReal30'
                )}
            </div>
        </div>
    )
}
