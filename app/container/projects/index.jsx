import { Heading } from "@/app/components/heading";
import { ASSETS } from "@/public/assets/path";
import React from "react";

export const Projects = () => {
  const ProjectList = [
    {
      img: ASSETS.PROJECTS.LISTENER_1,
      name: "The Listener",
      desc: "TheListener helped numerous people in functioning better and improving their well-being through therapy.",
      url: "https://thelistener.pk/",
    },
    {
      img: ASSETS.PROJECTS.QCAST_1,
      name: "Qcast",
      desc: "Qcast is a new social network built on visual questions and answers.",
      url: "https://qcast.io/",
    },
    {
      img: ASSETS.PROJECTS.GANGAGO,
      name: "GangaGo",
      desc: "Simplifying access to medicinal dispensaries with features like real-time order tracking and data-driven product suggestions",
      url: "http://ganjago-bucket.s3-website-us-east-1.amazonaws.com/",
    },
    {
      img: ASSETS.PROJECTS.TAGTEKA,
      name: "Tag Teka",
      desc: "The best RFID asset tracking software to reduce lost equipment, increase productivity, and eliminate unnecessary asset costs.",
      url: "https://mb-blue.vercel.app/",
    },
    {
      img: ASSETS.PROJECTS.ALIEN_FITNESS,
      name: "Alien Fitness",
      desc: "Alien Fitness is a gym that helps people with fitness issues. It helps people to maintain their fitness.",
      url: "https://mb-blue.vercel.app/",
    },
    {
      img: ASSETS.PROJECTS.UDT,
      name: "United Drivers Trust",
      desc: "A platform focused on providing drivers to manage vehicle details also a company able to track drivers.",
      url: "https://udt-iota.vercel.app/",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-purple-standard to-gray-lightmedium page-padding text-center py-24 overflow-hidden  text-white z-30"
    >
      <div className="max-w-[1440px] mx-auto space-y-8">
      <div className="space-y-4">
        <Heading title="Projects" />
        <div className="Poppins-Regular text-xs sm:text-sm md:text-base lg:text-lg">
          Listed below are some of the most representative projects I've worked
          on. They range from basic web design for presentation sites to
          advanced web development for companies.
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {ProjectList.map((item, index) => (
          <div
            key={index}
            className="  bg-gray-extralight p-4 text-gray-normal group overflow-hidden space-y-2 cursor-pointer"
          >
            <div className="max-h-48 h-48 overflow-hidden">
              <img
                src={item.img.src}
                alt=""
                className="w-full min-h-48 object-center object-cover group-hover:scale-105 duration-1000 "
              />
            </div>
            <div className="text-left">
              <div className="text-base Poppins-Medium text-purple-primary">
                {item.name}
              </div>
              <p className="text-xs  Poppins-Regular text-left h-12 mb-4">
                {item.desc}
              </p>

              <a
                className="btn-purple-normal-filled group-hover:bg-orange-primary hover:text-white text-xs"
                href={item.url}
                target="_blank"
              >
                Visit {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
