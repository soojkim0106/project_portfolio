"use client";

import Image from "next/image";
import picImg from "@/public/pic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {

  const { ref } = useSectionInView("Home", 0.5);
  
  return (
    <section ref={ref} className="mb-2 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
      <div className="flex item-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={picImg}
              alt="picture of me"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {`Hi, I'm Soojung. I'm a junior full-stack developer based in San Francisco, California. I'm currently looking for a full-time position as a junior developer.`}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>

        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10" href="/SJK_Resume.pdf" download>
          Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>

        <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://www.linkedin.com/in/soo-jung-kim0106/" target="_blank">
          <BsLinkedin />
        </a>

        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://github.com/soojkim0106" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
