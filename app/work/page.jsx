"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "I created a movie website called 'VIBES' for watching trailers using the TMDB API. I developed the frontend using React.js, Redux, Axios, SASS, infinite scroll, and Git.",
    stack: [
      { name: "React JS" },
      { name: "Saas" },
      { name: "Redux" },
      { name: "Axios" },
      { name: "Git" },
    ],
    image: "/assets/projects/vibes.png",
    live: "https://vibes-two.vercel.app/",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project 2",
    description:
      "I developed a website for Globedwise using Next.js, incorporating Bootstrap 5, TypeScript, React Slick Slider, Axios, and Git.",
    stack: [
      { name: "Next.js" },
      { name: "Bootstrap 5" },
      { name: "TypeScript" },
      { name: "Axios" },
      { name: "Git" },
    ],
    image: "/assets/projects/globedwise.png",
    live: "https://globedwise.com/  ",
    github: "",
  },
  {
    num: "03",
    category: "WordPress ",
    title: "Project 3",
    description:
      "I developed the website dotzoo.net for Dotzoo.inc. using WordPress from scratch. Utilizing Elementor and its addons, I chose the Phlox theme and implemented the Metform plugin for the contact form. After completion, I deployed it on the domain dotzoo.net.",
    stack: [
      { name: "WordPress" },
      { name: "Elementor" },
      { name: "Elementor Addons" },
      { name: "Phlox theme" },
      { name: "MetForm" },
    ],
    image: "/assets/projects/dotzoo.png",
    live: "https://www.dotzoo.net/",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Project 4",
    description:
      "I created the website ielts.Globedwise using React.js, featuring React Bootstrap, TypeScript, React Slick Slider, Axios, and Git. This site is dedicated to running their Google ads on a live subdomain.",
    stack: [
      { name: "React JS" },
      { name: "Bootstrap" },
      { name: "TypeScript" },
      { name: "Git" },
    ],
    image: "/assets/projects/ieltsGlobedwise.png",
    live: "https://ielts.globedwise.com/",
    github: "",
  },
  {
    num: "05",
    category: "WP E-commerce",
    title: "Project 5",
    description:
      "I created an E-Commerce website called PPE Mart using WordPress to sell COVID-19 and PPE kit products. I utilized Elementor and WooCommerce, setting up the entire E-commerce functionality with the Zakra theme.",
    stack: [
      { name: "WordPress" },
      { name: "Elementor" },
      { name: "Woocommerce" },
      { name: "Zakra theme" },
    ],
    image: "/assets/projects/ppemart.png",
    live: "https://www.ppe-mart.com/",
    github: "",
  },
  {
    num: "06",
    category: "WP CoffeeShop",
    title: "Project 6",
    description:
      "I developed a website for a client offering web development services using the Divi theme and page builder. The project included creating a visually appealing blog page for a coffee shop and integrating WhatsApp chat functionality to enhance customer engagement.",
    stack: [
      { name: "WordPress" },
      { name: "Divi Page Builder" },
      { name: "Whatsapp API" },
      { name: "Divi theme" },
    ],
    image: "/assets/projects/coffeeshop.png",
    live: "https://coffeeshopwebsite.com/",
    github: "",
  },
  {
    num: "07",
    category: "Bibek Trust",
    title: "Project 7",
    description:
      "This is a Simple React Js Website for a Trust, which name Is Bibek Trust, Here I created a beautiful and responsive UI in React JS with Tailwind CSS for styling and Client is using Zoho Form",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Zoho Form" },
      { name: "Github" },
    ],
    image: "/assets/projects/bibektrust.png",
    live: "https://bibektrust.org/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const hanSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex;
    setProject(projects[currentSlideIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center items-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* project details  */}
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* poject category  */}
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description  */}
              <p className="text-white/60">{project.description} </p>
              {/* stack  */}
              <div className="flex gap-2 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      className=""
                      size="md"
                      variant="outline"
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </div>
              {/* border  */}
              <div className="border border-white/20"></div>
              {/* Links  */}
              <div className="flex items-center gap-4">
                {/* Project live button  */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/20 flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:rotate-45 transition-all ease-in-out group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live View</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Project github repo button  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/20 flex items-center justify-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slider  */}
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={hanSlideChange}
              className="lg:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex items-center justify-center">
                      {/* overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image  */}
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-xl"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider btns   */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[16px] w-[32px] h-[32px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
