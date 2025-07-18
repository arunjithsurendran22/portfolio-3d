import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import CarouselNew from "../components/CarouselNew";
import ProjectCard from "../components/ProjectCard";
import { myProjects } from "../constants";

const Projects = () => {
  return (
    <section className="w-full h-full flex-center relative" id="projects">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="w-full md:my-40 my-20 relative z-10">
        <div className="container mx-auto md:p-0 px-5">
          <TitleHeader
            title="My PROJECTS"
            number="03"
            text="Check my recent project below for your Goal"
          />
        </div>

        <div className="md:mt-20 mt-10">
          <CarouselNew gap="gap-4">
            {myProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </CarouselNew>
        </div>
      </div>
    </section>
  );
};

export default Projects;
