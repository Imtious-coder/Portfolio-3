/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow, FaMedium } from "react-icons/fa6";

import Link from "next/link";
import { BsBadge3dFill } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        {/* <a href="imtious.islam.me@gmail.com"> */}
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
        {/* </a> */}
      </div>
      <div className="flex mt-5 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Imtious Islam
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
          <Link
            href={"https://www.facebook.com/imtious.midul/"}
            target="_blank"
          >
            <div className="w-[35px] h-[35px] border-2 border-white/40 hover:border-[#427bf7] cursor-pointer rounded-full flex justify-center items-center">
              <FaFacebookF className="text-[#427bf7] text-[13px]" />
            </div>
          </Link>
          <Link href={"https://github.com/Imtious-coder"} target="_blank">
            <div className="w-[35px] h-[35px] border-2 border-white/40 hover:border-white cursor-pointer rounded-full flex justify-center items-center">
              <FaGithub className="text-white text-[13px]" />
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/imtious/"} target="_blank">
            <div className="w-[35px] h-[35px] border-2 border-white/40 hover:border-[#3a99ec] cursor-pointer rounded-full flex justify-center items-center">
              <FaLinkedinIn className="text-[#3a99ec] text-[13px]" />
            </div>
          </Link>
          <Link href={"https://medium.com/@imtious.islam.me"} target="_blank">
            <div className="w-[35px] h-[35px] border-2 border-white/40 hover:border-[#66cdaa] cursor-pointer rounded-full flex justify-center items-center">
              <FaMedium className="text-[#66cdaa] text-[13px]" />
            </div>
          </Link>
          <Link
            href={"https://imtious-portfolio-3d.netlify.app/"}
            target="_blank"
          >
            <div className="w-[35px] h-[35px] border-2 border-white/40 hover:border-[#facc15] cursor-pointer rounded-full flex justify-center items-center">
              <BsBadge3dFill className="text-[#facc15] text-[14px]" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
