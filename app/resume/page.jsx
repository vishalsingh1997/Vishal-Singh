"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiMui,
  SiRedux,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";

// about data

const about = {
  title: "About Me",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ab quisquam qui.",
  info: [
    { fieldName: "Name", fieldValue: "Vishal Singh" },
    {
      fieldName: "Phone",
      fieldValue: "+91-6395458500",
      path: "tel:+916395458500",
    },
    { fieldName: "Nationality", fieldValue: "Indian" },
    {
      fieldName: "Email",
      fieldValue: "vishal1997official@gmail.com",
      path: "mailto:vishal1997official@gmail.com",
    },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    {
      fieldName: "LinkedIN",
      fieldValue: "vishal-singh-56a9051b5",
      path: "https://www.linkedin.com/in/vishal-singh-56a9051b5/",
    },
    { fieldName: "Language", fieldValue: "English, Hindi" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ],
};

//  experience data
const experience = {
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius beatae odit.",
  items: [
    {
      company: "GlobEdwise Pvt Ltd",
      position: "Front End Developer",
      duration: "Jul 2024 - Present",
    },
    {
      company: "Dotzoo Inc.",
      position: "Front End + Wp Developer",
      duration: "Oct 2022 - June 2024",
    },
    {
      company: "freelance",
      position: "WordPress Developer",
      duration: "Summer 2023",
    },
    {
      company: "Elgoss Pvt Ltd",
      position: "Internship",
      duration: "Feb 2022 - Sep 2022",
    },
  ],
};

//  education data
const education = {
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius beatae odit.",
  items: [
    {
      institute: "SPMIT (AKTU) Prayagraj, UP",
      degree: "Bachelor of Technology",
      duration: "Jul 2019 - May 2022",
    },
    {
      institute: "Govt Polytechnic Rampur",
      degree: "Diploma in Electrical",
      duration: "Jul 2015 - May 2018",
    },
    {
      institute: "CBSE",
      degree: "Senior Secondary 12th",
      duration: "2015",
    },
    {
      institute: "CBSE",
      degree: "High School 10th",
      duration: "2013",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius beatae odit.",
  skillslist: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiMui />,
      name: "Material UI",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiRedux />,
      name: "Redux Toolkit",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "Express JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
    },
  ],
};

const Resume = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center items-center py-12 lg:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col lg:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>
            {/* content  */}
            <div className="w-full min-h-[70vh]">
              {/* experience  */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/50 mx-auto lg:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills  */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <div>
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/50 mx-auto lg:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[24px] gap-3">
                      {skills.skillslist.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{skill.name} </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
                {/* education  */}
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/50 mx-auto lg:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[5px] h-[5px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institute}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* about  */}
              <TabsContent value="about" className="w-full">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/50 mx-auto lg:mx-0">
                    {about.description}{" "}
                  </p>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center lg:justify-start gap-3"
                        >
                          <span className="text-accent">{`${item?.fieldName}-`}</span>
                          {item?.path ? (
                            <Link href={item?.path}>{item?.fieldValue}</Link>
                          ) : (
                            <span className="text-white">
                              {item?.fieldValue}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
