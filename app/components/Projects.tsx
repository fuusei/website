import { projects } from "@/utils/projectList";
import { ProjectCard } from "./ProjectCard";
import useOnScreen from "./useOnScreen";
import { motion } from "framer-motion";
import { fadeIn, staggerFadeIn } from "./animations";

export function Projects() {
  const { ref: headerRef, controls: headerControls } = useOnScreen();
  const { ref: contentRef, controls: contentControls } = useOnScreen();
  return (
    <section
      id="projects"
      className="flex items-center w-full min-h-screen px-[8%] pb-[3%]"
    >
      <div className="flex flex-col justify-start">
        <motion.h1
          className="flex justify-start lg:justify-center font-bold pb-14 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8"
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeIn}
        >
          Projects
        </motion.h1>
        <div className="flex flex-wrap justify-evenly">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={contentRef}
              initial="hidden"
              animate={contentControls}
              variants={staggerFadeIn}
              custom={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
