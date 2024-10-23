import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export const Footer = () => {
    const SOCIAL_MEDIA_ = (content, link, label) => (
        <a
            target="_blank"
            href={link}
            className="cursor-pointer text-white text-xl"
            aria-label={label}
        >
            {content}
        </a>
    );

    return (
        <div className="bg-no-repeat z-20 text-center flex flex-col items-center justify-center space-y-3 text-white page-padding bg-purple-primary py-4 Poppins-Regular text-xs">
            <div>
                Copyright © 2022
                <a
                    target="_blank"
                    href="https://github.com/MuhammadBilal-arch"
                    className="cursor-pointer text-white px-1"
                    aria-label="Visit Muhammad Bilal's GitHub profile"
                >
                    @MuhammadBilal-Arch.
                </a>
                All Rights Reserved
            </div>

            <div className="space-x-3 md:space-x-4 lg:space-x-6 flex items-center">
                {SOCIAL_MEDIA_(
                    <div className="text-xs py-0.5 bg-white text-purple-primary Poppins-Bold px-1.5">
                        Dev
                    </div>,
                    'https://dev.to/muhammadbilalarch',
                    'Visit Muhammad Bilal\'s Dev.to profile'
                )}
                {SOCIAL_MEDIA_(
                    <FaLinkedin />,
                    'https://www.linkedin.com/in/muhammadbilalr/',
                    'Visit Muhammad Bilal\'s LinkedIn profile'
                )}
                {SOCIAL_MEDIA_(
                    <FaGithub />,
                    'https://github.com/MuhammadBilal-arch',
                    'Visit Muhammad Bilal\'s GitHub profile'
                )}
                {SOCIAL_MEDIA_(
                    <FaTwitter />,
                    'https://twitter.com/BilalReal30',
                    'Visit Muhammad Bilal\'s Twitter profile'
                )}
            </div>
        </div>
    );
};
