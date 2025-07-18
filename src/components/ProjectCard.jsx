import PropTypes from "prop-types";
import { HiArrowUpRight } from "react-icons/hi2"
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-black rounded-2xl shadow-lg overflow-hidden w-[800px] h-[500px] flex flex-col hover:shadow-2xl transition-shadow duration-300 group relative">
      {/* Image with Deep Bottom Gradient */}
      <div className="relative w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient + Flex Content */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-black/75 px-6 py-4 flex items-center justify-between rounded-b-2xl">
          {/* Title */}
          <h3 className="text-2xl font-aeonik font-semibold tracking-wide bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            {project.title}
          </h3>

          {/* Button with Gradient Text and Icons */}
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent border border-white/20 px-5 py-2.5 rounded-md hover:brightness-110 transition duration-200"
          >
            View Demo   <HiArrowUpRight size={16} className="text-gray-500"/>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
