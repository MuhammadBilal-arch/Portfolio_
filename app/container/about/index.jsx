import { Heading } from "@/app/components/heading";
import { ASSETS } from "@/public/assets/path";
import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="bg-gray-extralight page-padding space-y-4 py-24 overflow-hidden  text-purple-primary  z-30"
    >
      <div className="max-w-[1440px] mx-auto space-y-2">
        <Heading title="About" />
        <div className="flex">
          <div className="space-y-2 Poppins-Regular text-xs text-left sm:text-sm xl:text-base">
            <img
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="float-right sm:mb-2 pl-2 md:pl-4 pb-4 w-32 h-32 sm:w-24 sm:h-24 md:w-80 md:h-full lg:w-1/2 
                        duration-1000 object-cover"
              src={ASSETS.PROFILE_IMG.src}
              alt=""
            />
            I’m an experienced <strong className="text-purple-primary">Full Stack Developer</strong> with 3.5 years of expertise
            in building high-quality, responsive websites and applications. I
            specialize in both frontend and backend development, working
            extensively with modern technologies like JavaScript, Node.js, and
            MongoDB.
            <br />
            <br />I have a strong focus on writing clean, maintainable code and
            troubleshooting, debugging, and refactoring existing projects.
            Whether it’s building dynamic web applications from the ground up or
            enhancing existing solutions, I deliver high-quality results
            tailored to client needs.
            <div className="space-y-4">
              <div className="text-xl Poppins-SemiBold">Expeirence</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <div className="text-sm md:text-base Poppins-SemiBold">
                    Fiction Developers
                  </div>
                  <div className="text-xs sm:text-sm">Nov 2023 - Present</div>
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
                  <div className="text-xs sm:text-sm">Feb 2021 - March</div>
                </div>
                <div className="">
                  <div className="text-xs  md:text-base Poppins-SemiBold">
                    HashCraft
                  </div>
                  <div className="text-xs sm:text-sm">Oct 2020 - Dec 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
