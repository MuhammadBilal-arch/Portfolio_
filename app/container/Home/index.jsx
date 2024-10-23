"use client";
import { useScroll } from "@/app/utils/hooks/useScroll";
import { ASSETS } from "@/public/assets/path";
import React, { useState } from "react";

export const Home = () => {
  const { status } = useScroll(1000);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Function to handle when the video can play
  const handleVideoCanPlay = () => {
    console.log("Video can play");
    setIsVideoLoaded(true); // Set video as loaded
  };

  return (
    <div id="home" className="bg-gray-dashboard flex flex-col">
      <div className="h-screen overflow-hidden">
        <header className="flex items-center justify-center md:justify-start min-h-screen overflow-hidden">
          {/* Fallback element to show while video is loading */}
          {!isVideoLoaded ? (
            <div className="fixed z-10 w-full h-full flex items-center justify-center bg-gray-primary">
              <div className="text-white text-lg lg:text-2xl">Loading...</div>
            </div>
          ) : null}

          <div
            className={`${
              status ? "hidden" : "fixed"
            } max-w-[1440px] mx-auto page-padding z-30 mt-20 text-center md:text-left text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl Poppins-SemiBold sm:w-full md:w-7/12 xl:w-7/12 space-y-6`}
          >
            <div>I love to create beautiful and efficient websites</div>
            <div>
              <div className="space-x-3 lg:space-x-6 flex justify-center md:justify-start text-lg Poppins-Medium">
                <a
                  className="btn-orange-filled"
                  href="https://www.linkedin.com/in/muhammadbilalr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discover
                </a>
                <a href="#contact" className="btn-purple-filled">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed z-10 w-auto min-w-full min-h-full max-w-none"
            preload="metadata" // Only load metadata initially to improve load times
            loading="lazy"     // Lazy load the video
            onCanPlay={handleVideoCanPlay} // Set video as loaded when it can play
          >
            <source src={ASSETS.HEADER_VIDEO} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
      </div>
    </div>
  );
};
