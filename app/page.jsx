import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text  */}
          <div className="text-center xl:text-left">
            <span className="lg:text-2xl text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Vishal Singh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/70">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* button and social icons  */}
            <div className="flex flex-col items-center gap-8  lg:flex-row">
              <Link href='/assets/cv/Vishalcv.pdf'>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 lg:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center hover:bg-accent text-base hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
