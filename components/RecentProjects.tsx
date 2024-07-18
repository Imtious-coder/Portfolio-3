/* eslint-disable @next/next/no-img-element */
"use client";

import { projectData } from "@/data/data";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-5 sm:py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
        {projectData.map(
          ({ name, description, fullImage, website, type, code }, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1"
                >
                  {name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-1"
                >
                  {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={fullImage}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <p className="text-neutral-500 text-center text-xs sm:text-sm mt-4 dark:text-neutral-300 font-bold">
                  {type}
                </p>
                <div className="flex justify-between items-center mt-8">
                  <Link
                    href={website}
                    target="_blank"
                    className="flex items-center justify-center space-x-2 px-4 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-normal dark:text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <FaEye />
                    <p>Preview</p>
                  </Link>
                  <Link
                    href={code}
                    target="_blank"
                    className="flex items-center justify-center space-x-2 px-4 sm:px-8 py-2 sm:py-2.5 rounded-full bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
                  >
                    <FaGithub />
                    <p>Github</p>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
